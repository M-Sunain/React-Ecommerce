import React from 'react'
import './SettingSidebar.css'
import SettingAddProfileImage from '../SettingComponents/SettingAddPRofileImage/SettingAddProfileImage'
import SettingSideBarLinks from '../SettingComponents/SettingSideBarLinks/SettingSideBarLinks'

const SettingSideBar = () => {
  return (
    <div className='App-Setting-Side-Bar'>
        <SettingAddProfileImage/>
        <SettingSideBarLinks/>
    </div>
  )
}

export default SettingSideBar
