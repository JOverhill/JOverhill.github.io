import React from 'react'
import Navbar from '../Components/Navbar'
import VideoBG from '../Components/VideoBG'
import Infocard from '../Components/Infocard'
import miinantallaaja1 from '../assets/miinantallaaja.png'
import miinantallaaja2 from '../assets/miinantallaaja2.png'
import stigler1 from '../assets/Stigler1.png'
import stigler2 from '../assets/Stigler2.png'
import weatherapp from '../assets/weatherapp.png'


const Portfolio = () => {
  return (
    <div className="about-container">
        <Navbar />
        <VideoBG />
        <div className='center-container'>
        <div className="card-wrapper">
          <div className="card-container-grid">
              <Infocard image={stigler1} image2={stigler2} title="Diet optimizer" content="For a school project, we built a website application where the user could input food items, and his desired daily nutrients. 
              Then the app would calculate and show optimized diet for the user based on his daily needs and prices of the food items. On this project we used a SQL database to store information,
              C# on the backend and Svelte for frontend." />
              <Infocard image={miinantallaaja1} image2={miinantallaaja2} title="Minesweeper" content="For a school project, I made a minesweeper desktop application using Python. The application used Pyglet for UI and algorithms written by myself
              for the calculations of the game. I also made a statistic functionality that stores game data in a JSON file." />
              <Infocard image={weatherapp} title="Weather app" content="I made a weather forecasting website as a sideproject using React and various libraries. I learned a lot about using React, it's libraries
              and designing websites. For the weatherdata I fetched information from Openweathermap's API." />
              <Infocard title="This site" content="I got curious about using github sites and decided to use this opportunity to make myself
              a portfolio site to showcase my skills. This site is built with React, styled with plain old CSS. For routing I used React Router." />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Portfolio