import React from 'react';
import ReactRoundedImage from "react-rounded-image";

const SecondProfile =({selectedChat})=>{
return(
    <div style={{background:'#D7DBDD', height:'200px', width:'200px',marginLeft:'30px', borderRadius:'15px',marginTop:'20px'}}>
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',paddingTop:'20px'}}>
            <ReactRoundedImage
            image={selectedChat.image}
            roundedColor="#321124"
            imageWidth="70"
            imageHeight="70"
            roundedSize="1"
            borderRadius="70"
            />
            <text style={{fontSize:'11px'}}>{selectedChat.email}</text>
            <text style={{fontSize:'11px'}}>{selectedChat.name}</text>
            <text style={{fontSize:'11px'}}>Archive</text>
            
        </div>

    </div>
)
}

export default SecondProfile;