import Typewriter from 'react-typewriter-effect';

export default function Home() {
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
            
            {/* Typewriter Effect */}
            <Typewriter 
              startDelay={1000}
              cursorColor="black"
              multiText={['I am Frontend Developer', 'I am React Js Developer', 'I am Next Js Developer', 'I am Web Developer']}
              multiTextDelay={2000}
              typeSpeed={50}
              eraseSpeed={50} // Optional: Speed at which text is erased
              eraseDelay={2000} // Optional: Delay before erasing starts
              loop={true} // This enables the infinite loop
              cursorStyle="|" // Optional: Customize the cursor style if needed
            />
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a Full Stack Developer with a year of experience, passionate about building dynamic web applications. I enjoy tackling challenges and continuously improving my skills in both front-end and back-end technologies.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact Us
            </button>
            <a href='abubakkar-cv.pdf' download className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}