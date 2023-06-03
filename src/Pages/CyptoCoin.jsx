import React, { useEffect, useMemo, useState } from 'react'
import millify from 'millify'
import { useGetCryptosQuery } from "../Redux/CryptoApi"
const CyptoCoin = ({ simplified }) => {
    const [search, setsearch] = useState("")
    const [filter, setfilter] = useState([])

    // const count = simplified ? 10 : 100
    const { data, isfetching } = useGetCryptosQuery()//count
    if (isfetching) {
        return "Loading"
    }

    const [coin, setcoins] = useState([])
    const value = data
    useEffect(() => {
        setcoins(value?.data?.coins)
        // console.log(value)
        // console.log(coin)
    },)
    const HandleSearch = ((e) => {
        setsearch(e.target.value)
        console.log(search)
    })
    const filtereddata = value?.data?.coins.filter((ele) => ele.name.toLowerCase().includes(search.toLowerCase()))















    return (
        <>
            {!simplified && (<div className='  w-full mt-4 h-[4rem] flex justify-center items-center '>
                <input onChange={HandleSearch} placeholder='Search your coin here' className='w-[50%] h-[30px] border border-gray-100 outline-none py-6 px-4 rounded-md' type='text' />
            </div>
            )}
            <div className='grid grid-cols-5 '>
                {/* {filtereddata?.map((ele) => {
                    return <div key={ele.uuid}>
                        <div>{ele.name}</div>
                    </div>
                })} */}
                {simplified ? (filtereddata?.slice(0, 10)?.map((ele) => (
                    <div key={ele.uuid}>
                        <div className='hover:shadow-xl h-[15rem] w-[13rem] m-4 p-2 cursor-pointer border border-gray-100 bg-white'>
                            <div className='font-semibold text-md text-center'>{`${ele.rank}.${ele.name}`}</div>
                            <div className='flex justify-center items-center mt-4'>
                                <img height={50} width={50} src={ele.iconUrl} />
                            </div>
                            <div className='ml-4 mt-4 text-md'>{`Price: ${millify(ele.price)}`}</div>
                            <div className='ml-4 mt-2 text-md'>{`Market Cap: ${millify(ele.marketCap)}`}</div>
                            <div className='ml-4 mt-2 text-md'>{`Daily Change: ${millify(ele.change)}`}</div>
                        </div>
                    </div>
                ))) : (filtereddata?.map((ele) => {
                    return <div key={ele.uuid} >
                        <div className='hover:shadow-xl h-[15rem] w-[13rem] m-4 p-2 cursor-pointer border border-gray-100 bg-white'>
                            <div className='font-semibold text-md text-center'>{`${ele.rank}.${ele.name}`}</div>
                            <div className='flex justify-center items-center mt-4'>
                                <img height={50} width={50} src={ele.iconUrl} />
                            </div>
                            <div className='ml-4 mt-4 text-md'>{`Price: ${millify(ele.price)}`}</div>
                            <div className='ml-4 mt-2 text-md'>{`Market Cap: ${millify(ele.marketCap)}`}</div>
                            <div className='ml-4 mt-2 text-md'>{`Daily Change: ${millify(ele.change)}`}</div>
                        </div>

                    </div>
                }))}

                {/* {filtereddata?.map((ele) => {
                    return <div key={ele.uuid} >
                        <div className='hover:shadow-xl h-[15rem] w-[13rem] m-4 p-2 cursor-pointer border border-gray-100 bg-white'>
                            <div className='font-semibold text-md text-center'>{`${ele.rank}.${ele.name}`}</div>
                            <div className='flex justify-center items-center mt-4'>
                                <img height={70} width={70} src={ele.iconUrl} />
                            </div>
                            <div className='ml-4 mt-4 text-md'>{`Price: ${millify(ele.price)}`}</div>
                            <div className='ml-4 mt-2 text-md'>{`Market Cap: ${millify(ele.marketCap)}`}</div>
                            <div className='ml-4 mt-2 text-md'>{`Daily Change: ${millify(ele.change)}`}</div>
                        </div>

                    </div>
                })} */}
            </div>

        </>
    )
}

export default CyptoCoin