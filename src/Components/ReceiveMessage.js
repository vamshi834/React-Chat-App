import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import Typography from '@material-ui/core/Typography';

const ReceiveMessage =({selectedChat,messageDetails})=>{
 
return(
        <div style={{display:'flex', flexDirection:'row',alignItems:'center',margin:'10px'}}>
                
                <ReactRoundedImage
                image={selectedChat.image}
                roundedColor="#321124"
                imageWidth="30"
                imageHeight="30"
                roundedSize="1"
                borderRadius="70"
                />
                <Typography style={{background:'white',paddingLeft:'20px',fontSize:'11px',overflowWrap:'break-word',wordWrap:'break-word',maxWidth:'200px',textAlign:'left',borderRadius:'10px'}}>{messageDetails.message}</Typography>
        </div>
)
}

export default ReceiveMessage;