import React from 'react'
import MonthFilterProductModal from '../../Modals/MonthFilterProductModal/MonthFilterProductModal'

const MonthSelect = () => {
    const myStyle = {
        position: "absolute",
        right: "9px",
        top: "6px",
        background: "#f3faff",
        color: "#2b92d5",
        fontsize: " 12px !important"
      };
  return (
    <div className='App-Select-Month'>
            <label>Select Month :</label>
            <i className="fa-solid fa-magnifying-glass cursor-pointer" data-bs-toggle="modal" data-bs-target="#MonthFilterProductModal" style={myStyle}></i>
            <select className='font-px-13 select-focus'>
              <option>January Products</option>
              <option>February Products</option>
              <option>March Products</option>
              <option>April Products</option>
              <option>May Products</option>
              <option>June Products</option>
              <option>July Products</option>
              <option>August Products</option>
              <option>September Products</option>
              <option>October Products</option>
              <option>November Products</option>
              <option>December Products</option>
            </select>
           <MonthFilterProductModal/> 
    </div>
  )
}

export default MonthSelect
