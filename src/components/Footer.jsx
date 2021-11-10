import React from 'react'
import { Link } from "react-router-dom"

const FooterInfo = () => {
  return <div className="FooterInfo">
    <p>Check the background of our professionals on FINRA's on BrokerCheck</p>
    
  </div>
}
const ContactInfo = () => {
  return <div className="ContactInfo">
    <div>Need Help?</div>
    <p>The Member Care Service Team is here always for whatever you need.</p>
    <p>Phone: (123) 456-7896</p>
    <p>Weekdays 8AM - 5 PM CST</p>
  </div>
}
const HelpLinks = () => {
  return <div className="HelpLinks">
    <ul>
      <li>
        Terms & Conditions
      </li>
      <li>
        Privacy Policy
      </li>
      <li>
        All Help & Support
      </li>
    </ul>
  </div>
}
export const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterContent">
        <Link exact to=""><img src="//logo.clearbit.com/spotify.com?size=30&greyscale=true" /></Link>
        <HelpLinks />
        <ContactInfo />
        <FooterInfo />
      </div>
    </div>
  )
}
