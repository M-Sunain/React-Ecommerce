import { Link } from 'react-router-dom'
import React from 'react'
import './SettingSideBarLinks.css'

const SettingSideBarLinks = () => {
    return (
        <div className='App-SettingSideBarLinks'>
            <ul className='p-0 m-0'>
                <Link to=''>
                    <li className='active'>
                        <i className='fa-solid fa-pencil'></i>
                        <span>Create Account</span>
                    </li>
                </Link>
                <Link to=''>
                    <li>
                        <i className='fa-solid fa-pencil'></i>
                        <span>Edit Account</span>
                    </li>
                </Link>
                <Link to=''>
                    <li>
                        <i className='fa-solid fa-pencil'></i>
                        <span>Change Password</span>
                    </li>
                </Link>
                <Link to=''>
                    <li>
                        <i className='fa-solid fa-pencil'></i>
                        <span>Forget Password</span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default SettingSideBarLinks
