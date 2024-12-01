import React, { useEffect, useState } from 'react';

export default function Home() {
  const words = ["I am a web developer", "I am Frontent Developer ", "I am React js Developer ", "I am Next Js Developer "];
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex(prev => (prev + 1) % words.length);
        }
      } else {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const typingSpeed = 150;
    const eraseSpeed = 100;
    const delayBetweenWords = 2000;

    const interval = setInterval(() => {
      type();
    }, isDeleting ? eraseSpeed : typingSpeed);

    if (charIndex === 0 && !isDeleting) {
      setTimeout(() => {
        clearInterval(interval);
      }, delayBetweenWords);
    }

    return () => clearInterval(interval); // Cleanup on component unmount or when effect runs again
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section className="text-white body-font bg-black mt-10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded-full" alt="hero" src="pic/abubakkar.jpg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm
            <br className="hidden lg:inline-block text-4xl" />
            <span id="name">Abu Bakkar</span>
            <br className="hidden lg:inline-block" />
            <span>{displayedText}</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a Full Stack Developer with a year of experience, passionate about building dynamic web applications. I enjoy tackling challenges and continuously improving my skills in both front-end and back-end technologies.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact Us
            </button>
            <a href="abubakkar-cv.pdf" download className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
