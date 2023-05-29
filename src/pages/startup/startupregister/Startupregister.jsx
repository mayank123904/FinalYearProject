import React, {useEffect,useState}from 'react'
import './startupregister.css';
import draw2 from "./draw2.jpg"
import {FaLinkedinIn,FaLink,FaFileImport} from "react-icons/fa"

const Addstart = () =>{
      const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    const container = document.getElementById('container');
    setTimeout(() => {
      container.classList.add('sign-up');
    }, 200);
  }, []);

  const toggle = () => {
    const container = document.getElementById('container');
    setIsSignIn(!isSignIn);
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
  };

 return (
   <>
   <div id="container" className='container'>
    {/* Form section */}
      <div className='row'>
        {/* SIGN UP */}
        <div className='col align-items-center flex-col sign-up'> 
        <div className="form-wrapper align-items-center">
            <div class="form sign-up">
                <div className="input-group">
                    <i className='bx bxs-user' />
                    <input type="text" placeholder='Name of start-up' />
                </div>
                <div className="input-group">
                <i className='bx' ><FaLink/></i>
                    <input type="text" placeholder='Link to your start-up' />
                </div>
                <div className="input-group">
                    <i className='bx bxs-lock-alt' />
                    <input type="text" placeholder="Industry" />
                </div>
                <div className="input-group">
                    <i className='bx bxs-lock-alt' />
                    <input type="text" placeholder="Stage" />
                </div>
                <div className="input-group">
                  
                 {/* <span className='bx'> <FaLinkedinIn /> </span> */}
                 <i className='bx'><FaLinkedinIn /></i>
                    <input type="text" placeholder="Add linkedin profile" />
                </div>
                <div className="input-group">
                <i className='bx' ><FaFileImport/></i>
                    <input type="file" placeholder='Select start-up logo' />
                </div>
                <button>
                   Add now
                </button>
            </div>
        </div>
        </div>
        {/* SIGN IN */}
        <div className='col align-items-center flex-col sign-in'>
  
        </div>
      </div>
      {/* End Form Section */}

      {/* Content Section */}
    
      <div className="row content-row">

        {/* Sign in content */}

       <div className="col align-items-center flex-col">

       <div className="img sign-in">
       <img src={draw2} alt="draw2" />
       </div>
       </div> 

       {/* Sign out content */}
       <div className="col align-items-center flex-col">
       <div className="img sign-up">
       <img src={draw2} alt="draw2" />
       </div>
       <div className="text sign-up">
        <h2>
           Register your Startup to our one-stop Platform
        </h2>
        <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Corrupti sed placeat vero aut hic dolorem quibusdam quo, 
           id optio excepturi ipsam minima doloribus illo modi assumenda vel laudantium eum voluptatem! 
        </p>
       </div>
       
       </div>
      </div>

      {/* Content Section end */}
    </div>
   </>
 );
};

export default Addstart