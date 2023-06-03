import React, { useEffect, useState, } from 'react'
import CryptoCoin from "../Pages/CyptoCoin"
const CryptoDetails = () => {
    // const [searchterm, setsearchterm] = useState()
    // const Chnage = (event) => {
    //     setsearchterm(event.target.value)
    //     console.log(searchterm)
    // }

    return (
        <div className='m-8 '>

            <div className='mt-4'>
                <CryptoCoin />
            </div>
        </div>
    )
}

export default CryptoDetails