import React from 'react'
import CyptoCoin from "../Pages/CyptoCoin"
import CryptoNews from '../Pages/CryptoNews'
import { useNavigate } from 'react-router-dom'
const Body = () => {
    const Navigate = useNavigate()
    return (
        <div className=' w-full '>
            <div className='flex'>
                <div className='p-3 w-full'>
                    <h2 className='text-xl font-semibold'>Top 10 Crypto Currencies in the world</h2>
                </div>
                <div className='flex text-lg  w-full justify-end'>
                    <h2 onClick={() => Navigate("/crypto/:coinId")} className='flex justify-center items-center pr-2 cursor-pointer text-blue-500 font-semibold'>Show More</h2>
                </div>
            </div>
            <div className='ml-3 '>
                <div className='text-xs'>
                    <CyptoCoin simplified />
                </div>

            </div>

            <div className='flex justify-between p-2 w-full mt-4' >
                <div className='text-xl font-semibold pl-1'>
                    <h1>Latest Crypto News</h1>
                </div>
                <div className='flex text-lg  justify-end  text-blue-500 font-semibold'>
                    <h1>Show more</h1>
                </div>
            </div>
            <div className='ml-3'>
                <p className='text-xs'>
                    <CryptoNews simplified />
                </p>
            </div>
        </div>
    )
}

export default Body