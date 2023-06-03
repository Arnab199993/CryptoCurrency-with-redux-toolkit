import React from 'react'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const Navigate = useNavigate()
    return (
        <div>
            <div className='bg-[#001540] py-4 mt-2'>
                <div className=' w-[14rem] mx-auto mt-3'>
                    <p className='text-center text-xs text-white'>CryptoVerse</p>
                    <p className='text-center text-sm text-white'>All right reserved</p>
                    <ul className='flex justify-center items-center text-xs mt-1 text-blue-500'>
                        <li onClick={() => Navigate("/")} className='cursor-pointer'>Home</li>
                        <li onClick={() => Navigate("/exchange")} className='ml-1 cursor-pointer'>Exchanges</li>
                        <li onClick={() => Navigate("/news")} className='ml-1 cursor-pointer'>News</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer