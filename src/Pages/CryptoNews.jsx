import React from 'react'
import { useGetCryptoNewsQuery } from '../Redux/CryptoNewsApi'

const NewsList = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: "Cryptocurrency" })
    // console.log(data)
    console.log(cryptoNews)
    return (
        <div>CryptoNews</div>
    )
}

export default NewsList