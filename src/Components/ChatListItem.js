
import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import Typography from '@material-ui/core/Typography';

const ChatListItem =({chatItem,setSelectedChat,setConversations})=>{
    const handleClick=()=>{
        setConversations([]);
        setSelectedChat(chatItem);
    }
return(
    <div style={{}}>
        <div style={{display:'flex', flexDirection:'row',alignItems:'center'}} onClick={()=>handleClick()}>
            <ReactRoundedImage
            image={chatItem.image}
            roundedColor="#321124"
            imageWidth="30"
            imageHeight="30"
            roundedSize="1"
            borderRadius="70"
            />
            <Typography style={{paddingLeft:'20px',fontSize:'11px'}}>{chatItem.name}</Typography>
            
        </div>

    </div>
)
}

export default ChatListItem;