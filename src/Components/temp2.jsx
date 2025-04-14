import React from 'react'
import './style.css'
const Page2 = () => {
  return (
    
        <section className="flex flex-col items-center px-8 py-16 bg-white" data-aos="zoom-in">
          <div className="w-full md:w-4/5">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-12 text-center">Core Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-xl shadow hover:shadow-xl transition bg-purple-50">
                <h4 className="text-2xl font-semibold">Steps Tracker</h4>
                <p className="text-lg text-gray-600 mt-2">Stay on your feet and hit your daily goals.</p>
              </div>
              <div className="p-6 border rounded-xl shadow hover:shadow-xl transition bg-purple-50">
                <h4 className="text-2xl font-semibold">Calorie Monitor</h4>
                <p className="text-lg text-gray-600 mt-2">Burn it right and track it live.</p>
              </div>
              <div className="p-6 border rounded-xl shadow hover:shadow-xl transition bg-purple-50">
                <h4 className="text-2xl font-semibold">Workout Library</h4>
                <p className="text-lg text-gray-600 mt-2">Get access to exclusive fitness routines.</p>
              </div>
              <div className="p-6 border rounded-xl shadow hover:shadow-xl transition bg-purple-50">
                <h4 className="text-2xl font-semibold">Sleep Analysis</h4>
                <p className="text-lg text-gray-600 mt-2">Track rest quality and improve recovery.</p>
              </div>
              <div className="p-6 border rounded-xl shadow hover:shadow-xl transition bg-purple-50">
                <h4 className="text-2xl font-semibold">Progress Graph</h4>
                <p className="text-lg text-gray-600 mt-2">Visualize your progress.</p>
              </div>
              <div className="p-6 border rounded-xl shadow hover:shadow-xl transition bg-purple-50">
                <h4 className="text-2xl font-semibold">Goal Tracking</h4>
                <p className="text-lg text-gray-600 mt-2">Track your daily, weekly, and monthly goals.</p>
              </div>
            </div>
          </div>
      
          {/* Why Choose Zym Section */}
          <div className="w-full md:w-3/5 mt-16 text-center">
            <h3 className="text-3xl md:text-4xl font-semibold text-purple-700 mb-4">Why Choose Healthify?</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Zym merges technology with wellness. Every feature is crafted for personalization, motivation, and measurable progress.
            </p>
          </div>
        </section>
      );
      
  
}

export default Page2