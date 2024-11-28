import React from 'react'
import "./custom.css"
export const Services = () => {
  return (
    <section class="text-white body-font bg-black">
  <div class="container px-5 py-24 mx-auto">
    <h1 id='about' className='text-center text-4xl font-semibold py-5 mb-8'>Working Experience</h1>
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKWOvzr0Uj7z9vF5okVm2nf07wL5RXwKcEw&s" />
        </div>
        <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">Onestbird</h2>
        {/* <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p> */}
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Seen More</button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCH1LABm4aWHIEKt_VvFCAD54NQ-WC-ocSg&s" />
        </div>
        <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">Onest Works</h2>
        {/* <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p> */}
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Seen More</button>
      </div>
    </div>
  </div>
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="pic/mi-logo.jpg" />
        </div>
        <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">MI-Networks</h2>
        {/* <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p> */}
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Seen More</button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGJCJ11JIs4gM8tvRBXg4x7F__yrw6KdWaA&s" />
        </div>
        <h2 class="title-font text-2xl font-medium text-white mt-6 mb-3">jalsonic network</h2>
        {/* <p class="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p> */}
        <button class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Seen More</button>
      </div>
    </div>
  </div>
</section>
  )
}
