import React from 'react'

import "./number.css"

const Number = (props) => {
  const styles = props.style;
  return (
    <div style={{height:"250px", width:"300px"}}>
    <div style={styles}>
    <h1 style={{paddingTop:"70px",paddingLeft:"50px"}}>{props.data}</h1>
    </div>
    <h4 style={{textAlign:"center"}}>{props.title}</h4>
    </div>
  );
}
export default Number