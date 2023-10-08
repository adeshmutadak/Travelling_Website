import React from 'react'

export default function SoloTrips() {
  return (
    <>    
  
      <section className="text-gray-600 body-font bg-gray-100 mb-3" >
      <div className='container ml-20 mt-4 bg-black  h-20 text-white font-serif text-3xl text-center rounded-2xl pt-5'>
      <h1>Plan Your Trip</h1>
      </div>
      
  <div className="container px-5 pt-10 mx-auto">
  
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4 ">
        <div className=" border-grey-200 h-64 overflow-hidden border-black  shadow-xl rounded-2xl ">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c29sbyUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
        </div>
        <h2 className="title-font  italic text-2xl font-bold text-gray-900 mt-6 mb-3">Plan Your Solo Trips</h2>
        <p className="leading-relaxed text-base">Embark on epic solo adventures with our travel website. Discover the freedom of solo travel, where every moment is an opportunity to explore ...</p>
        <button className="flex mx-auto mt-3 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-black rounded">Explore More</button>
      </div>
      
      <div className="sm:w-1/2 mb-10 px-4 ">
        <div className=" border-grey-200 h-64 overflow-hidden border-black  shadow-xl rounded-2xl ">
          <img alt="content" className="object-cover object-center h-full w-full" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXAlMjB0cmF2ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80"/>
        </div>
        <h2 className="title-font  italic text-2xl font-bold text-gray-900 mt-6 mb-3">Unforgettable Group Adventures Await!</h2>
        <p className="leading-relaxed text-base">Join our group trips for thrilling adventures, cultural discoveries, and unforgettable memories. Explore stunning destinations with like-minded travelers Start your journey now!..</p>
        <button className="flex mx-auto mt-3 text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-black rounded">Explore More</button>
      </div>
    </div>
  </div>

  
</section>
    </>

  )
}
