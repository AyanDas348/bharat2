import { useState } from 'react';
import { programs } from '../constants';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import ContactModal from './ContactModal'
// import { Carousel } from 'react-responsive-carousel';

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
        <div className="overflow-hidden lg:mx-20 ml-8">
            {
                isOpen && <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />
            }
            <div className='flex items-center gap-20'>
                <div className="flex flex-col text-4xl lg:text-8xl lg:mt-10 mt-32 font-bold relative bg-transparent w-full">
                    <h1 className="bg-transparent text-center w-full">Our Services</h1>
                    {/* <div className='triangle absolute top-2/3 opacity-30 right-1/3'></div> */}
                </div>
            </div>
            <div className="lg:grid hidden lg:grid-cols-11 grid-cols-1 gap-4 md:gap-8 lg:gap-20 mt-10 w-full">
                <div className='col-span-1 items-center flex cursor-pointer' onClick={handleLeftClick}>
                    <GrPrevious className='text-white h-20 w-20' />
                </div>
                {programs.slice(startIndex, startIndex + 3).map((item) => (
                    <div key={item.id} className="p-4 w-80 border-2 h-[400px] flex flex-col justify-between my-10 items-center col-span-3 border-transparent rounded-2xl 
                    hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#FF6701] hover:cursor-pointer text-white shadow-lg">
                        <img src={item.img} alt={item.title} width={90} height={90} className='flex justify-center items-center' />
                        <h1 className='text-xl font-bold'>{item.title}</h1>
                        <p className="mt-4 justify-evenly">{item.description}</p>
                        <button className="c-button c-button--gooey" onClick={() => handleOpen()}> Get Started
                            <div className="c-button__blobs">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'block', height: '0', width: '0' }}>
                            <defs>
                                <filter id="goo">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                    <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                </filter>
                            </defs>
                        </svg>
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
                            className="w-full mt-4 h-12 text-black font-semibold 
                            bg-gradient-to-r from-[#FF3C00] to-[#FF6701] rounded-lg shadow-lg hover:cursor-pointer"
                            onClick={() => handleOpen()}
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
