import React from 'react'
import mobile from '../assets/download.png'
import { FaAndroid, FaApple, FaWindows, FaLaptop, FaClock } from "react-icons/fa";
const Page4 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 " data-aos="fade-up">
      
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <img
            src={mobile}
            alt="Zym App Mobile UI"
            className="w-80 md:w-[28rem] drop-shadow-2xl"
          />
      
        
          <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4 bg-white/70 px-4 py-1 rounded-xl">Available On</h2>
            <ul className="space-y-3 text-base md:text-lg text-gray-700 bg-white/70 px-6 py-4 rounded-2xl">
              <li className="flex items-center gap-2"><FaAndroid className="text-green-500 text-2xl" /> Android</li>
              <li className="flex items-center gap-2"><FaApple className="text-black text-2xl" /> iOS</li>
              <li className="flex items-center gap-2"><FaWindows className="text-blue-600 text-2xl" /> Windows</li>
              <li className="flex items-center gap-2"><FaLaptop className="text-gray-700 text-2xl" /> macOS</li>
              <li className="flex items-center gap-2"><FaClock className="text-purple-600 text-2xl" /> Smartwatches</li>
            </ul>
          </div>
        </div>
        </section>
      
  )
}

export default Page4