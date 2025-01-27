import React from 'react'
import './Infocard.css';
import './Contactinfo.css'
const Contactinfo = ({ title, email, phone, linkedin, github }) => {
  return (
    <div className="contactcard">
      <h2 className="infocard-title">{title}</h2>
      <div className="contact-details">
        <p className='infocard-content'>
            {email}
        </p>
        <p className='infocard-content'>{phone}

        </p>
        <p className='infocard-content'>
            <a href={linkedin}>{linkedin}</a>
        </p>
        <p className='infocard-content'>
            <a href={github}>{github}</a>
        </p>
      </div>
    </div>
  )
}

export default Contactinfo