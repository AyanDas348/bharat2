import video from '../assets/Fitness Den website Video.mp4'
// import Navbar from './Navbar'
const Hero = () => {
    return (
        <div className='main headingFont'>
            <div className='overlay'></div>
            <video autoPlay loop muted src={video} disablePictureInPicture controlsList='nodownload' className='bg-transparent' />
            <div className="lg:h-[75vh] h-[90%] lg:pl-20 pl-8 mt-20 items-center w-full bg-transparent content">
                <div className="lg:w-1/3 w-3/4 text-white lg:text-7xl text-4xl lg:mt-40 mt-20 font-bold bg-transparent">
                    <h1 className='headingFont'>Helps for your ideal body fitness</h1>
                </div>
                <div className="lg:w-1/3 w-3/4 mt-5 text-white text-xl font-medium mb-20 bg-transparent">
                    <h2 className='subHeadingFont'>Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</h2>
                </div>
                <button className='glowing-btn bg-transparent lg:w-1/4 w-3/4'>
                    <span className='glowing-txt bg-transparent myfont'>
                        Sta
                        <span className='faulty-letter bg-transparent myfont'>
                            rt &nbsp;
                        </span>Training
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Hero