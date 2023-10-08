import React from "react";
import { Link } from "react-router-dom";
import gaoImg from "../Assets/goaImg.jpg";
import bali from "../Assets/baliImg.avif";
import kerala from "../Assets/keralaImg.jpg";
import london from "../Assets/londonImg.webp";
import tradition from "../Assets/tradition.jpg";
import bangkok from "../Assets/bangkok.jpg";

export default function BestTrips() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white">
        <div className="container text-center  bg-black rounded-2xl hover:bg-red-100 mb-4 ml-12">
          <h1 className="container py-3 text-white italic text-xl hover:text-black">
            Some Memorable Trips
          </h1>
        </div>
        <div className="container px-5 py-19 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/3 cursor-pointer hover:scale-105  ">
              <div className="h-full border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden hover:bg-red-300">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center "
                  src={gaoImg}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3 bg-black rounded-lg text-center ">
                    GOA
                  </h1>
                  <p className="leading-relaxed mb-3">
                    This tiny state in West India is famous for its plethora of
                    beautiful beaches, great seafood, amazing nightlife, and
                    thrilling watersports. Goa along with being ..
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 cursor-pointer hover:scale-105">
              <div className="h-full border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden hover:bg-red-300">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center "
                  src={bali}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3 bg-black rounded-lg text-center ">
                    BALI
                  </h1>
                  <p className="leading-relaxed mb-3">
                    This tiny state in West India is famous for its plethora of
                    beautiful beaches, great seafood, amazing nightlife, and
                    thrilling watersports. Goa along with being ..
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 cursor-pointer hover:scale-105">
              <div className="h-full border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden hover:bg-red-300
              ">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center "
                  src={kerala}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3 bg-black rounded-lg text-center ">
                    KERALA
                  </h1>
                  <p className="leading-relaxed mb-3">
                    This tiny state in West India is famous for its plethora of
                    beautiful beaches, great seafood, amazing nightlife, and
                    thrilling watersports. Goa along with being ..
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 cursor-pointer hover:scale-105">
              <div className="h-full border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden hover:bg-red-300">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center "
                  src={tradition}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3 bg-black rounded-lg text-center ">
                    KARNATAKA
                  </h1>
                  <p className="leading-relaxed mb-3">
                    This tiny state in West India is famous for its plethora of
                    beautiful beaches, great seafood, amazing nightlife, and
                    thrilling watersports. Goa along with being ..
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 cursor-pointer hover:scale-105">
              <div className="h-full border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden hover:bg-red-300">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center "
                  src={london}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3 bg-black rounded-lg text-center ">
                    LONDON
                  </h1>
                  <p className="leading-relaxed mb-3">
                    This tiny state in West India is famous for its plethora of
                    beautiful beaches, great seafood, amazing nightlife, and
                    thrilling watersports. Goa along with being ..
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>


            <div className="p-4 md:w-1/3 cursor-pointer hover:scale-105">
              <div className="h-full border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden hover:bg-red-300">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center "
                  src={bangkok}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3 bg-black rounded-lg text-center ">
                   BANGKOK
                  </h1>
                  <p className="leading-relaxed mb-3">
                    This tiny state in West India is famous for its plethora of
                    beautiful beaches, great seafood, amazing nightlife, and
                    thrilling watersports. Goa along with being ..
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>


            <div className="p-4 md:w-1/3 cursor-pointer hover:scale-105">
              <div className="h-full border-2 border-gray-200 border-opacity-60 shadow-2xl rounded-lg overflow-hidden hover:bg-red-300">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center "
                  src={bangkok}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3 bg-black rounded-lg text-center ">
                    Goa
                  </h1>
                  <p className="leading-relaxed mb-3">
                    This tiny state in West India is famous for its plethora of
                    beautiful beaches, great seafood, amazing nightlife, and
                    thrilling watersports. Goa along with being ..
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
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
  );
}
