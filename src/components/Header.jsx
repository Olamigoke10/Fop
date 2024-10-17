import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='flex w-full justify-between items-center px-4 py-4'>
        <div>
        <h1 className='font-bold'>FOP</h1>
        </div>

        <div className='flex gap-2 justify-center items-center'>
            <FaWhatsapp  size={30}/>
            <FaInstagram  size={30}/>
        </div>

    
    </div>
  )
}

export default Header
