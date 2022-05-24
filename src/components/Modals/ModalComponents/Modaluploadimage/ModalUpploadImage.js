import React from 'react'
import AddProduct_Image from '../../ModalImages/upload_image.png'
// import '../Modalcomponents.css'

const ModalUpploadImage = () => {
    return (
        <div className='App-Product-Image' title='Basic information'>
            <div className='App-Image-Box'>
                <img src={AddProduct_Image} alt='' />
                <div className='image-hover-eff-add'>
                    <i className='fa fa-plus addbtn' data-bs-toggle="modal" data-bs-target="#addpro"></i>
                </div>
            <i class="fa-solid fa-pen-to-square"></i>
            </div>
        </div>
    )
}

export default ModalUpploadImage
