import React, { useState,useEffect} from "react";
import Investorslistcard from './investorlistcard/Investorlistcard'
import Investorprofilecard from '../investorprofile/investorprofilecard/Investorprofilecard';
import "./investorlist.css"
import { Pagination } from "react-bootstrap";
import data from '../myinvestors.json';
// import  InvestorChatbox from '../investorprofile/investorchatbox';

function Investorlist() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedInvestor, setSelectedInvestor] = useState(null);
//   const [selectedInvestors, setSelectedInvestors] = useState([]);
  const investorsPerPage = 6;
  const indexOfLastInvestor = currentPage * investorsPerPage;
  const indexOfFirstInvestor = indexOfLastInvestor - investorsPerPage;
  const currentInvestors = data.investors.slice(
    indexOfFirstInvestor,
    indexOfLastInvestor
  );

  const totalPages = Math.ceil(data.investors.length / investorsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleProfileClick = (investor) => {
    setSelectedInvestor(investor);
  };

  const handleGoBackClick = () => {
    setSelectedInvestor(null);
  };
//   const handleInvestorSelect = (investor) => {
//     if (selectedInvestors.includes(investor.ID)) {
//       setSelectedInvestors((prevSelected) =>
//         prevSelected.filter((id) => id !== investor.ID)
//       );
//     } else {
//       setSelectedInvestors((prevSelected) => [...prevSelected, investor.ID]);
//     }
//   };

//   const sendMessage = (investorName, message) => {
//     console.log(`Sending message to ${investorName}: ${message}`);
//   };
// const handleChatMessage = (investor, message) => {
//     console.log(`Sending message "${message}" to ${investor.InvestorName}`);
//     const updatedInvestors = selectedInvestors.map((inv) => {
//       if (inv.ID === investor.ID) {
//         return {
//           ...inv,
//           messages: [...inv.messages, message],
//         };
//       }
//       return inv;
//     });
//     setSelectedInvestors(updatedInvestors);
//   };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  if (selectedInvestor) {
    return (
      <div>
         <button onClick={handleGoBackClick}>Go Back</button>
        <Investorprofilecard name={selectedInvestor.InvestorName} image={selectedInvestor.Picklink} id={selectedInvestor.ID} data={selectedInvestor.Categories}/>
        {/* <InvestorChatbox 
              investor={selectedInvestor.InvestorName}
              onSendMessage={handleChatMessage}
            /> */}
      </div>
    );
  }
  return (
    <div className="ilcardcontainer">
      <div className="row"> 
        {currentInvestors.map((investor,index) => (
          <div className="col-md-4" key={index} style={{display:"flex"}}>
            <Investorslistcard
              name={investor.InvestorName}
              image={investor.Picklink}
              id={investor.ID}
              data={investor.Categories}
              onClick={() => handleProfileClick(investor)}
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
  <div className="innerpagination" key={page}>
    <Pagination.Item
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

export default Investorlist;