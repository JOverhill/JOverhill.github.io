import React from 'react'
import bgVideo from '../assets/bg.mp4'

const VideoBG = () => {
  return (
    <video className="background-video" autoPlay loop muted src={bgVideo} type='video/mp4'> </video>
  )
}

export default VideoBG