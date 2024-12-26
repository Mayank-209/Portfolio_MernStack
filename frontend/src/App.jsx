import React,{ useState } from 'react'
import Layout from './components/layout/Layout'
import About from './pages/About/About'
import TechStack from './pages/TechStack/TechStack'
import Projects from './pages/Projects/Projects'
import Education from './pages/Education/Education'
import WorkExp from './pages/WorkExp/WorkExp'
import Contact from './pages/Contact/Contact'
import ScrollToTop from "react-scroll-to-top";


function App() {
  

  return (
    <>
      <Layout/>
      <div className="container">
      <About/>
      <Education/>
      <TechStack/>
      <Projects/>
      <WorkExp/>
      <Contact/>
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className='text-center'>
          Made by Mayank Srivastava &copy; 2024
        </h4>
      </div>
      <ScrollToTop style={{ backgroundColor:'#1e1e2c',borderRadius:"80px"}} smooth color='#138781'/>

    </>
  )
}

export default App
