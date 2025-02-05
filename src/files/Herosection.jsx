import React, { useEffect, useState } from 'react';

export default function Home() {
  const words = [
    "I am a Full Stack Developer", 
    "I am a Frontend Developer", 
    "I am a React.js Developer", 
    "I am a Next.js Developer"
  ];
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = 150;
    const eraseSpeed = 100;
    const delayBetweenWords = 2000;

    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, eraseSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="text-white body-font bg-black mt-10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="/pic/abubakkar.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm
            <br />
            <span id="name">Abu Bakkar</span>
            <br />
            <span>{displayedText}</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a Full Stack Developer with a year of experience, passionate about building dynamic web applications. I enjoy tackling challenges and continuously improving my skills in both front-end and back-end technologies.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact Us
            </button>
            <a
              href="/abubakkar-cv.pdf"
              download
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
