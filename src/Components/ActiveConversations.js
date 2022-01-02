
import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import Image from '../images/virat.jpg'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatListItem from './ChatListItem';

const ActiveConversations =({chatList,setChatList, selectedChat,setSelectedChat,setConversations})=>{

return(
    <div style={{margin:'20px'}}>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Active Conversations</Typography>
        </AccordionSummary>
          {
              chatList.map(item=>
                <AccordionDetails>
                     <ChatListItem chatItem={item} setSelectedChat={setSelectedChat} setConversations={setConversations}/>
                </AccordionDetails>
              )
          }
      </Accordion>

    </div>
)
}

export default ActiveConversations;