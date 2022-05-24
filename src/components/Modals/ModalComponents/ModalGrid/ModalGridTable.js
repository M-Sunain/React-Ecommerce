import React from 'react'
import './ModalGrid.css'
import ModalGridBodt from './ModalGridBodt'
import Reacord_Not_Found from './norecordfoundblue (2).png'

const ModalGridTable = () => {
  const pro = JSON.parse(localStorage.getItem("Products"))
  // const Januarylen = localStorage.getItem("January")
  return (
    <div className='App-modal-grid'>
         <table>
         <thead className='App-Grid-Head'>
          <tr className='App-Grid-Row'>
            <th className='font-we-400 font-px-12'>Product Id</th>
            <th className='font-we-400 font-px-12 br-before'>Product Code</th>
            <th className='font-we-400 font-px-12 br-before'>Product Type</th>
            <th className='font-we-400 font-px-12 br-before'>Product Category</th>
            <th className='font-we-400 font-px-12 br-before'>Currency</th>
            <th className='font-we-400 font-px-12 br-before'>Product Name</th>
            <th className='font-we-400 font-px-12 br-before'>Stock</th>
            <th className='font-we-400 font-px-12 br-before'>Price</th>
            <th className='font-we-400 font-px-12 br-before'>Discount</th>
          </tr>
          <tr className='App-Grid-Row' id='get'>
            <th className='font-we-400 font-px-12'><input /></th>
            <th className='font-we-400 font-px-12 br-before'><input /></th>
            <th className='font-we-400 font-px-12 br-before'><input /></th>
            <th className='font-we-400 font-px-12 br-before'><input /></th>
            <th className='font-we-400 font-px-12 br-before'><input /></th>
            <th className='font-we-400 font-px-12 br-before'><input className='width-200' /></th>
            <th className='font-we-400 font-px-12 br-before'><input /></th>
            <th className='font-we-400 font-px-12 br-before'><input /></th>
            <th className='font-we-400 font-px-12 br-before'><input /></th>
          </tr>
        </thead>
        <tbody className='App-grid-Body'>
           {pro.length > 0 &&
              <>
                <ModalGridBodt Products={pro}/>
              </>
           }
           {pro.length < 1 && <div id='App-Modal-Record-Not-Found'> <img src={Reacord_Not_Found} alt='' /> </div>}
        </tbody>
         </table>
    </div>
  )
}

export default ModalGridTable
