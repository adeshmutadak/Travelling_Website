import React from 'react'
import Navbar from '../compoent/Navbar'
import Home from '../compoent/Home'
import Footer from '../compoent/Footer'
import Blog from '../compoent/Blog'
import SoloTrips from '../compoent/SoloTrips'
import Gallery from '../compoent/Gallery'

export default function HomeScreens() {
  return (
    <div>
    
    {/* <img src="https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg " alt="" /> */}
     {/* <Navbar/>  */}
     <Home/>
     <Blog/>
     <SoloTrips/>
     <Gallery/>
     <Footer/>
    </div>
  )
}
