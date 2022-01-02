import React, {useState} from 'react';
import LeftSidebar from './LeftSidebar';
import Chat from './Chat';
import RightSidebar from './RightSidebar';
import Virat from '../images/virat.jpg'
import ABD from '../images/abd.jpg'
import Bhuvi from '../images/bhuvi.jpg'
import Bravo from '../images/bravo.jpg'
import Dhoni from '../images/dhoni.jpg'
import Jadeja from '../images/jadeja.jpg'
import Rashid from '../images/rashid.jpg'
import Rahul from '../images/rahul.jpg'
import Raina from '../images/raina.jpg'
import Kane from '../images/kane.jpg'

const Home =()=>{
    const [chatList, setChatList]= useState([
        {id:0,name:'AB devillers', image:ABD,email:"abdevillers@gmail.com"},
        {id:2,name:'S Raina', image:Raina,email:"sraina@gmail.com"},
        {id:1,name:'MS Dhoni', image:Dhoni,email:"msdhoni@gmail.com"},
        {id:3,name:'KL Rahul', image:Rahul,email:"klrahul@gmail.com"},
        {id:4,name:'Rashid K', image:Rashid,email:"rashidk@gmail.com"},
        {id:5,name:'Bhuvi Kumar', image:Bhuvi,email:"bhuvikumar@gmail.com"},
    ]);
    const archiveList= [
        {id:0,name:'Kane Williamson', image:Kane,email:"kanewilliamson@gmail.com"},
        {id:2,name:'R Jadeja', image:Jadeja,email:"rjadeja@gmail.com"},
        {id:1,name:'DJ Bravo', image:Bravo,email:"djbravo@gmail.com"},
    ];
    const [conversations,setConversations]=useState([]);
    const [selectedChat,setSelectedChat]=useState(chatList[0]);
    console.log(selectedChat);
return(
    <div style={{background:'white',display:'flex', flexDirection:'row', height:'100vh', width:'100vw',marginLeft:'40px',marginRight:'40px'}}>

        <LeftSidebar viratProfle={Virat} chatList={chatList} setChatList={setChatList} selectedChat={selectedChat} setSelectedChat={setSelectedChat} archiveList={archiveList} setConversations={setConversations}/>
        <Chat selectedChat={selectedChat} conversations={conversations} setConversations={setConversations}/>
        <RightSidebar selectedChat={selectedChat}/>
    </div>
)
}

export default Home;