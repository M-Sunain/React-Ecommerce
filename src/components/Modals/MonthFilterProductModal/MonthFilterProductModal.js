import React from 'react'
import ModalGrid from '../ModalComponents/ModalGrid/ModalGrid'

const MonthFilterProductModal = () => {
    const Products = JSON.parse(localStorage.getItem('Products'));
    return (
        <div className="modal modalBg fade promodal" id="MonthFilterProductModal" tabindex="1" role="dialog" data-backdrop="" aria-labelledby="randomLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content ct modal-content-border-simple">
                    <div className="modal-header">
                        <h5 className="modal-title font-px-12 modal-title-simple" id="staticBackdropLabel">Month Product</h5>
                        <span className='closs-modal closs-modal-simple' data-bs-dismiss="modal" aria-label="Close">×</span>
                    </div>
                    <div className="modal-header modal-header-2 justify-content-end p-r-0">
                        <div className='App-Action-Table border-none br-none  width-65'>
                            <button className='first bg-none border-none font-px-12 m-l-10 height-26' style={{ color: "#2b92d5"}}><i className='fa fa-filter'></i></button>
                            <button className='first bg-none border-none font-px-12 m-l-10 height-26' style={{ color: "#2b92d5" }}><i className='fa fa-refresh'></i></button>
                        </div>
                    </div>
                    <div className="modal-body modal-body-2">
                        <ModalGrid NameofFilter='Month' Total_Record='Total Record'/>
                    </div>
                    <div className='modal-footer p-0 padd-5'>
                        <p className='m-0 font-px-12 font-we-600 main-color'>TOTAL RECORD: {Products.length} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonthFilterProductModal;