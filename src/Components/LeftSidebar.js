import React from 'react';
import Profile from './Profile';
import { AiFillThunderbolt } from 'react-icons/ai';
import ActiveConversations from './ActiveConversations';
import ArchiveConversation from './ArchiveConversation';

const LeftSidebar =({viratProfle,chatList,setChatList, selectedChat,setSelectedChat,archiveList,setConversations})=>{
return(
    <div style={{ height:'100%', width:'20%',overflow:'auto'}}>
        <div style={{display:'flex', flexDirection:'row',alignItems:'center',margin:'10px 0px 0px 75px'}}>
            <AiFillThunderbolt/>
            <text style={{fontWeight:'bold'}}>QuickChat</text>
        </div>
        
        <Profile viratProfle={viratProfle}/>
        <ActiveConversations chatList={chatList} setChatList={setChatList} selectedChat={selectedChat} setSelectedChat={setSelectedChat} setConversations={setConversations}/>
        <ArchiveConversation archiveList={archiveList} />
    </div>
)
}

export default LeftSidebar;