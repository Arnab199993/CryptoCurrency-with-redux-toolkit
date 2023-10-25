import React, { useEffect, useState } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../Redux/CryptoApi";
import Footer from "./Footer";
import Body from "./Body";
import cryptocurrency from "../Images/cryptocurrency.png";
import { AiOutlineHome } from "react-icons/ai";
import { GiChart, GiCardExchange } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const Navigate = useNavigate();
  const { data } = useGetCryptosQuery();
  const globalStat = data?.data?.stats;
  // console.log(globalStat)
  // alert(useGetCryptosQuery()?.error?.data?.message)

  return (
    <>
      <div className="flex max-w-full ">
        <div className=" w-[20rem] h-[100vh]">
          <div className="h-[100vh] w-[16rem] bg-[#001540] fixed">
            <div className="flex   mt-1 p-2">
              <div className="  mt-2">
                <img src={cryptocurrency} height={30} width={30} />
              </div>
              <div onClick={() => Navigate("/")}>
                <h1 className="font-medium text-2xl ml-3 mb-2 text-blue-500 cursor-pointer">
                  Cryptoverse
                </h1>
              </div>
            </div>
            <div className="text-white  mt-4 text-md">
              <ul>
                <li
                  onClick={() => Navigate("/")}
                  className=" flex px-5 py-2  hover:bg-blue-400 cursor-pointer"
                >
                  <AiOutlineHome className="mt-1" />
                  <span className="ml-1">Home</span>
                </li>
                <li
                  onClick={() => Navigate("/cryptoccurrencies")}
                  className=" flex px-5 py-2  hover:bg-blue-400 cursor-pointer"
                >
                  <GiChart className="mt-1" />
                  <span className="ml-1">Cryptocurrencies</span>
                </li>
                {/* <li onClick={() => Navigate("/exchange")} className=' flex px-5 py-2  hover:bg-blue-400 cursor-pointer'><GiCardExchange className='mt-1' /><span className='ml-1'>Exchange</span></li> */}
                <li
                  onClick={() => Navigate("/news")}
                  className=" flex px-5 py-2  hover:bg-blue-400 cursor-pointer"
                >
                  <CiLocationOn className="mt-1" />
                  <span className="ml-1">News</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#001540] w-full h-[10rem]">
          <div className=" w-[100%]  bg-white flex flex-col justify-center px-4 mx-auto">
            <div className="  mt-6 bg-hite px-2 ml-4">
              <h2 className="text-xl font-medium">Global Crypto Stats</h2>
              <div className="grid grid-cols-2 mt-2 py-2 ">
                <div>
                  <p className="text-xs text-gray-500">
                    Total CryptoCurrencies
                  </p>
                  <p className="font-medium text-xl">
                    {millify(globalStat?.total)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Exchanges</p>

                  <p className="font-medium text-xl">
                    {millify(globalStat?.totalExchanges)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total Market Cap</p>

                  <p className="font-medium text-xl">
                    {millify(globalStat?.totalMarketCap)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total 24h volume</p>

                  <p className="font-medium text-xl">
                    {millify(globalStat?.total24hVolume)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Total MArkets</p>

                  <p className="font-medium text-xl">
                    {millify(globalStat?.totalMarkets)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Body />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Navbar;
