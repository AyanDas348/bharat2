
const Hero = () => {
    return (
        <div className="lg:h-[75vh] h-[90%] lg:pl-20 pl-8 items-center bg-hero-section bg-transparent bg-cover w-full">
            <div className="lg:w-1/3 w-3/4 text-white lg:text-7xl text-4xl lg:mt-40 mt-20 font-bold bg-transparent">
                Helps for your ideal body fitness
            </div>
            <div className="lg:w-1/3 w-3/4 mt-5 text-white text-opacity-50 text-lg font-medium mb-20 bg-transparent">
                Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.
            </div>
            {/* <div className="w-[374px] h-[46px] justify-start items-start gap-8 inline-flex">
                <div className="p-6 rounded-[10px] justify-center items-center gap-4 flex cursor-pointer text-white font-bold text-2xl" id="background">
                    Start Training
                </div>
            </div> */}
            <button className='glowing-btn bg-transparent lg:w-1/4 w-3/4'>
                <span className='glowing-txt bg-transparent'>
                    Sta
                    <span className='faulty-letter bg-transparent'>
                        rt &nbsp;
                    </span>Training
                </span>
            </button>
        </div>
    )
}

export default Hero