import React from 'react'

const ModalGridBodt = ({Products}) => {
    return Products.map(Product => (
        <tr key={Product.id} id='open'>
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

export default ModalGridBodt
