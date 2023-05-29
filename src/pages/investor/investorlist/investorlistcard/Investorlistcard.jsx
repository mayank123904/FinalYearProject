import React from "react";
import "./investorlistcard.css";
const Investorslistcard = (props) => {
  // const categories = props.data;
  // const categoryKeys = Object.keys(categories);
  return (
    <>
      <div className="ilcontainer">
        <div className="ilfirstinnercontainer">
          <div className="ilinfirstinnercontainer">
            <div className="avatar">
              <img src={props.image} alt={props.name}></img>
            </div>
          </div>
          <div className="iname">
            <p>{props.name}</p>
          </div>
          <div className="ilfirstinnerbottom">
            <div className="ilfirstfirstinnerbottom">
              <div className="inameinner"></div>
              <div className="featurediv">
                <div className="ilselect">
                  <button>
                    <h1>+</h1>
                  </button>
                </div>
                <div className="ilselect">
                  <button onClick={props.onClick}>View Profile</button>
                </div>
                <div className="ilselect">
                  <button>
                    {/* Message */}
                    <i className="bx bx-message" />
                  </button>
                </div>
              </div>
              <div className="social">
                <div className="social-bg">
                  <i className="bx bxl-facebook mybx" />
                </div>
                <div className="social-bg">
                  <i className="bx bxl-google mybx" />
                </div>
                <div className="social-bg">
                  <i className="bx bxl-twitter mybx" />
                </div>
                <div className="social-bg">
                  <i className="bx bxl-instagram-alt mybx" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investorslistcard;
