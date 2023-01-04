import { Parallax } from "react-parallax"
import luxuryw from "../img/new/luxuryw.jpg"

const ImageTwo = () => (
    <Parallax className="w-full par-eff" bgImage={luxuryw} strength={800}>
        <div name='Skills' className="main-wrap flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full sm:grid-cols-2 gap-4 px-4 md:grid-cols-1 sm:pb-20">
                <div className="pl-4 sm:text-right py-6">
                    <p className="text-4xl text-slate-200 font-bold inline border-b-4 border-pink-600 max-lg:hidden">About</p>
                </div>
                <div></div>
                <div className="max-w-[1000px] w-full grid md:grid-cols-2 sm:grid-cols-1 gap-8 px-4 sm:flex flex-col items-center">
                <div className="text-4xl font-bold text-black bg-pink-600 p-4 sm:p-2 rounded-xl">
                    <p>Hi I'm Mikhail , nice to meet you. Please take a look around.</p>
                </div>
                <div className="sm:text-2xl font-medium text-black secRow">
                  <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients individuals and small startups </p>  
                </div>
                
                </div>
            </div>
            <div className="max-w-[1000px] w-full sm:grid-cols-2 gap-4 px-4 md:grid-cols-1 sm:pb-20">
                <div className="sm:text-right pl-4">
                    <p className="text-4xl text-slate-200 font-bold inline border-b-4 border-pink-600 max-lg:hidden">Skills</p>
                </div>
                <div></div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 md:grid-cols-1 md:gap-2">
                    <div className="text-4xl mt-6 sm:text-2xl font-medium text-black bg-pink-600 p-4 rounded-xl">
                        <p>
                            HTML CSS JavaScript React Bootstrap WordPress
                        </p>
                    </div>
                    <div className="text-2xl font-bold secRow pb-9">
                        <p>
                            In each of these skills, I have deep knowledge and practice on them. I also have knowledge of tailwind, npm, Node.js</p>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>
);

export default ImageTwo