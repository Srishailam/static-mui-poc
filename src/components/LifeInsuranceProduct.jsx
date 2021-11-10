import React from 'react'
import { FcAlarmClock } from 'react-icons/fc';
import { Link } from "react-router-dom";
export const LifeInsuranceProduct = () => {
  return (
    <div className="Product">
      <div className="Product_Header">
        <div className="Title">Life Insurance</div>
        <div className="DateTime">Total Benefit as of Aug 18, 2021</div>
        <div className="Amount">$24,629.54</div>
        <div className="ClockIcon"><FcAlarmClock /></div>
      </div>
      <div className="Product_Main">
        <div className="Product_Main-Thrivent-Funds">
          <div className="">Term Life Insurance</div>
          <div className="">Life Insurance Product</div>
        </div>
        <div className="Product_Main-ROR">
          <div className="">Insured</div>
          <div className="">Jane Doe</div>
        </div>
        <div className="Product_Main-ETY">
          <div className="">Net Death Benefit</div>
          <div className="">$24,629.54</div>
        </div>
      </div>
      <div className="Product_Footer">
        Ready to take your investing to the next level? <div>&nbsp;</div><Link to=""> Contact your financial advisor</Link>
      </div>
    </div>
  )
}
