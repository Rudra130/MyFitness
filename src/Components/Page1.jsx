import React from 'react'
import './style.css'


const Page1 = () => {
  
    return (
        <section className="flex justify-end px-8 py-16 bg-white">
         
          <div className="w-full md:w-1/2 text-center md:text-right">
            <h3 className="text-4xl md:text-6xl font-semibold text-purple-700 mb-4">About Zym App</h3>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-6">
              Zym is your all-in-one health companion. Track workouts, monitor calories, stay motivated—anytime, anywhere.
            </p>
          </div>
        </section>
      );
      
}

export default Page1