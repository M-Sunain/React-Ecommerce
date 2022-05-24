import React from 'react'
import MyLOGO from '../sidebar/edpedap2.png'

const SideHeaderLogo = () => {
  return (
    <div className='App-Side-Header-Logo'>
        <div className='App-Bar-Logo-Box'>
            <img src={MyLOGO} alt='' title='EDAP'/>
        </div>
        <div className='App-Bar-Search-Box'>
            <input placeholder='Search' id='tags'/>
            <i class="fa-solid fa-magnifying-glass" title='Serach'></i>
        </div>
    </div>
  )
}

export default SideHeaderLogo
