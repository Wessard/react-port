import { HiArrowNarrowRight } from "react-icons/hi";
import { Parallax } from "react-parallax"
// import ofis from "../img/new/ofis.jpg"

const ImageOne = () => (
    <Parallax name='home' strength={800}>
<div name='home' className="bg-[#0a192f]"  >
    <div className='max-w-sm:mx-10 max-w-[1000px] md:py-72 max-sm:py-72 mx-auto px-8 flex flex-col justify-center h-screen'>
        <p className="text-pink-600 sm:my-8">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl  font-bold text-[#ccd6f6]">Ten Mikhail</h1>
        
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8898b0]">I'm a Frontend Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
        I am a novice web developer, I had freelancing experience and in several small startups as a coder, I also studied JavaScript in parallel and now I am more focused on its React library. 
        I want to be in the future a Full Stack Developer </p>
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 max-w-[150px]">View Work
        <span className="group-hover:rotate-90 duration-300">
        <HiArrowNarrowRight className="" />
        </span>
        </button>
    </div>
    </div>
    </Parallax>
    
);

export default ImageOne