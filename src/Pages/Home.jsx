import React from 'react'
import Navbar from '../Components/Navbar'
import VideoBG from '../Components/VideoBG'
import Infocard from '../Components/Infocard'
import Contactinfo from '../Components/Contactinfo'


const Home = () => {
  return (
    <div className="home-container">
        <Navbar />
        <VideoBG />
        <div className='center-container'>
            <div className="card-container-flex" >
                <Infocard title="Welcome to my page!" content="My name is Jiri. I'm a Junior software developer and I've been studying Information processing science at the University of Oulu for the past couple years
                and I’m about to finish my Bachelor’s soon. I'm interested in gaming, coding and health."/>
                <Infocard title="My ambitions" content="Right now I am pursuing a career in IT & programming and I am looking for an entry-level job where I could prove my skills and continue
                on the path of becoming a professional in the field. I am particularly interested in roles that allow me to contribute to meaningful projects,
                whether it's building websites, handling data or doing something embedded. I'm open to anything interesting." />
            </div> 
        </div>
        <Contactinfo title="Contact" email='Email: Jiri.ylimaki@hotmail.com' phone='Phone: +358 445000732' linkedin='https://www.linkedin.com/in/jiriylimaki' 
        github='https://github.com/JOverhill'/>
    </div>
  )
}

export default Home