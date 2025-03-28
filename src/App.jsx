import React from 'react'
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import  About  from './Pages/about'
import  Portfolio  from './Pages/portfolio'
import  Home  from './Pages/Home'
import  Maplestory  from './Pages/Maplestory'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/maplestory-korean-helper" element={<Maplestory/>} />
      </Routes>
    </Router>
  )
}

export default App