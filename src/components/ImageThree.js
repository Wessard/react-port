import { Parallax } from "react-parallax"
import books from "../img/new/books.jpg"
import valmari from '../img/ass-img/valmari.png'
import vueCinema from '../img/ass-img/vueCinema.png'
import tasteEat from '../img/ass-img/tasteEat.png'

const ImageThree = () => (
    <Parallax className="h-screen paral" bgImage={books} strength={800} >
        <div name='portfolio' className="md:h-screen text-gray-300 max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
            <div className="pb-8 max-md:hidden">
                <p className="text-4xl font-bold inline border-b-4 text-white bg-pink-500 rounded-xl px-3 border-pink-800">Portfolio</p>
                <p className="py-6 font-bold text-pink-600">Check out some of my recent work</p>
            </div>
            {/* Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:flex gan">
                {/* Grid Item */}
                <div
                style={{backgroundImage: `url(${valmari})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100 duration-500 ease-out">
                        <span className="text-2xl font-bold text-black tracking-wider flex justify-center items-center">Valmari
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://wessard.github.io/Valmari/">
                              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">Demo</button>
                            </a>
                            <a href="https://github.com/Wessard/Valmari">
                              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(${vueCinema})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100 duration-500 ease-out">
                        <span className="text-2xl font-bold text-black tracking-wider flex justify-center items-center">Vue-Cinema
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://wessard.github.io/new-project/">
                              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">Demo</button>
                            </a>
                            <a href="https://github.com/Wessard/new-project">
                              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">Code</button>
                            </a>
                           
                        </div>
                    </div>
                </div>
                <div
                style={{backgroundImage: `url(${tasteEat})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className="opacity-0 group-hover:opacity-100 duration-500 ease-out">
                        <span className="text-2xl font-bold text-black tracking-wider flex justify-center items-center">
                            Restaurant
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://wessard.github.io/TasteEat/">
                              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">Demo</button>
                            </a>
                            <a href="https://github.com/Wessard/TasteEat">
                              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-pink-600">Code</button>
                            </a>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
);

export default ImageThree