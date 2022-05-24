import React from 'react'
import MdoalGridTable from './ModalGridTable'
// import AppGrid from '../../../Main-Dashboard/DashboardComponents/AppGrid/AppGrid';

const ModalGrid = (props) => {
    const Products = JSON.parse(localStorage.getItem('Products'));
    // const January = [];
    // alert(January.length)
    // January.push(Products)
    // const JanuaryProduct = localStorage.setItem("JanuaryProducts", JSON.stringify(January))
    return (
        <div>
            <div className="modal-header height-100pr">
                <table>
                   <thead className='App-Grid-Head'>
                        <tr className='App-Grid-Row'>
                            <th className='font-we-400 font-px-12 br-before'>{props.NameofFilter}</th>
                            <th className='font-we-400 font-px-12 br-before'>{props.Total_Record}</th>
                        </tr>
                        <tr className='App-Grid-Row' id='get'>
                            <th className='font-we-400 font-px-12 br-before'><input className='width-160' /></th>
                            <th className='font-we-400 font-px-12 br-before'><input className='width-90' /></th>
                        </tr>
                    </thead>
                    <tbody className='App-grid-Body'>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>January</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>February</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>March</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>April</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>May</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>June</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>July</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>August</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>September</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>October</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr>
                             <td className='font-we-400 font-px-12 br-modal-grid'>November</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                         <tr className='bb-none'>
                             <td className='font-we-400 font-px-12 br-modal-grid'>December</td>
                             <td className='font-we-400 font-px-12'>{Products.length}</td>
                         </tr>
                    </tbody>
                </table>
                <MdoalGridTable/>
            </div>
        </div>
    )
}

export default ModalGrid
