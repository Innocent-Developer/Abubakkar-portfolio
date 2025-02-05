import React from 'react';
import './custom.css';

export const Services = () => {
  return (
    <section className="text-white body-font bg-black">
      <div className="container px-5 py-24 mx-auto" data-aos="fade-right">
        <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">______</h1>
        <h1 id='about' className='text-center text-4xl font-semibold py-5 mb-8'>Working Experience</h1>
        <div className="flex flex-wrap justify-center -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 md:w-1/3 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden flex justify-center items-center">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKWOvzr0Uj7z9vF5okVm2nf07wL5RXwKcEw&s"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Onestbird</h2>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Seen More</button>
          </div>
          <div className="sm:w-1/2 md:w-1/3 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden flex justify-center items-center">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCH1LABm4aWHIEKt_VvFCAD54NQ-WC-ocSg&s"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">Onest Works</h2>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Seen More</button>
          </div>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 md:w-1/3 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden flex justify-center items-center">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="pic/mi-logo.jpg"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">MI-Networks</h2>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Seen More</button>
          </div>
          <div className="sm:w-1/2 md:w-1/3 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden flex justify-center items-center">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRGJCJ11JIs4gM8tvRBXg4x7F__yrw6KdWaA&s"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">jalsonic network</h2>
            <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Seen More</button>
          </div>
        </div>
      </div>
    </section>
  );
};
