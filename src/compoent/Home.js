// import React from 'react'
// import React, { useState } from 'react';

import React from 'react'
import video from '../Assets/IconVideo.mp4'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
    
     <section className="text-gray-600 body-font">
  <div className="container  mx-auto flex px-25  py-25 items-center justify-center flex-col ">
    {/* <img className=" mt-0 object-cover object-center rounded" alt="hero" src="https://wallpapers.com/images/hd/travel-hd-axhrsecphqby11wk.jpg"/> */}
    <video src={video} autoPlay loop muted className='shadow-xl rounded-xl border-black' ></video>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="sm:text-6xl text-3xl mb-2 font-medium text-indigo-900 ">It is Better to Travel  Well Than to Arrive</h1>
      <p className="mb-8 leading-relaxed">"Explore the world with our travel website, your gateway to unforgettable journeys. Discover breathtaking destinations, plan seamless trips, and immerse yourself in the beauty of diverse cultures. Let us be your trusted travel companion, making your wanderlust dreams a reality."</p>
      <div className="flex justify-center">
        <Link to={'/bestrips'} className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> Some of Best Trips</Link>
        </div>
    </div>
  </div>
</section>
    </div>
  )
}

