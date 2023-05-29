import React, { useState } from 'react';
import "./eventhome.css";
import Eventcard from './eventcard/Eventcard';
import logo from "./logo192.png";
import {BsFillGeoAltFill,BsFillBuildingsFill} from "react-icons/bs"
import {FaCalendarAlt, FaHeart,FaRupeeSign} from "react-icons/fa"

const Eventhome = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const selectEvent = (event) => {
    setSelectedEvent(event);
  }

  return (
    <div className="wrapper">
      <div className="eventcontainer">
        <Eventcard image={logo} eventname="IT Concalve" location="Jaipur" eventcategory="AI" onSelect={() => selectEvent({ eventname: "IT Concalve", location: "Jaipur", eventcategory: "AI",image:logo,eventprice:"100"})} />
        <Eventcard image={logo} eventname="Fund Raiser" location="Bangalore" eventcategory="Business" onSelect={() => selectEvent({ eventname: "Fund Raiser", location: "Bangalore", eventcategory: "Business",image:logo,eventprice:"100"  })} />
        <Eventcard image={logo} eventname="Open AI" location="Pune" eventcategory="AI" onSelect={() => selectEvent({ eventname: "Open AI", location: "Pune", eventcategory: "AI",image:logo ,eventprice:"100" })} />
        <Eventcard image={logo} eventname="Salery" location="Jaipur" eventcategory="Marketing" onSelect={() => selectEvent({ eventname: "Salery", location: "Jaipur", eventcategory: "Marketing",image:logo ,eventprice:"100" })} />
        <Eventcard image={logo} eventname="Rocket" location="Noida" eventcategory="Accelerator" onSelect={() => selectEvent({ eventname: "Rocket", location: "Noida", eventcategory: "Accelerator",image:logo ,eventprice:"100" })} />
      </div>
      <div className="scrollbar"></div>
      <div className="eventdetailcontainer">
        {selectedEvent ? (
          <div className="eventdetail">
            <div className='eventdetailfirst'>
            <img src={selectedEvent.image}/>
            <div style={{marginLeft:"5rem"}}>
            <h2>{selectedEvent.eventname}</h2>
            <div style={{display:"flex"}}>
            <BsFillBuildingsFill fontSize="1.2rem"/>
            <p style={{marginLeft:".5rem"}}>Jaipur Engineering College and Research Centre</p>
            </div>
            <div style={{display:"flex"}}>
            <BsFillGeoAltFill  fontSize="1.2rem"/>
            <p style={{marginLeft:".5rem"}}>{selectedEvent.location}</p>
            </div>
           
            </div>
            
            </div>
            <div  className='eventdetailsecond'>
                <div className='disp'>
                    <FaHeart fontSize="1.2rem" /> 
                    <p>+Watchlist</p>   
                </div>
                <div className='disp'>
                    <FaCalendarAlt fontSize="1.2rem" />
                    <p>+Calendar</p>
                </div> 
                <div className='disp1'>
                    <div>
                    <FaRupeeSign fontSize="1.3rem"/>
                    <h3>{selectedEvent.eventprice}</h3>
                    </div>
                    <button>
                     <h3> Register </h3>
                    </button>
                </div>      
               
            </div>
          </div>
        ) : (
          <div className="noevent">
            <p>No event selected</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Eventhome;
