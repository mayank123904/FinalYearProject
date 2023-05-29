import React from 'react'
import Metadata from '../components/Metadata'
import Help from '../components/Help/Help'
import Faqs from '../components/Faq/Faq'
import Numbers from '../components/Numbers/Numbers'
import MyCompo from '../components/mycomp/Mycomp'

import "./home2.css";

const Home2 = () => {
  return (
    <>
    <Metadata title="Startup Nurserry" /> 

    <div className="banner">
        <p>Welcome to our Startup Nurserry</p>
        <h1>FIND OUR AMAZING SERVICES</h1>
      </div>
     <div style={{display:"flex",margin:"20px 250px 20px 20px"}}>

     <div className="mycompocontainer">
      <div className="myinnercompocontainer">
     <MyCompo first="Start up" firstlink="http://localhost:5173/home2/startup"/>
      </div>
      <div className="myinnercompocontainer">
     <MyCompo first="Investors" firstlink="http://localhost:5173/home2/investor"/>
     </div>
     </div>
     
     <div className="mycompocontainer">
     <div className="myinnercompocontainer">
     <MyCompo first="Incubators" firstlink="http://localhost:5173/home2/incubator"/>
     </div>
     <div className="myinnercompocontainer">
     <MyCompo first="Events" firstlink="http://localhost:5173/home2/event" />
     </div>
     </div>
     </div>
    <Numbers />
     <Faqs />
     <Help />
    </>
  )
}

export default Home2