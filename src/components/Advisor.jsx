import React from 'react'
import { Link } from "react-router-dom"

export const Advisor = () => {
  return (
    <div className="Advisor">
      <div className="Avatar">
        <img src="https://randomuser.me/api/portraits/men/75.jpg" height="100px"/>
      </div>
      <div className="AdvisorInfo">
        <div className="Name">Nanda Wilson</div>
        <div className="Degrees">CFP, FIC</div>
        <div className="Location">Minneapolis, Minnesota</div>
      </div>
      <div className="AdvisorContact">
        <div>Phone</div>
        <div>(123 456-7896)</div>
      </div>
      <div className="AdvisorChat">
        <div className="Chat">
          <Link to="asdfa">Send a secure message</Link>
        </div>
      </div>
    </div>
  )
}
