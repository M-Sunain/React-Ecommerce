import React from 'react'
import './Home.css'
import { Routes, Route } from 'react-router-dom'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import Home2 from '../Home/Home2'
import About from '../Product/Product'
import '../DashboardHeader/DashboardHeader.css'
import Setting from '../Settings/SettingPage/Setting'

function dashboard() {
  return (
    <div className='Main-App'>
      <DashboardHeader/>
     <div className='App-Main-Dashboard' id='App-Main-Dashboard'>
        {/* <Home2/> */}
      <About/>
      {/* <Setting/> */}
     </div>
       <Routes>
          <Route path='/Home2' element={<Home2/>}/>
          <Route path='/About' element={<About/>}/>
       </Routes>
    </div>
  )
}

export default dashboard
