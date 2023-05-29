import React from 'react'
import "./eventcard.css"
import { FaUserAlt,FaClock } from "react-icons/fa";
const Eventcard = (props) => {
  const handleCardClick = () => {
    if (props.onSelect) {
      props.onSelect(props);
    }
  };

  return (
    <div>
    <div className='outercontainer' onClick={handleCardClick}>
    <div className='innercontainer'>
     <img src={props.image} alt="startup logo" height="90rem"></img>
     <div>
     <h1>{props.eventname}</h1>
     <h5>{props.location}</h5>
     </div>
     </div>
     <div className='eventcategorycontainer'>
        <h5>#{props.eventcategory}</h5>
     </div>
     <div className='finalcontainer'>
        <div className='finalcontainerfirstdiv'>
        <FaUserAlt fontSize="1.2rem" />
            <p>x Registered</p>
        </div>
        <div className='finalcontainerseconddiv'>
        <FaClock fontSize="1.2rem" />
            <p>y days left</p>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Eventcard