
import React from 'react';
import ReactRoundedImage from "react-rounded-image";

const Profile =({viratProfle})=>{
return(
    <div style={{background:'#D7DBDD', height:'200px', width:'200px',marginLeft:'30px', borderRadius:'15px',marginTop:'20px'}}>
        <div style={{display:'flex', flexDirection:'column',alignItems:'center',paddingTop:'20px'}}>
            <ReactRoundedImage
            image={viratProfle}
            roundedColor="#321124"
            imageWidth="70"
            imageHeight="70"
            roundedSize="1"
            borderRadius="70"
            />
            <text style={{fontWeight:'bold'}}>Virat Kohli</text>
            <text style={{fontSize:'11px'}}>Indian Batsmen</text>
            <text style={{fontSize:'11px'}}>Active</text>
            
        </div>

    </div>
)
}

export default Profile;