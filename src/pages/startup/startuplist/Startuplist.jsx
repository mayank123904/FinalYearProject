import React, { useState,useEffect} from "react";
import Startuplistcard from './startuplistcard/Startuplistcard'
import "./startuplist.css"
import { Pagination } from "react-bootstrap";
import data from '../mystartups.json';
import Startupprofilecard from "../startupprofile/startupprofilecard/Startupprofilecard";

function Startuplist2() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStartup, setSelectedStartup] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(null);
  const startupsPerPage = 9;
  const indexOfLastStartup = currentPage * startupsPerPage;
  const indexOfFirstStartup = indexOfLastStartup - startupsPerPage;
  const currentStartups = data.startups.slice(
    indexOfFirstStartup,
    indexOfLastStartup
  );

  const totalPages = Math.ceil(data.startups.length / startupsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleProfileClick = (startup) => {
    setSelectedStartup(startup);
  };

  const handleGoBackClick = () => {
    setSelectedStartup(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  if (selectedStartup) {
    return (
      <div>
        {/* <h1>{selectedStartup.StartupName}</h1>
        <img src={selectedStartup.Logo} alt={selectedStartup.StartupName} />
        <p>{selectedStartup.App}</p> */}
         <button onClick={handleGoBackClick}>Go Back</button>
        <Startupprofilecard Name={selectedStartup.StartupName} img={selectedStartup.Logo} overview="This is best app" ratings="4.5" location="Jaipur" helplineno="94839383232" mail="@gmail.com" websitelink=".com" applink={selectedStartup.App} Title={selectedStartup.Title} Category={selectedStartup.Category}/>
      </div>
    );
  }
  return (
    <div className="startup-list-container">
      <div className="row"> 
        {currentStartups.map((startup) => (
          <div className="col-md-4" key={startup.Id} style={{display:"flex"}}>
            <Startuplistcard
              title={startup.StartupName}
              img={startup.Logo}
              startuplink={startup.App}
              onClick={() => handleProfileClick(startup)}
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <div className="innerpagination">
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Pagination.Item>
            </div>
          ))}
        </Pagination>
      </div>
    </div>
  );
}

export default Startuplist2;