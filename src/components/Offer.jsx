const Offer = () => {
    return (
        <div className="mt-10">
            <div className="grid lg:grid-cols-6 gap-8 grid-cols-1">
                <div className="col-span-2 lg:ml-20 mt-10 text-xl">
                    <h1 className="lg:text-7xl text-4xl mb-5 ml-5 font-semibold">Full Body Fitness</h1>
                    <p className="mx-10">Join now to get exclusive offers</p>
                    <p className="mx-10">and start your fitness journey with us</p>
                    <button
                        className="w-full mt-4 h-12 text-white font-semibold mx-3
                        bg-gradient-to-r from-indigo-500 via-purple-500
                             to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 
                             hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer col-span-1"
                    >
                        Get Started
                    </button>
                </div>
                <div className="lg:mt-8 mt-3 col-span-3 items-center justify-center flex ml-5">
                    <h1 className="offer"><span>25% OFF</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Offer