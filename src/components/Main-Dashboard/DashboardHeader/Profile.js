import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='App-Profile' id='App-Profile-Open'>
       <div className='App-Profile-Top'>
           <span>Profile</span>
       </div>
       <div className='App-Profile-Icon'>
       <i class="fa-solid fa-user"></i>
       </div>
       <div className='App-Profile-Forget-Pass'>
           <span> <i class="fa-solid fa-unlock"></i> Chnage Password </span>
       </div>
       <div className='App-Profile-Logout-Btn'>
           <Link to='/'> <button> <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout </button> </Link>
       </div>
    </div>
  )
}

export default Profile
