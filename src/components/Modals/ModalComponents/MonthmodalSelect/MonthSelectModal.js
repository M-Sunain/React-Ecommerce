import React from 'react'

const MonthSelectModal = () => {
    return (
        <div className='Prod-Input'>
            <label className='font-px-12 font-we-600'>Select Month :</label>
            <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
            <select className='font-px-13 select-focus'>
                <option>January</option>
                <option>January</option>
                <option>February </option>
                <option>March </option>
                <option>April </option>
                <option>May </option>
                <option>June </option>
                <option>July </option>
                <option>August </option>
                <option>September </option>
                <option>October </option>
                <option>November </option>
                <option>December</option>
            </select>
        </div>
    )
}

export default MonthSelectModal
