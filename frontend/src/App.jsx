import React,{ useState } from 'react'
import Layout from './components/layout/Layout'
import About from './pages/About/About'
import TechStack from './pages/TechStack/TechStack'
import Projects from './pages/Projects/Projects'


function App() {
  

  return (
    <>
      <Layout/>
      <div className="container">
      <About/>
      <TechStack/>
      <Projects/>
      </div>
      

    </>
  )
}

export default App
