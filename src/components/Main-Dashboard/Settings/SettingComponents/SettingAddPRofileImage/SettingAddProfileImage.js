import React from 'react'
import './SettingAddProfileImage.css'
import uploadProfileImage from '../../SettingImages/upload_image.png'

const SettingAddProfileImage = () => {
  return (
    <div className='App-Setting-Image'>
        <div className='App-Setting-Add-Image'>
            <img src={uploadProfileImage} alt=''/>
            <i class="fa-solid fa-pencil"></i>
        </div>
    </div>
  )
}

export default SettingAddProfileImage
