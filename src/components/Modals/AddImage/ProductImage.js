import React from 'react'
import './Addimage.css'

const Add = () => {
  // let addpro = document.getElementById("addpro")
  // const HandleClose = () => {
  //   addpro.classList.remove("show")
  //   addpro.classList.add("hode")
  // }
  // onClick={HandleClose}
  return (
    <div>
      <div className="modal fade" id="addpro" tabindex="1" role="dialog" data-backdrop="" aria-labelledby="randomLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content ct modal-content-border-simple">
            <div className="modal-header">
              <h5 className='modal-title font-px-12 modal-title-simple' id="exampleModalToggleLabel"> <i class="fas fa-bars mr-5"></i> Upload Product Image</h5>
              <span className='closs-modal closs-modal-simple' data-bs-dismiss="modal" aria-label="Close">×</span>
            </div>
            <div className='modal-header-2 modal-header justify-content-inherit' style={{ justifycontent: "inherit !important" }}>
              <button className='bg-none border-none font-px-13 App-Hover-Btn' style={{ color: "#2b92d5" }} > <span className=' mr-5 font-family-sans font-we-600 font-px-18'>+</span> Save </button>
              <button className='bg-none border-none font-px-13 App-Hover-Btn' data-bs-dismiss="modal" aria-label="Close" style={{ color: "#2b92d5" }}> <i className='fa fa-remove mr-5'></i> Close </button>
            </div>
            <div className="modal-body padd-5">
              <div className='App-upload-Image' id='App-upload-Image'></div>
              <div className='App-clear'>
                <button className='bg-none border-none font-px-13 App-Hover-Btn font-we-600 width-65 padd-lr' data-bs-dismiss="modal" aria-label="Close" style={{ color: "#2b92d5" }}> <i className='fa fa-remove mr-5 m-t-1'></i> Clear </button>
              </div>
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add
