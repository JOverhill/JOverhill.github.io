import React from 'react'
import Navbar from '../Components/Navbar'
import VideoBG from '../Components/VideoBG'
import Infocard from '../Components/Infocard'


const About = () => {
  return (
    <div className="about-container">
        <Navbar />
        <VideoBG />
        <div className='center-container'>
        
        <div className="card-container-about">
            <Infocard title="IT Experience" content="I have gained experience in software development with various programming languages through
            school and hobbies. I taught myself website building because I became interested in React. From school I have learned the basics of DevOps, testing,
            databases etc. I’ve also dabbled with APIs for a bit and understand the basics of REST APIs." />
            <Infocard title="Technologies I have used" content="HTML, CSS, Javascript, React, Java, Python, SQL, MongoDB." />
            <Infocard title="Additional experience" content="I also have a bachelor of business administration and nrealy 5 years of job experience from Payroll/HR field, working
            with various stakeholders, in teams and also independently." />
        </div>
        
        </div>
    </div>
  )
}

export default About