import React from 'react'
import { Link } from 'react-router-dom'
import "./startuphome.css"

const Startuphomepage = () => {
  return (
    <>
    <div className='mycontainer'>
    <div className='mycontainerfirst'>
    <h1>How to Register<br /> a Startup in India - Eligbility<br />and Procedure</h1>
    </div>
    <div style={{margin:"2rem"}} className="temp">
    <h1>The Startup Eligibility criteria</h1>
    <div className='mycontainersecond'>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
    </div>
    <ul>
    <li><i className='bx bxs-hand-right'></i>
    The firm has to be a private limited company or a limited liability partnership.
    </li>
    <li>
    <i className='bx bxs-hand-right'></i>
    The company remains a startup for the first ten years, post the date of registration. In the recent past, the Indian government changed that to 10 years from 7 years to give opportunities and tax exemptions for the companies for a longer run.
    </li>
    <li>
    <i className='bx bxs-hand-right'></i>
    The company remains a startup if the turnover per year does not cross the Rs 100 crore mark in any of the 10 years. Once the company crosses the mark, it no longer remains eligible to be called a startup. The mark of Rs 100 crore too has been improved by the Indian government in the recent past from Rs 25 crore 
    </li>
    <li>
    <i className='bx bxs-hand-right'></i>
    The firm should have approval from the Department of Industrial Policy and Promotion (DIPP). 
    </li>
    <li>
    <i className='bx bxs-hand-right'></i>
    The firm should be funded by an Incubation Fund, an Angel Fund or a Private Equity Fund
    </li>
    <li>
    <i className='bx bxs-hand-right'></i>
    A patron guarantee from the Indian Patent and Trademark office is necessary
    </li>
    <li>
    <i className='bx bxs-hand-right'></i>
    You must have a recommendation letter by an incubation
    </li>
    <li>
    <i className='bx bxs-hand-right'></i>
    The firm must come up with innovative ideas and schemes
    </li>
</ul>

    </div>
    <div style={{margin:"2rem"}} className="temp1">
    <h1>Procedure for registering a startup in India</h1>
    <div className='mycontainersecond'>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
    </div>
    <h3>Step 1: Incorporate your business</h3>
    <p>First things first, you need to incorporate your business as a Private Limited Company or a Limited Liability Partnership or a Partnership firm.<br /> You just need to follow the normal procedure that includes you filling up a form to get the registration. </p>
    <h3>Step 2: Register under Startup India</h3>
    <p>Now you need to register your firm or company as a startup in the Startup India scheme of the government. <br />You just need to fill the form available for you on the Startup India website. You have to fill in all the details and upload a certain number of documents as well. </p>
    <h3>Step 3: Documents you need to upload in a PDF format only</h3>
    <p>You need a letter of recommendation along with the registration form. You can get any one of the following recommendation letters. </p>
   <ul>
   <i className='bx bxs-hand-right'></i>
   <li>A recommendation letter from an Incubator known in a post-graduate college in India, in a format approved by the DIPP. This is regarding the innovative nature of the business; OR</li>
   <i className='bx bxs-hand-right'></i>
    <li>A recommendation letter from an incubator that the Government of India funds as part of any specified scheme to promote innovation; OR</li>
    <i className='bx bxs-hand-right'></i>
    <li>A letter from any of the Incubators, recognized by the Government of India, in DIPP format. </li>
    <i className='bx bxs-hand-right'></i>
    <li>A letter of funding not less than 20% in equity, by an Incubation Fund, Private Equity Fund, Angel Fund, Accelerator, Private Equity Fund, registered with SEBI that endorses the innovative nature of business; OR</li>
    <i className='bx bxs-hand-right'></i>
    <li>A recommendation later by the Central or any State Government of India; OR</li>
    <i className='bx bxs-hand-right'></i>
    <li>A patent filed and published in the Journal of Indian Patent office in areas affiliated with the nature of the business being promoted. </li>
   </ul>
   <h3>Step 4: You Need to mention if you need tax exemption</h3>
   <p>In India, startups do not have to pay income tax for the first three years but to avail such benefits, the company must be certified by the Inter-Ministerial Board (IMB). This is where companies registered with DIPP get relaxation as the registration is enough to get the benefits. </p>
   <h3>Step 5: Self-certification of the following conditions</h3>
<ul>
    <i className='bx bxs-hand-right '></i>
    <li>You are a Private limited company, an LLP or a partnership firm.</li>
    <i className='bx bxs-hand-right '></i>
    <li>Your business must be incorporated or registered in India, not before 5 years. </li>
    <i className='bx bxs-hand-right '></i>
    <li>Your company’s turnover must not be more than Rs 100 crore. </li>
    <i className='bx bxs-hand-right '></i>
    <li>The company has to keep innovating something new or making the existing system better in its own way.</li>
    <i className='bx bxs-hand-right '></i>
    <li>Your business must be a fresh idea and not a splitting up or reconstruction of an existing business. </li>
</ul>
<h3>Step 6: Get your recognition number</h3>
<p>On application of this registration, you will get a recognition number with immediate effect. You get the certificate of registration or incorporation only after the authority goes through all your uploaded documents.</p>
<p>You need to be careful while uploading the data, as any discrepancy in it can cause you a huge fine of up to 50% of your paid-up capital or Rs 25,000 at the very least. </p>
<p>Now that you know the eligibility and registration criteria for a startup, enrol your company as well into the Startup India scheme and reap all the benefits provided by the government.  </p>

    </div>
    </div>
    <div style={{display:"flex",marginLeft:"30%"}}>
    {/* <div className='startupRegister'> */}
        <button className='btn'>
        <Link to="http://localhost:5173/home2/startup/startupregister"><span style={{marginLeft:"20px",color:"white",textDecoration:"none"}}>Add Startup</span></Link>
        </button>
    {/* </div> */}
    {/* <div className='startupList'> */}
         <button className='btn'>
        <Link to="http://localhost:5173/home2/startup/startuplist"><span style={{marginLeft:"20px",color:"white",textDecoration:"none"}}>Startup list</span></Link>
        </button>
    {/* </div> */}
    </div>
    </>
  )
}

export default Startuphomepage