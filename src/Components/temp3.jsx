import React from 'react'
import './style.css'
const Page3 = () => {
  return (
    <section className="px-8 py-16 bg-gradient-to-bl from-green-100 to-blue-100" data-aos="fade-up">
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-green-700">Our Vision</h2>
      <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
        Empowering every individual to take charge of their health journey—one step, one workout, one goal at a time.
      </p>
    </div>

    <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-10">
      <a
        href="#"
        className="px-6 py-3 text-xl bg-black text-white rounded-full shadow hover:bg-gray-800 transition"
      >
        Get on Play Store
      </a>
      <a
        href="#"
        className="px-6 py-3 text-xl bg-black text-white rounded-full shadow hover:bg-gray-800 transition"
      >
        Get on App Store
      </a>
      <div className="flex gap-4 mt-6 md:mt-0">
        <a href="#" className="text-3xl text-blue-600 hover:text-blue-800">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#" className="text-3xl text-pink-600 hover:text-pink-800">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="text-3xl text-blue-400 hover:text-blue-600">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
    </div>
  </section>
  )
}

export default Page3