import React from 'react'
import App_TopHeader from '../../ApptopHeader/App_TopHeader'
import SettingSideBar from '../SettingSideBar/SettingSideBar'
import { Routes, Route } from 'react-router-dom'
import './SettingPage.css'

const Setting = () => {
  return (
    <div id='App-Setting'>
      <App_TopHeader ScreenName='SETTING' />
     <div>
     <SettingSideBar />
      {/* <div className='padding-Screen'>
        <Routes>
            <Route path="/" element={<A />}></Route>
            <Route element={<B />}></Route>
        </Routes>
      </div> */}
     </div>
    </div>
  )
}

export default Setting
