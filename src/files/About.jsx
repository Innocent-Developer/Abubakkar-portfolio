import React from 'react'
import "./custom.css"
export const About = () => {
  return (
    <>
   <section class="text-white bg-black  body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" data-aos="zoom-out-down">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 id='about' class="title-font sm:text-4xl text-4xl mb-4 font-medium text-white">About US
      </h1>
      <p id='about-p' class="mb-8 leading-relaxed">I'm a web developer with a passion for building dynamic, user-friendly websites and applications. Skilled in HTML, CSS, JavaScript, and frameworks like React, I focus on creating seamless digital experiences. Always eager to learn and solve new challenges, I strive to craft innovative solutions for every project..</p>
      <span class="inline-flex">
  <a id='a' href="https://www.facebook.com/devabubakkarsajid" target='blank' class="text-gray-600 hover:text-blue-500 transition-transform duration-300 transform hover:scale-110 text-2xl">
    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
    </svg>
  </a>
  <a id='a' href="/" class="ml-3 text-gray-500 hover:text-blue-500 transition-transform duration-300 transform hover:scale-110">
    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
    </svg>
  </a>
  <a id='a' href="https://www.instagram.com/dev_abubakkar/" target='blank'class="ml-3 text-gray-500 hover:text-blue-500 transition-transform duration-300 transform hover:scale-110">
    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
    </svg>
  </a>
  <a id='a' href='https://pk.linkedin.com/in/mughal-abu-bakkar-405a35339' target='blank' class="ml-3 text-gray-500 hover:text-blue-500 transition-transform duration-300 transform hover:scale-110">
    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
      <circle cx="4" cy="4" r="2" stroke="none"></circle>
    </svg>
  </a>
</span>

    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="pic/abubakkar.jpg" />
    </div>
  </div>
</section>
    </>
  )
}
