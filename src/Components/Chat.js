import React, { useState } from 'react';
import { Input,Button } from '@material-ui/core';
import SentMessage from './SentMessage';
import Profile from './Profile';
import ReceiveMessage from './ReceiveMessage';

const Chat =({selectedChat,conversations,setConversations})=>{

    const [message,setMessage]=useState("");
    const newCon=conversations;

    const handleClick=()=>{
        newCon.push({isSentMess:true,message:message});
        setConversations(newCon);
        setTimeout(()=>{newCon.push({isSentMess:false,message:"It is a Automated Replay"});setConversations(newCon);},2000);
        setMessage("");
    }
    console.log(conversations);

    const getConver=()=>{
        let list=[];
        conversations.map(item=>{
                
            const conver=item.isSentMess ? (
                <li style={{width:'100%'}}>
                <div style={{margin:'5px',display:'flex',justifyContent:'flex-end' }}>
                    <SentMessage messageDetails={item}/>
                </div>
                </li>
            ):
            (
                <li style={{width:'100%'}}>
                <div style={{margin:'5px',display:'flex',justifyContent:'flex-start'}}>
                    <ReceiveMessage selectedChat={selectedChat} messageDetails={item}/>
                </div>
                </li>
            )
            list.push(conver);
        })
        return list;
    };

return(
    <div style={{background:'#D7DBDD', height:'100%', width:'58%',overflow:'auto',bottom:'5'}}>
        <div style={{marginBottom:'30px'}}>
            <ul style={{listStyleType:'none'}}>
                {getConver()}
            </ul>
        </div>
        <div style={{background:'white',margin:'10px',position:'absolute',bottom:'0', width:'47.5%'}}>
            <Input onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Enter your massage" style={{borderRadius:'10px',margin:'10px', width:'20em',lineBreak:'auto',wordWrap:'break-word',maxWidth:'20em',textAlign:'left'}}/>
            <Button onClick={()=>message!=="" && handleClick()} style={{background:'blue',margin:'10px', borderRadius:'20px'}}>Send</Button>
        </div>
    </div>
)
}

export default Chat;