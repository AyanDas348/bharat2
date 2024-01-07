import { founder } from "../assets"
const Founder = () => {
    return (
        <div className="lg:ml-20 mx-auto mt-32">
            <div className="flex flex-col text-4xl lg:text-8xl lg:mt-0 mt-20 font-bold ml-10">
                <h1>Meet Our Founder</h1>
            </div>
            <div className="grid lg:grid-cols-4 items-center justify-center grid-cols-1 mx-10">
                <div className="w-full rounded-full overflow-hidden lg:items-start lg:justify-start items-center justify-center flex mt-10">
                    <img src={founder} alt="founder" className="w-40 h-40 lg:w-64 lg:h-64 rounded-full object-cover flex" />
                </div>
                <div className="mt-10 items-center justify-center col-span-2 text-xl font-medium">
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