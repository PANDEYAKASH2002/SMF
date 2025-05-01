import React from 'react'
import "../App.css"

function Hero() {
  return ( 
   <div className="hero-section h-100vh absolute w-screen bg-[url('/security.jpg')] bg-cover" style={{backgroundColor:"#948979"}}>
       
          <div className='relative' style={{fontSize:"40px",color:"#222831",fontFamily:"cursive"}}  >
              <h1 className='flex justify-center items-center p-32  text-amber-950'>"Reliable Workforce Solutions for        Industries         and        Buildings"</h1>
              <p className='flex justify-center items-center p-12 text-2xl'>We connect businesses with skilled workers and professional watchmen to ensure smooth operations and secure environments. Trusted by manufacturing units and industrial complexes across the region.</p>

             <h4 className='flex justify-center items-center p-16 '>Smart. Secure. Scalable Workforce Management.</h4>
              <div className='flex justify-center items-center p-6'><button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn More</button>
              </div>
          </div>
    </div>
  )
}

export default Hero
