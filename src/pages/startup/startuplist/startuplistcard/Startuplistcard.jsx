import React from 'react'
import "./startuplistcard.css"

const Startuplistcard = (props) => {
  return (
    <div className='cardcontainer'>
    <div className='innercontainerfirst'>
        <img src={props.img} height="180rem" width="60%"/>
    </div>
    <div>
    <h2>{props.title}</h2>
    <h5 style={{color:"black",textAlign:"center"}}>{props.Category}</h5>
    {/* <p>{props.startuplink}</p> */}
    </div>
    <div>
        <button className='btn' onClick={props.onClick}>
           <div> PROFILE</div>
        </button>
    </div>
    </div>
  )
}

export default Startuplistcard