import React,{ useState } from 'react'
import Layout from './components/layout/Layout'
import About from './pages/About/About'
import TechStack from './pages/TechStack/TechStack'


function App() {
  

  return (
    <>
      <Layout/>
      <div className="container">
      <About/>
      <TechStack/>
      </div>
      

    </>
  )
}

export default App
