import React,{ useState } from 'react'
import Layout from './components/layout/Layout'
import About from './pages/About/About'
import TechStack from './pages/TechStack/TechStack'
import Projects from './pages/Projects/Projects'
import Education from './pages/Education/Education'
import WorkExp from './pages/WorkExp/WorkExp'


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
      </div>
      

    </>
  )
}

export default App
