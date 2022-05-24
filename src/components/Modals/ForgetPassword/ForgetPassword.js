import React from 'react'

const ForgetPassword = () => {

  return (
 <div className="modal fade modalBg" id="forgetPass" tabindex="1" role="dialog" data-backdrop="" aria-labelledby="randomLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content ct modal-content-border-simple">
        <div className="modal-header">
            <h5 className='modal-title font-px-12 modal-title-simple' id="exampleModalToggleLabel"> <i class="fas fa-bars mr-5"></i> Forget Password</h5>
            <span className='closs-modal closs-modal-simple' data-bs-dismiss="modal" aria-label="Close">×</span>
        </div>
        <div className="modal-body">
           <form>
           <div className='d-f a-l-e'>
            <div className='App-Forget-Password'>
                <label className='font-px-13'>Email</label>
                <input
                    type="text"
                    placeholder='Enter Email'
                />
            </div>
            <div className='App-con-Pass'>
                <button data-bs-toggle="modal" data-bs-target="#Mdoal">Confirm</button>
            </div>
            </div>
           </form>
        </div>
        <div className="modal-footer">
        </div>
        </div>
    </div>
</div>
  )
}

export default ForgetPassword
