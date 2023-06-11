import axios from 'axios'
import React, { useEffect, useState } from 'react'


const NewsList = ({ simplified }) => {
    const [crypto, setcrypto] = useState([])

    const options = {
        method: 'GET',
        url: 'https://crypto-news11.p.rapidapi.com/cryptonews/bitcoin',
        params: {
            max_articles: '10',
            last_n_hours: '48',
            top_n_keywords: '10'
        },
        headers: {
            'X-RapidAPI-Key': '99f8acde77msh1fcb54a73f20b95p1fc387jsn536bf9dab616',
            'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com'
        }
    };
    useEffect(() => {

        const newssearch = async () => {
            try {
                const response = await axios.request(options);
                // console.log(response.data.articles);
                setcrypto(response?.data?.articles)

                console.log(crypto)
            } catch (error) {
                console.log(error)
            }
        }
        newssearch()
    }, [])

    return (
        <div className=' p-4 h-full '>
            <div className='  grid grid-cols-3 '>
                {crypto?.map((ele, i) => (
                    <a target='blank' href={ele.url} className='p-4 shadow-md  hover:shadow-xl cursor-pointer h-[10rem] w-[20rem] m-4' key={i}><div className='font-semibold'>{ele.title}</div><div className='flex justify-end '>Updated: {ele.date}</div></a>
                    // <div className='border border-black h-[10rem] w-[20rem]  m-4' key={i}>Hi</div>
                ))}
            </div>

        </div>

    )
}

export default NewsList