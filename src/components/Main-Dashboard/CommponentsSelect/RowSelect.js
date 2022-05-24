import React from 'react'

const RowSelect = () => {
    const SelectStyle =  {
        height: "29px",
        borderleft: "1px solid #2b92d5",
        paddinginlinestart: "10px",
        color: "#2b92d5",
        width: "55px"
    }
  return (
    <div>
       <select className='bg-none border-none font-px-12 outline-none Hover' style={SelectStyle}>
           <option>5</option>
           <option>10</option>
           <option>15</option>
           <option>20</option>
           <option>50</option>
           <option>100</option>
       </select>
    </div>
  )
}

export default RowSelect
