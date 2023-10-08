import React from 'react'
import blog1 from '../Assets/blog1.jpg'
import blog2 from '../Assets/blog2.jpg'
import blog3 from '../Assets/blog3.jpg'
import blog4 from '../Assets/blog4.jpg'
import blog5 from '../Assets/blog6.avif'
import blog6 from '../Assets/blog6.avif';
import { Link } from 'react-router-dom'
import blog7 from '../Assets/blog7.jpg'
import blog8 from '../Assets/blog8.jpg'
export default function Blog() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white mt-3">
      <div className='container ml-20 mt-0 bg-black  h-18 text-white font-serif text-2xl text-center rounded-2xl pt-5 pb-3 mb-3'>
      <h1>CheckOut Some Blogs</h1>
      </div>
  <div className="container px-5 py-18 mx-auto ">
    <div className="flex flex-wrap -m-4 " >
      <div className="p-4 md:w-1/3 ">
        <div className="h-full border-2 border-opacity-60  overflow-hidden  border-grey-100 shadow-xl rounded-xl">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog1} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-l title-font font-xl text-black mb-1">Getting Here & Around</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Transportation</h1>
            <p className="leading-relaxed mb-3">With 4 international airports, served by a wealth of global carriers, getting to and around the Kingdom couldn’t be easier. A first-rate transportation system connects Saudi Arabia’s provinces and cities, serving millions of people each day.</p>
            <div className="flex items-center flex-wrap ">
              <Link to={'/blog'} className="text-black inline-flex items-center md:mb-2 lg:mb-0 bg-pink-600 p-3 rounded-xl hover:bg-black hover:text-white">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
              
            </div>
          </div>
        </div>
      </div>
     
      
      <div className="p-4 md:w-1/3 ">
        <div className="h-full border-2 border-opacity-60  overflow-hidden  border-grey-100 shadow-xl rounded-xl">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog2} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-l title-font font-xl text-black mb-1">Getting Here & Around</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Transportation</h1>
            <p className="leading-relaxed mb-3">With 4 international airports, served by a wealth of global carriers, getting to and around the Kingdom couldn’t be easier. A first-rate transportation system connects Saudi Arabia’s provinces and cities, serving millions of people each day.</p>
            <div className="flex items-center flex-wrap ">
              <Link  to={'/blog'} className="text-black inline-flex items-center md:mb-2 lg:mb-0 bg-pink-600 p-3 rounded-xl hover:bg-black hover:text-white">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
              
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3 ">
        <div className="h-full border-2 border-opacity-60  overflow-hidden  border-grey-100 shadow-xl rounded-xl">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog3} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-l title-font font-xl text-black mb-1">Getting Here & Around</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Transportation</h1>
            <p className="leading-relaxed mb-3">With 4 international airports, served by a wealth of global carriers, getting to and around the Kingdom couldn’t be easier. A first-rate transportation system connects Saudi Arabia’s provinces and cities, serving millions of people each day.</p>
            <div className="flex items-center flex-wrap ">
              <Link  to={'/blog'} className="text-black inline-flex items-center md:mb-2 lg:mb-0 bg-pink-600 p-3 rounded-xl hover:bg-black hover:text-white">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
              
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3 ">
        <div className="h-full border-2 border-opacity-60  overflow-hidden  border-grey-100 shadow-xl rounded-xl">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog4} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-l title-font font-xl text-black mb-1">Getting Here & Around</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Transportation</h1>
            <p className="leading-relaxed mb-3">With 4 international airports, served by a wealth of global carriers, getting to and around the Kingdom couldn’t be easier. A first-rate transportation system connects Saudi Arabia’s provinces and cities, serving millions of people each day.</p>
            <div className="flex items-center flex-wrap ">
              <Link to={'/blog'} className="text-black inline-flex items-center md:mb-2 lg:mb-0 bg-pink-600 p-3 rounded-xl hover:bg-black hover:text-white">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
              
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3 ">
        <div className="h-full border-2 border-opacity-60  overflow-hidden  border-grey-100 shadow-xl rounded-xl">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog5} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-l title-font font-xl text-black mb-1">Getting Here & Around</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Transportation</h1>
            <p className="leading-relaxed mb-3">With 4 international airports, served by a wealth of global carriers, getting to and around the Kingdom couldn’t be easier. A first-rate transportation system connects Saudi Arabia’s provinces and cities, serving millions of people each day.</p>
            <div className="flex items-center flex-wrap ">
              <Link to={'/blog'} className="text-black inline-flex items-center md:mb-2 lg:mb-0 bg-pink-600 p-3 rounded-xl hover:bg-black hover:text-white">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
              
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:w-1/3 ">
        <div className="h-full border-2 border-opacity-60  overflow-hidden  border-grey-100 shadow-xl rounded-xl">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog7} alt="blog"/>
          <div className="p-6">
            <h2 className="tracking-widest text-l title-font font-xl text-black mb-1">Getting Here & Around</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Transportation</h1>
            <p className="leading-relaxed mb-3">With 4 international airports, served by a wealth of global carriers, getting to and around the Kingdom couldn’t be easier. A first-rate transportation system connects Saudi Arabia’s provinces and cities, serving millions of people each day.</p>
            <div className="flex items-center flex-wrap ">
              <Link  to={'/blog'} className="text-black inline-flex items-center md:mb-2 lg:mb-0 bg-pink-600 p-3 rounded-xl hover:bg-black hover:text-white">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
