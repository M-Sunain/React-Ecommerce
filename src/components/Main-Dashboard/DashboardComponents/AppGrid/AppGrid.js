import React, { useEffect, useState } from 'react'
import './AppGrid.css'
import Reacord_Not_Found from './norecordfoundblue (1).png'
import AppGridBody from './AppGridBody'

const AppGrid = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const Products = JSON.parse(localStorage.getItem('Products'));
    if (Products) {
      setProducts(Products);
    }
    console.log(Products)
  }, [Products]);
  const deleteProduct = (id) => {
    alert("Hello" + id)
    localStorage.removeItem("Products", id)
  }
  const center = {
    textalign: "center"
  }
  return (
    <div className='App-Grid'>
      <table className='App-Grid-Table'>
        <thead className='App-Grid-Head'>
          <tr className='App-Grid-Row'>
            <th className='font-we-400 font-px-12 center br'> <p className='br-before2 m-0'></p> Actions</th>
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
            <th className='font-we-400 font-px-12 br' style={{ center }}><p className='m-0 width-90 br-before'></p></th>
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
          {Products.length > 0 &&
            <>
              <AppGridBody Products={Products} deleteProduct={deleteProduct} />
            </>
          }
          {Products.length < 1 && <div id='App-Record-Not-Found'> <img src={Reacord_Not_Found} alt='' /></div>}
        </tbody>
      </table>
    </div>
  )
}

export default AppGrid