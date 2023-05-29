import React,{useEffect} from 'react'
import "./startuprofile.css"

const Startupprofilecard = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      });
  return (
   <>
   <div className='spcontainer'>
    <div className='spfirstcontainer'>
    <h1>Hello Welcome to {props.Name}</h1>
    <div className='spfirstinnercontainer'>
    <img src={props.img} height="100rem" width="30%"/>
    <h3 id="typewriter-length">{props.Title}</h3>
       <div>
            <h3>AboutUs</h3>
            <h3>ContactUs</h3>
            <h3>Reviews and Ratings</h3>
        </div>
    </div>
    </div>
    <div style={{display:"flex"}}>
    <div style={{backgroundColor:"yellow",width:"1rem",height:"1rem",opacity:".8",marginLeft:"30%",borderRadius:"30%"}}></div>
    <div style={{backgroundColor:"cyan",width:"2rem",height:"2rem",transform: "rotate(45deg)",opacity:".5",marginLeft:"20%",borderRadius:"30%"}}></div>
    </div>
    {/* <div className='spsecondcontainer'>
        <div>{props.Category}</div>
        <div>{props.overview}</div>
        <div>{props.ratings}</div>
        <div>
            <div>{props.location}</div>
            <div>{props.helplineno}</div>
            <div>{props.Name}{props.mail}</div>
            <div>{props.Name}{props.websitelink}</div>
            <div>{props.applink}</div>
        </div>
    </div> */}
     {/* <div style={{marginTop:"10%"}}>
     <div style={{backgroundColor:"orange",width:"1.2rem",height:"1.2rem",marginLeft:"40%",  transform: "rotate(45deg)",opacity:".4"}}></div>
     <div style={{backgroundColor:"cyan",width:"1rem",height:"1rem",marginLeft:"30%",borderRadius:"50%"}}></div>
     <div style={{backgroundColor:"cyan",width:".8rem",height:".8rem",marginLeft:"30%",borderRadius:"50%"}}></div>
     <div style={{backgroundColor:"cyan",width:".6rem",height:".6rem",marginLeft:"30%",borderRadius:"50%"}}></div>
     </div> */}
     <div style={{backgroundColor:"magenta",width:"2.5rem",height:"2.5rem",transform: "rotate(-30deg)",opacity:".5",marginLeft:"3rem",borderRadius:"30%",marginTop:"4rem"}}></div>
    <div className='spsecondcontainer'>
        <div style={{display:"flex",padding:"2rem"}}>
        <div>
            <div className="stylecompo" style={{marginLeft:"3rem"}}></div>
            <div style={{display:"flex",marginLeft:"1.9rem",marginTop:"0.2rem"}}>
            <div className="stylecompo"></div>
            <div className="stylecompo"></div>
            </div>
            <div style={{display:"flex",marginLeft:"1rem",marginTop:"0.2rem"}}>
            <div className="stylecompo"></div>
            <div className="stylecompo"></div>
            <div className="stylecompo"></div>
            </div>
        </div>
        <div className='spsecondinnercontainer card1'>{props.Category}</div>
        <div className='spsecondinnercontainer card1'>{props.overview}</div>
        <div className='spsecondinnercontainer card1'>{props.ratings}</div>
        <div className='spsecondinnercontainer card1'>{props.location}</div>
        </div>
        <div style={{backgroundColor:"orange",width:"2.5rem",height:"2.5rem",transform: "rotate(-30deg)",opacity:".5",marginLeft:"3rem",borderRadius:"30%",marginTop:"4rem",float:"right"}}></div>
        <div style={{display:"flex",padding:"2rem"}}>
        <div className='spsecondinnercontainer card1'>{props.helplineno}</div>
        <div className='spsecondinnercontainer card1'>{props.Name}{props.mail}</div>
        <div className='spsecondinnercontainer card1'>{props.Name}{props.websitelink}</div>
        <div className='spsecondinnercontainer card1'><a src={props.applink}>Download App</a></div>
        <div style={{marginTop:"5rem"}}>
            <div className="stylecompo"></div>
            <div style={{display:"flex",marginTop:"0.2rem"}}>
            <div className="stylecompo"></div>
            <div className="stylecompo"></div>
            </div>
            <div style={{display:"flex",marginTop:"0.2rem"}}>
            <div className="stylecompo"></div>
            <div className="stylecompo"></div>
            <div className="stylecompo"></div>
            </div>
        </div>
        </div>
    </div>
    </div>
   </>
  )
}

export default Startupprofilecard