import React from 'react'
import { FcAlarmClock } from 'react-icons/fc';
import { Link } from "react-router-dom";
export const Product = () => {
  return (
    <div className="Product">
      <div className="Product_Header">
        <div className="Title">Mutual Funds</div>
        <div className="DateTime">Total value as of Aug 18, 2021</div>
        <div className="Amount">$24,629.54</div>
        <div className="ClockIcon"><FcAlarmClock /></div>
      </div>
      <div className="Product_Main">
        <div className="Product_Main-Thrivent-Funds">
          <div className="">Thrivent Funds</div>
          <div className="">Roth IRA</div>
        </div>
        <div className="Product_Main-ROR">
          <div className="">Rate of Return</div>
          <div className="">+1.2%YTD</div>
        </div>
        <div className="Product_Main-ETY">
          <div className="">Earnings This Year</div>
          <div className="">+$10,000.00</div>
        </div>
        <div className="Product_Main-TV">
          <div className="">Total Value</div>
          <div className="">+$24,629.54</div>
        </div>
      </div>
      <div className="Product_Footer">
        Ready to take your investing to the next level? <div>&nbsp;</div><Link to=""> Contact your financial advisor</Link>
      </div>
    </div>
  )
}
