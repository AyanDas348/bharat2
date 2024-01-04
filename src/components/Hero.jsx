import video from '../assets/WhatsApp Video 2024-01-02 at 16.15.32.mp4'
// import Navbar from './Navbar'
const Hero = () => {
    return (
        <div className='main'>
            <div className='overlay'></div>
            <video autoPlay loop muted src={video} disablePictureInPicture controlsList='nodownload' className='bg-transparent' />
            <div className="lg:h-[75vh] h-[90%] lg:pl-20 pl-8 mt-20 items-center w-full bg-transparent content">
                <div className="lg:w-1/3 w-3/4 text-white lg:text-7xl text-4xl lg:mt-40 mt-20 font-bold bg-transparent">
                    Helps for your ideal body fitness
                </div>
                <div className="lg:w-1/3 w-3/4 mt-5 text-white text-opacity-50 text-lg font-medium mb-20 bg-transparent">
                    Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.
                </div>
                <button className='glowing-btn bg-transparent lg:w-1/4 w-3/4'>
                    <span className='glowing-txt bg-transparent'>
                        Sta
                        <span className='faulty-letter bg-transparent'>
                            rt &nbsp;
                        </span>Training
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Hero