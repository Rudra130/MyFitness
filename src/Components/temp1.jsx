import React from 'react'
import './style.css'
import zym from '../assets/zym.jpg'

const Page1 = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-white">
     <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 flex justify-end">
  <img 
    src={zym} 
    alt="Zym Healthify App" 
    className="w-64 h-auto rounded-lg shadow-lg"
  />
</div>



      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-center md:text-right">
        <h3 className="text-4xl md:text-6xl font-semibold text-black-400 mb-4">
          About Healthify App
        </h3>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
          Zym is your all-in-one health companion. Track workouts, monitor calories, stay motivated—anytime, anywhere.
        </p>
      </div>
    </section>
  );
}

export default Page1;
