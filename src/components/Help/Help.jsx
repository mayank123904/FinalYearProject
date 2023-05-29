import React,{useRef, useEffect } from 'react'
import helpman from "./helpman.avif"
import "./help.css"

const Help=()=>{

  const imageRef = useRef(null);
  const contentRef = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        const image = imageRef.current;
        const content = contentRef.current;
  
        if (image) {
          const imagePosition = image.getBoundingClientRect();
          const windowHeight = window.innerHeight;
  
          if (imagePosition.top <= windowHeight && imagePosition.bottom >= 0) {
            image.classList.add('animated');
          }
        }
  
        if (content) {
          const contentPosition = content.getBoundingClientRect();
          const windowHeight = window.innerHeight;
  
          if (contentPosition.top <= windowHeight && contentPosition.bottom >= 0) {
            content.classList.add('animated');
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

return(
<> 
<div style={{backgroundColor:"white"}}>
    <div className="helpcontainer">
    <img src={helpman} alt="Helpman" className="animate" ref={imageRef} />
    <div style={{textAlign:"center",marginLeft:"80px"}} ref={contentRef} className="content">
        <h1>Still didn't get your answer?</h1>
        <h1 style={{color:"blue"}}>Connect with us @ 0141 2770232 / 7742786794 / 8529671027</h1>
        <h4>https://jecrcfoundation.com/contact-us</h4>
        <button>Greivance</button>
    </div>
    </div>
</div>
</>
);
};

export default Help