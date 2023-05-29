import React from "react";
import "./investorprofilecard.css";
import { BiMessageAlt } from "react-icons/bi";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";
// import Investorpiechart from "./investorportfoliochart"
const Investorprofilecard = (props) => {
  const categories = props.data;
  const categoryKeys = Object.keys(categories);
  return (
    <>
      <div className="iprofilecontainer">
        <div className="inneriprofilecontainer">
          <div className="innerprofileheader">
            {/* <h1>{props.id}</h1> */}
            <h1>{props.name}</h1>
          </div>
          <div className="innerprofilebody">
            <div className="firstinnerprofilebody">
              <div className="leftfirstinnerprofilebody">
                <div className="profilepic">
                  <img src={props.image} alt={props.name} />
                </div>
              </div>
              <div className="rightfirstinnerprofilebody">
                <div className="rightfirstinnerprofilebodyhead">
                  <h2>{props.name}</h2>
                  <div className="headbottom">
                    <p>Investor</p>
                    <div className="headbottmratings">
                      <h4>Ratings</h4>
                      <p>4.4</p>
                    </div>
                  </div>
                </div>
                <div className="rightfirstinnerprofilebodybody">
                  <div
                    style={{
                      marginTop: "3rem",
                      display: "flex",
                      height: "fit-content",
                    }}
                  >
                    <button>
                      <div
                        style={{
                          width: "fit-content",
                          height: "fit-content",
                          backgroundColor: "white",
                          margin: ".5rem",
                        }}
                      >
                        <BiMessageAlt
                          style={{ fontSize: "1.3rem", marginRight: ".3rem" }}
                        />
                      </div>
                      <h4 style={{ fontSize: ".9rem", marginTop: ".4rem" }}>
                        {" "}
                        Send message{" "}
                      </h4>
                    </button>
                    <div className="investorrating">
                      <h3 style={{ marginTop: ".5rem" }}>Rate investor</h3>
                      <h4>*****</h4>
                    </div>
                  </div>
                  <div className="firstrightfirstinnerprofilebodybody">
                    <h2>Portfolio</h2>
                    <div>
                      {categoryKeys.map((categoryKey) => (
                        <div style={{display:"flex"}}>
                        <li></li>
                        <div key={categoryKey}>{categoryKey}:{categories[categoryKey]}%</div></div>
                      ))}
                    </div>
                    <div>
                      {/* <Investorpiechart categories={props.data} /> */}
                    </div>

                    {/* <Piechart data={props.data}/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investorprofilecard;
