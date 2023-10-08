import React from "react";
import { Link } from "react-router-dom";
import video from '../Assets/IconVideo.mp4'

export default function Navbar() {
  return (
    <div> 
     {/* <img src="https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg " alt="" /> */}
      <header className="text-black bg-purple-300 body-font  shadow-xl rounded-xl ml-5 mr-5 mt-5 mb-3 " >
  <div className="container mx-10 flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to={'/'} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
       
<video  className="rounded-full  h-12 " src={video} autoPlay loop muted alt="image description"/>

      <span className="ml-3 text-2xl text-pink-700 font-serif hover:font-sans" >Indigo</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to={'/'} className="mr-5 hover:text-white">Home</Link>
      <Link to={'/services'} className="mr-5 hover:text-white">Service</Link>
      <Link to={'/aboutus'} className="mr-5 hover:text-white">About</Link>
      <Link to={'/blog'} className="mr-5 hover:text-white">Blog</Link>
      <Link to={'contact'} className="mr-5 hover:text-white">Contact Us</Link>
      <Link  to={'/offers'}className="mr-5 hover:text-white">Offers</Link>
    </nav>
    <Link to={'/signUp'} className="inline-flex items-center bg-indigo-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700  hover:text-white rounded text-base mt-4 md:mt-0">Sign Up
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </Link>
  </div>
  
</header>
    </div>
  );
}
