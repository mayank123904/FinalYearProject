import React from 'react'
import { SocialIcon } from 'react-social-icons';

import "./Footer.css"


const Footer=()=>{
return(
<>
<div style={{backgroundColor:"royalblue",display:"flex", color:"white"}} className="footercontainer">
<div>
  <h1>Startup Nurserry</h1>
  <p>Mayank Jain (Co-Founder)</p>
    <p>mj2391791@gmail.com</p>
    <p>Jaipur Engineering College And Research Centre, Sitapura, Jaipur, Rajathan, 302022</p>
</div>
<div style={{marginLeft:"60px"}}>
  <h1>Contacts</h1>
  <p>Toll Free No.: 0141 2770232 / 7742786794 / 8529671027</p>
  <div style={{display:"flex"}}>
  <SocialIcon url="https://twitter.com/MayankJ60160521" />
  <SocialIcon url="https://www.linkedin.com/in/mayank-jain-ba405a199/" />
  <SocialIcon url="https://web.telegram.org/k/" />
  <SocialIcon url="https://www.youtube.com/" />
  </div>
</div>
<div style={{marginLeft:"60px"}}>
  <h1>Links</h1>
  <p>Contact Us</p>
  <p>Help & Support</p>
  <p>Home</p>
</div>
<div style={{marginLeft:"90px"}}>
  <h1>Available</h1>
  <h3>Last Updated on:</h3>
  <p> 13-04-2023</p>
  <h3>Working Hours: </h3>
  <p>Mon - Fir : 09:30 AM - 6:00 PM</p>
</div>
</div>
{/* </div> */}
</>
);
};

export default Footer