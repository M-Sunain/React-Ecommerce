import React from 'react'
import App_TopHeader from '../ApptopHeader/App_TopHeader';
// import Pagination from 'react-bootstrap-4-pagination';
import RowSelect from '../CommponentsSelect/RowSelect';
import MonthSelect from '../CommponentsSelect/MonthSelect';
import AddProduct from '../../Modals/ProductModal/AddProduct';
import AppGrid from '../DashboardComponents/AppGrid/AppGrid';

const About = () => {
  var get = document.getElementById("get")
  const hideSearch = () => {
    get.classList.toggle("active")
  }
  return (
    <div id='App-Product' >
      <AddProduct/>
      <App_TopHeader ScreenName='PRODUCT' />
      <div className='padding-Screen'>
      <div className='App-Product-Top'>
        <div className='App-Product-Top-left' style={{ display: 'flex', alignItems: 'center', borderRight: "1px solid #fff" }}>
          <button className='bg-none border-none mr-5 first'><i className='fas fa-bars font-px-13'></i></button>
          <button className='App-Hover-Btn'><span className='dff' title='Add Product' data-bs-toggle="modal" data-bs-target="#AddProduct"> <span style={{ alignitems: "center" }} className='App-Icon mr-5'>+</span> Add Product </span></button>
          <MonthSelect/>
        </div>
        <div className='App-Product-Top-Right d-flex'>
         <div className='App-Action-Table'>
          <button className='first bg-none border-none font-px-12 m-l-10 bl-white' onClick={hideSearch} style={{color: "#2b92d5",borderleft: "1px solid #fff"}}><i className='fa fa-filter'></i></button>
          <button className='first bg-none border-none font-px-12 m-l-10' style={{color: "#2b92d5"}}><i className='fas fa-download'></i></button>
          <button className='first bg-none border-none font-px-12 m-l-10 br-white' style={{color: "#2b92d5"}}><i className='fa fa-refresh'></i></button>
         </div>
          <RowSelect/>
        </div>
      </div>
      <AppGrid/>
      </div>
    </div>
  )
}

export default About
