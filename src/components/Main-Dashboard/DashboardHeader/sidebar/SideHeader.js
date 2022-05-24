import React from 'react'
import SideHeaderLogo from './SideHeaderLogo'
import SidebarLinks from './SidebarLinks'

const SideHeader = () => {
  return (
    <div className='App-Side-Bar' id='Sidebar'>
       <SideHeaderLogo/>
       <SidebarLinks/>
    </div>
  )
}

export default SideHeader
