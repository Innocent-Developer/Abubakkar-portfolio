import React, { useEffect } from 'react';
import './custom.css';

export const Skill = () => {
  useEffect(() => {
    // Reset bars to 0% and then trigger animation when the component is mounted
    const bars = document.querySelectorAll('.rc-progress-line-path');
    bars.forEach(bar => {
      bar.style.strokeDashoffset = '100px'; // Reset bars to 0%
      setTimeout(() => {
        bar.classList.add('animate'); // Trigger animation after reset
      }, 50); // Delay the animation to ensure reset occurs first
    });
  }, []);

  return (
    <div className='bg-black text-white'>
      <div className="h-screen flex justify-center items-center dark:bg-gray-800">
        <div className="max-w-xl mx-auto w-full">
          {/* Title */}
          <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">______</h1>
          <h4 className="text-center text-4xl font-semibold py-5 mb-8">Skills</h4>

          {/* Web Development Skill */}
          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Web Developments</span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">80%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
              <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#FF6464" strokeWidth="1" fillOpacity="0"
                style={{ strokeDasharray: '80px, 100px', strokeDashoffset: '100px' }}></path>
            </svg>
          </div>

          {/* Frontend Developer Skill */}
          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Frontend Developer</span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">90%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
              <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#9272D4" strokeWidth="1" fillOpacity="0"
                style={{ strokeDasharray: '90px, 100px', strokeDashoffset: '100px' }}></path>
            </svg>
          </div>

          {/* React Js Skill */}
          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">React Js</span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">85%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
              <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#5185D4" strokeWidth="1" fillOpacity="0"
                style={{ strokeDasharray: '85px, 100px', strokeDashoffset: '100px' }}></path>
            </svg>
          </div>

          {/* Next Js Skill */}
          <div className="mb-7">
            <div className="flex justify-between py-1">
              <span className="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Next Js</span>
              <span className="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">65%</span>
            </div>
            <svg className="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
              <path className="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#D9D9D9" strokeWidth="1" fillOpacity="0"></path>
              <path className="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" strokeLinecap="round" stroke="#CA56F2" strokeWidth="1" fillOpacity="0"
                style={{ strokeDasharray: '65px, 100px', strokeDashoffset: '100px' }}></path>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
};
