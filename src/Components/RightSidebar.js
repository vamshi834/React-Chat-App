import React from 'react';
import SecondProfile from './SecondProfile';

const RightSidebar =({selectedChat})=>{
return(
    <div style={{ height:'100%', width:'20%'}}>
        <SecondProfile selectedChat={selectedChat} />
    </div>
)
}

export default RightSidebar;