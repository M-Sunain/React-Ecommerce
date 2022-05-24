import React from 'react'

const AppGridBody = ({Products,deleteProduct}) => {
  return Products.map(Product => (
    <tr key={Product.id} id='open'>
    <td className='font-we-400 font-px-12 br right'> <i className='fa fa-bars mr-13 font-px-11'></i> <i className='fa-regular fa-credit-card flat-icon-grid m-lr-6 font-px-11' title='View'></i><i className='fa fa-edit flat-icon-grid font-px-11' title='Edit'></i><i className='fa-solid fa-trash-can m-lr-6 font-px-11' title='Delete' onClick={() => deleteProduct(Product.id)}></i></td>
    <td className='font-we-400 font-px-12'>{Product.id}</td>
    <td className='font-we-400 font-px-12'>{Product.Code}</td>
    <td className='font-we-400 font-px-12'>{Product.Type}</td>
    <td className='font-we-400 font-px-12'>{Product.Category}</td>
    <td className='font-we-400 font-px-12'>{Product.Currency}</td>
    <td className='font-we-400 font-px-12'>{Product.Name}</td>
    <td className='font-we-400 font-px-12'>{Product.Stock}</td>
    <td className='font-we-400 font-px-12'>{Product.Price}</td>
    <td className='font-we-400 font-px-12'>{Product.Discount}</td>
  </tr>
  ))
}

export default AppGridBody
