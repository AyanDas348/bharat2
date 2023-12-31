import { founder } from "../assets"
const Founder = () => {
    return (
        <div className="lg:ml-20 mt-32">
            <div className="flex flex-col text-4xl lg:text-8xl lg:mt-0 mt-20 font-bold ml-5">Meet Our Founder</div>
            <div className="grid lg:grid-cols-4 items-center justify-center grid-cols-1">
                <div className="w-40 lg:w-80 lg:h-80 h-40 rounded-full overflow-hidden lg:items-start lg:justify-start lg:mx-8 mx-auto flex mt-10">
                    <img src={founder} alt="founder" className="w-full h-full object-cover flex" />
                </div>
                <div className="mx-10 mt-10 items-center justify-center col-span-2 text-xl font-medium">
                    <p className="mt-2">I&apos;m Bharat, the founder of Bharat&apos;s Fitness Den.</p>
                    <p className="mt-2">At Bharat&apos;s Fitness Den, our focus is to create a supportive environment. We offer personalized training programs, cutting-edge techniques, and a welcoming community.</p>
                    <p className="mt-2">I&apos;m committed to continual growth, staying updated with the latest fitness trends, and tailoring programs to individual needs. Beyond the gym, I engage in community events promoting health and wellness.</p>
                    <p className="mt-2">I&apos;m excited to share my passion for fitness and support your journey. Feel free to reach out or visit our gym to kickstart your path to a healthier lifestyle.</p>
                </div>
            </div>
        </div>
    )
}

export default Founder