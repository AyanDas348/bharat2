import { useState } from 'react';
import { programs } from '../constants';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import ContactModal from './ContactModal'
// import { Carousel } from 'react-responsive-carousel';

const DrawOutlineButton = ({ children, ...rest }) => {
    return (
        <button
            {...rest}
            className="group relative px-4 py-2 font-medium text-[#FF6701] transition-colors duration-[400ms] hover:text-[#ffffff]"
        >
            <span>{children}</span>

            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#FF6701] transition-all duration-100 group-hover:w-full" />

            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#FF6701] transition-all delay-100 duration-100 group-hover:h-full" />

            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#FF6701] transition-all delay-200 duration-100 group-hover:w-full" />

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#FF6701] transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
};

const Programs = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false)

    const handleRightClick = () => {
        setStartIndex((prevIndex) => (prevIndex === programs.length - 3 ? 0 : prevIndex + 1));
    };

    const handleLeftClick = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? programs.length - 3 : prevIndex - 1));
    };

    const handleOpen = () => {
        setIsOpen(true)
        console.log("clicking")
    }

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         handleRightClick()
    //     }, 5000);
    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <div className="overflow-hidden xl:mx-10 mx-2">
            {
                isOpen && <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
            }
            <div className='flex items-center gap-20'>
                <div className="flex flex-col text-xl xl:text-2xl xl:mt-10 mt-32 font-bold relative bg-transparent w-full">
                    <h1 className="bg-transparent text-center w-full xl:text-2xl text-lg">WHAT WE DO</h1>
                    <h1 className="bg-transparent text-center w-full text-2xl xl:text-6xl xl:px-20 pt-10">Regardless of your sport of choice, our gym cultivates champions</h1>
                    {/* <div className='triangle absolute top-2/3 opacity-30 right-1/3'></div> */}
                </div>
            </div>
            {/* desktop */}
            <div className=''>
                <div className="xl:grid hidden xl:grid-cols-11 grid-cols-1 gap-4 md:gap-8 xl:gap-20 mt-10 w-full">
                    <div className='col-span-1 items-center flex cursor-pointer' onClick={handleLeftClick}>
                        <GrPrevious className='text-white h-20 w-20' />
                    </div>
                    {programs.slice(startIndex, startIndex + 3).map((item) => (
                        <div key={item.id} className="relative p-4 w-80 border-2 h-[400px] flex flex-col justify-between my-10 items-center col-span-3 border-transparent rounded-2xl 
        hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#FF6701] hover:cursor-pointer text-white shadow-xl">
                            <img src={item.img} alt={item.title} width={90} height={90} className='flex justify-center items-center' />
                            <h1 className='text-xl font-bold'>{item.title}</h1>
                            <p className="mt-4 justify-evenly">{item.description}</p>
                            <div className="grid place-content-center p-4">
                                <DrawOutlineButton>Get Started</DrawOutlineButton>
                            </div>
                        </div>
                    ))}
                    <div className='col-span-1 items-center flex cursor-pointer' onClick={handleRightClick}>
                        <GrNext className='text-white h-20 w-20' />
                    </div>
                </div>
            </div>

            {/* small screen */}
            <div className="xl:hidden lg:grid-cols-3 lg:grid gap-4 mt-10 w-full xl:ml-20 lg:px-10 lg:gap-4">
                {programs.map((item) => (
                    <div key={item.id} className="p-4 w-80 lg:w-72 border-2 h-[400px] flex flex-col justify-between items-center col-span-1 border-transparent mt-4 lg:border-[#FF6701] lg:rounded-lg">
                        <img src={item.img} alt={item.title} width={90} height={90} className='flex justify-center items-center' />
                        <h1 className='text-xl font-bold'>{item.title}</h1>
                        <p className="mt-4 justify-evenly">{item.description}</p>
                        <button
                            className="w-full mt-4 h-12 text-black font-semibold 
                            bg-gradient-to-r from-[#FF3C00] to-[#FF6701] rounded-xl shadow-xl hover:cursor-pointer"
                            onClick={() => handleOpen()}
                        >
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default Programs;
