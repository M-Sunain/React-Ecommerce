import React from 'react'
// import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap'
import SideHeader from './sidebar/SideHeader';
import User from './user.png'
import DashboardHeader2 from './DashboardHeader2';
import Profile from './Profile';
import Notification from './Notification';

const DashboardHeader = () => {
  return (
    <div className='App-Navigation'>
      <SideHeader/>
      <div className='App-Header' id='App-HEader'>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className='d-f'> <ion-icon name="apps-outline" id='Close-Dashboard' className='App-Bars' style={{fontSize: "25px"}}></ion-icon> <span style={{paddingLeft: "7px"}} className='font-we-500'>Edap E-Commerce</span> </Navbar.Brand><Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav><ion-icon name="notifications" id='icon-ion'></ion-icon></Nav>
            <div className='Date'>
               <div id = "clock" onload="currentTime()"></div>
            </div>
           <div className='User-Profile' title='Profile'>
               <img src={User} id='App-Profile' alt=''/>
           </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
      <Notification/>
      <Profile/>
      <DashboardHeader2/>
      </div>
    </div>
  )
}

export default DashboardHeader;

