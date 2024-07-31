import { useState, useEffect } from 'react';
import { logo } from "../assets";
import img1 from '../assets/heroImages/GYM INTERIOR_1.11.1.jpg';
import img2 from '../assets/heroImages/GYM INTERIOR_1.15.1.jpg';
import img3 from '../assets/heroImages/GYM INTERIOR_1.31.1.jpg';
import img4 from '../assets/heroImages/GYM INTERIOR_1.32.1.jpg';
import img5 from '../assets/heroImages/GYM INTERIOR_1.37.1.jpg';
import img6 from '../assets/heroImages/GYM INTERIOR_1.39.1.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    const imagesArray = [img1, img2, img3, img4, img5, img6];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [imagesArray.length]);

    return (
        <div className="main headingFont lg:relative top-0">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                style={{
                    position: "relative",
                    backgroundImage: `url('${imagesArray[currentImageIndex]}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 1s ease-in-out",
                }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <Link to="/" className="absolute top-10 lg:left-20 left-10">
                <img src={logo} alt="logo" width={95} height={95} className="bg-transparent scale-150" />
                <p className="font-bold lg:text-2xl hidden text-[#FF6701] ">Bharat's Fitness Den</p>
            </Link>
            <div className="lg:h-[100vh] md:h-[100vh] lg:pl-20 pl-8 items-center w-full bg-transparent content lg:pt-56 pt-56">
                <div className="hero-head text-white lg:text-7xl text-4xl font-bold bg-transparent !w-full flex">
                    <h1 className="headingFont bg-transparent w-full">Helps for your ideal body fitness</h1>
                </div>
                <div className="lg:w-1/3 w-3/4 mt-5 text-white text-xl font-medium mb-20 bg-transparent hidden xl:flex">
                    <h2 className="subHeadingFont bg-transparent">Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</h2>
                </div>
                <a className="lg:w-1/4 w-3/4 bg-transparent pt-16 xl:pt-4" href="#services">
                    <button className="glowing-btn bg-transparent">
                        <span className="glowing-txt bg-transparent myfont">
                            Sta
                            <span className="faulty-letter bg-transparent myfont">
                                rt &nbsp;
                            </span>Training
                        </span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Hero;
