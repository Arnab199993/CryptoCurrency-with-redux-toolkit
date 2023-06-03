import React from 'react'
import cryptocurrency from "../Images/cryptocurrency.png"
import { AiOutlineHome } from "react-icons/ai"
import { GiChart, GiCardExchange } from "react-icons/gi"
import { CiLocationOn } from "react-icons/ci"
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const Navigate = useNavigate()
    return (
        <div >
            <div className='h-[100vh] w-[20rem] bg-[#001540] '>
                <div className='flex   mt-1 p-2 '>
                    <div className='  mt-2'>
                        <img src={cryptocurrency} height={30} width={30} />
                    </div>
                    <div onClick={() => Navigate("/")}>
                        <h1 className='font-medium text-2xl ml-3 mb-2 text-blue-500 cursor-pointer'>Cryptoverse</h1>
                    </div>
                </div>
                <div className='text-white  mt-4 text-md'>
                    <ul>
                        <li onClick={() => Navigate("/")} className=' flex px-5 py-2  hover:bg-blue-400 cursor-pointer'><AiOutlineHome className='mt-1' /><span className='ml-1'>Home</span></li>
                        <li onClick={() => Navigate("/cryptoccurrencies")} className=' flex px-5 py-2  hover:bg-blue-400 cursor-pointer'>< GiChart className='mt-1' /><span className='ml-1'>Cryptocurrencies</span></li>
                        <li onClick={() => Navigate("/exchange")} className=' flex px-5 py-2  hover:bg-blue-400 cursor-pointer'><GiCardExchange className='mt-1' /><span className='ml-1'>Exchange</span></li>
                        <li onClick={() => Navigate("/news")} className=' flex px-5 py-2  hover:bg-blue-400 cursor-pointer'><CiLocationOn className='mt-1' /><span className='ml-1'>News</span></li>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Sidebar