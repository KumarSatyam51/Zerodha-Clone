import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from 'axios'; // Import axios if you fetch real data

const Funds = () => {
  // 💡 State for dynamic data (replace hardcoded values)
  const [fundsData, setFundsData] = useState({
    availableMargin: '4,043.10',
    usedMargin: '3,757.30',
    availableCash: '4,043.10',
    openingBalance: '4,043.10',
    openingBalance2: '3,736.40',
    payin: '4,064.00',
    span: '0.00',
    deliveryMargin: '0.00',
    exposure: '0.00',
    optionsPremium: '0.00',
    collateralLiquid: '0.00',
    collateralEquity: '0.00',
    totalCollateral: '0.00',
  });

  /*
  useEffect(() => {
    // 💡 Add your API call here to fetch actual funds data
    // axios.get("http://localhost:3000/api/funds")
    //   .then(res => setFundsData(res.data))
    //   .catch(err => console.error("Error fetching funds:", err));
  }, []);
  */

  return (
    <>
      {/* 1. Top Section (Add/Withdraw Buttons) */}
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link to="/add-funds" className="btn btn-green">Add funds</Link>
        <Link to="/withdraw" className="btn btn-blue">Withdraw</Link>
      </div>
      
      {/* 2. Main Row (Equity and Commodity Columns) */}
      <div className="row">
        
        {/* Equity Column */}
        <div className="col">
          {/* ✅ FIX: Removed the redundant/invalid <span> wrapper around <p> */}
          <p className="title-section-equity">Equity</p>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{fundsData.availableMargin}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{fundsData.usedMargin}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{fundsData.availableCash}</p>
            </div>
            <hr />
            {/* The rest of the equity data is now pulled from state */}
            <div className="data">
              <p>Opening Balance</p>
              <p>{fundsData.openingBalance}</p>
            </div>
            <div className="data">
              <p>Opening Balance</p> {/* Note: This label appears twice in your original code */}
              <p>{fundsData.openingBalance2}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>{fundsData.payin}</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>{fundsData.span}</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>{fundsData.deliveryMargin}</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>{fundsData.exposure}</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>{fundsData.optionsPremium}</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>{fundsData.collateralLiquid}</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>{fundsData.collateralEquity}</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>{fundsData.totalCollateral}</p>
            </div>
          </div>
        </div>

        {/* Commodity Column */}
        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link to="/open-commodity-account" className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;