
import React from 'react';
import ReactRoundedImage from "react-rounded-image";
import Typography from '@material-ui/core/Typography';
import Image from '../images/virat.jpg'

const SentMessage =({messageDetails})=>{
return(
        <div style={{display:'flex', flexDirection:'row',alignItems:'center',margin:'10px'}}>
            <div style={{float:'left'}}>
                <Typography style={{background:'black',paddingLeft:'20px',fontSize:'11px',overflowWrap:'break-word',wordWrap:'break-word',maxWidth:'200px',textAlign:'left',color:'white',borderRadius:'10px'}}>{messageDetails.message}</Typography>
            </div>
            <div style={{float:'right'}}>
                <ReactRoundedImage
                image={Image}
                roundedColor="#321124"
                imageWidth="30"
                imageHeight="30"
                roundedSize="1"
                borderRadius="70"
                />
            </div>
            
        </div>
)
}

export default SentMessage;