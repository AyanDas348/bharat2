import { trainer } from "../assets"

const Trainer = () => {
    return (
        <div className="my-10">
            <div>
                <div>
                    <h1 className="text-4xl lg:text-8xl text-center">
                        OUR BEST COACHES
                    </h1>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-1 mt-10 gap-3 px-20">
                    <div className="p-4 gap-y-3">
                        <img src={trainer} alt='trainer' className="lg:w-[300px] w-[500px] rounded-xl cursor-pointer shadow-lg hover:shadow-orange-400"/>
                        <h1 className="text-xl mt-2">Ayan Das</h1>
                        <h2 className="subHeading">Crossfit Coach</h2>
                    </div>
                    <div className="p-4">
                        <img src={trainer} alt='trainer' className="lg:w-[300px] w-[500px] rounded-xl cursor-pointer shadow-lg hover:shadow-orange-400"/>
                        <h1 className="text-xl mt-2">Punyaslok Panda</h1>
                        <h2 className="subHeading">Weightlift Trainer</h2>
                    </div>
                    <div className="p-4">
                        <img src={trainer} alt='trainer' className="lg:w-[300px] w-[500px] rounded-xl cursor-pointer shadow-lg hover:shadow-orange-400"/>
                        <h1 className="text-xl mt-2">Arpita Saha</h1>
                        <h2 className="subHeading">Zumba Teacher</h2>
                    </div>
                    <div className="p-4">
                        <img src={trainer} alt='trainer' className="lg:w-[300px] w-[500px] rounded-xl cursor-pointer shadow-lg hover:shadow-orange-400"/>
                        <h1 className="text-xl mt-2">Subha Abhisek</h1>
                        <h2 className="subHeading">Lifestyle Coach</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainer