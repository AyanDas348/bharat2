import { useState } from 'react';
import { programs } from '../constants';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
// import { Carousel } from 'react-responsive-carousel';

const Programs = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handleRightClick = () => {
        setStartIndex((prevIndex) => (prevIndex === programs.length - 3 ? 0 : prevIndex + 1));
    };

    const handleLeftClick = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? programs.length - 3 : prevIndex - 1));
    };

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         handleRightClick()
    //     }, 5000);
    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <div className="overflow-hidden lg:mx-20 ml-8">
            <div className='flex items-center gap-20'>
                <div className="flex flex-col text-4xl lg:text-8xl lg:mt-10 mt-32 font-bold relative bg-transparent w-full">
                    <h1 className="flex bg-transparent">Our</h1>
                    <h1 className="flex bg-transparent">Services</h1>
                    {/* <div className='triangle absolute top-2/3 opacity-30 right-1/3'></div> */}
                </div>
            </div>
            <div className="lg:grid hidden lg:grid-cols-11 grid-cols-1 gap-4 md:gap-8 lg:gap-20 mt-10 w-full">
                <div className='col-span-1 items-center flex cursor-pointer' onClick={handleLeftClick}>
                    <GrPrevious className='text-white h-20 w-20' />
                </div>
                {programs.slice(startIndex, startIndex + 3).map((item) => (
                    <div key={item.id} className="p-4 w-80 border-2 h-[400px] flex flex-col justify-between my-10 items-center col-span-3 border-transparent rounded-2xl 
                    hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer text-white shadow-lg">
                        <img src={item.img} alt={item.title} width={90} height={90} className='flex justify-center items-center' />
                        <h1 className='text-xl font-bold'>{item.title}</h1>
                        <p className="mt-4 justify-evenly">{item.description}</p>
                        <button
                            className="w-full mt-4 h-12 text-black font-semibold 
                            bg-gradient-to-r from-indigo-500 via-purple-500
                             to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 
                             hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
                        >
                            Get Started
                        </button>
                    </div>
                ))}
                <div className='col-span-1 items-center flex cursor-pointer' onClick={handleRightClick}>
                    <GrNext className='text-white h-20 w-20' />
                </div>
            </div>
            <div className="lg:hidden lg:grid-cols-3 gap-4 md:gap-8 mt-10 w-full lg:ml-20">
                {programs.map((item) => (
                    <div key={item.id} className="p-4 w-80 border-2 h-[400px] flex flex-col justify-between items-center col-span-1 border-transparent mt-4">
                        <img src={item.img} alt={item.title} width={90} height={90} className='flex justify-center items-center' />
                        <h1 className='text-xl font-bold'>{item.title}</h1>
                        <p className="mt-4 justify-evenly">{item.description}</p>
                        <button
                            className="w-full mt-4 h-12 text-white font-semibold 
                            bg-gradient-to-r from-indigo-500 via-purple-500
                             to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 
                             hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer"
                        >
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs;
