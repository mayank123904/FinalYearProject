import React from 'react';
import "./mycomp.css"

function MyCompo(props){
  const styles = props.style;
  return (
    <>
    <div className="compcontainer">
    <div className="mycompcontainer" style={styles}>
      <a href={props.firstlink}>{props.first}</a>
    </div>
    </div>
    </>
  );
}

export default MyCompo;