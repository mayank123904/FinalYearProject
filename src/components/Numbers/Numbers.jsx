import React,{useRef, useEffect } from 'react'
import Number from './Number'
import "./numbers.css"

const Numbers = () => {
  const mystyles1={
    borderRadius : "50%",
    backgroundColor : "red",
    opacity : "0.8",
    height : "150px",
    width : "150px",
    marginLeft : "80px",
    color:"black",
  };
  const mystyles2={
    borderRadius : "50%",
    backgroundColor : "blue",
    opacity : "0.8",
    height : "150px",
    width : "150px",
    marginLeft : "80px",
    transitionDelay: "1.6s",
    transition: ".5s ease-in-out",
    color:"black",
  };
  const mystyles3={
    borderRadius : "50%",
    backgroundColor : "green",
    opacity : "0.8",
    height : "150px",
    width : "150px",
    marginLeft : "80px",
    transitionDelay: "1.8s",
    transition: ".5s ease-in-out",
    color:"black",
  };
  const mystyles4={
    borderRadius : "50%",
    backgroundColor : "yellow",
    opacity : "0.8",
    height : "150px",
    width : "150px",
    marginLeft : "80px",
    transitionDelay: "2s",
    transition: ".5s ease-in-out",
    color:"black",
  };  
  
  const contentRef = useRef(null);


useEffect(() => {
      const handleScroll = () => {
        const content = contentRef.current;
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


  return (
    <>
    <h1 className="numbersheading" ref={contentRef}> Our Numbers</h1>
    <div className="numberscontainer">
    <div className="numbersinnercontainer">
    <Number data="~5 Mn" title="Users" style={mystyles1}/>
    <Number data="130K+" title="Opportunities" style={mystyles2}/>
    </div>
    <div className="numbersinnercontainer">
    <Number data="100+" title="Organization" style={mystyles3}/>
    <Number data="500+" title="Brands trust us" style={mystyles4} />
    </div>
</div>
    </>
  )
}

export default Numbers