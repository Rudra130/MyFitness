
import Page1 from './Components/page1'
import Page2 from './Components/page2'
import Page3 from './Components/page3'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Page4 from './Components/page4';
import Page5 from './Components/Page5';

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-indigo-600 text-white shadow sticky top-0 z-50">
      <h1 className="text-3xl font-bold">Healthify</h1>
      <div className="space-x-6 text-xl">
        <a href="#login" className="hover:underline">Login</a>
        <a href="#signup" className="hover:underline">Sign Up</a>
      </div>
    </nav>
  );
}


function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const progressData = {
    steps: 4500,
    calories: 1200,
    sportExercise: 45,
    weeklySteps: 30000,
    weeklyCalories: 9000,
    weeklySportExercise: 180
  };
    

  return (
    <div className="App font-sans">
    <header className="text-center py-3 bg-gradient-to-r from-lime-500 to-green-300  text-white shadow-lg sticky top-0 z-50">
      <div className="flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left section (heading and tagline) */}
        <div className="text-center ">
          <h1 className="text-4xl md:text-5xl font-extrabold animate-pulse">Healthify</h1>
          <p className="mt-2 text-lg animate-fade-in">Track. Transform. Triumph.</p>
        </div>
        {/* Right section (Login and Signup links) */}
        <div className="mt-4 md:mt-0 space-x-6 text-lg text-center md:text-right">
          <a href="#login" className=" text-black hover:underline">Login</a>
          <a href="#signup" className=" text-black hover:underline">Sign Up</a>
        </div>
      </div>
    </header>
    <main className="space-y-20">
      <Page1 />
      <Page2 />
      <Page4/>
      <Page5 progressData={progressData}/>
      <Page3 />
      
    </main>
    <footer className="text-center p-6 bg-gray-800 text-white text-lg">
      <p>&copy; {new Date().getFullYear()} Healthify App. All rights reserved.</p>
    </footer>
  </div>
  
  );
}

export default App
