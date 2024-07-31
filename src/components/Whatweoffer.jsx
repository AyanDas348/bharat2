import { body, boxing, cardio, yoga } from '../assets';

const WhatWeOffer = () => {
    const offers = [
        { title: 'Modern Equipment', description: 'Top-notch equipment to support your fitness journey.', img: cardio },
        { title: 'Weight Control', description: 'Programs tailored to help you manage your weight effectively.', img: body },
        { title: 'Nutrition Plan', description: 'Personalized nutrition plans to meet your health goals.', img: yoga },
        { title: 'Daily Workouts', description: 'Structured daily workout routines to keep you on track.', img: boxing }
    ];

    return (
        <div className="px-8 py-12">
            <div className="flex items-center justify-center flex-col mb-12">
                <div className="text-center">
                    <h1 className="text-lg xl:text-2xl font-bold">WHAT WE OFFER</h1>
                    <h1 className="text-2xl xl:text-6xl font-bold pt-10 xl:px-20">The main thing for us is your result !</h1>
                </div>
            </div>
            <div id="cards" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 px-4 xl:px-32 lg:min-h-60 lg:gap-6">
                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className="border border-[#FF6701] shadow-lg rounded-lg p-6 text-center transform transition-transform hover:scale-105 hover:shadow-xl hover:shadow-[#FF6701] xl:px-14"
                    >
                        <div className='flex w-full justify-center items-center'>
                            <img src={offer.img} alt={offer.title} className="w-20 h-20 object-cover rounded-t-lg mb-4" />
                        </div>
                        <h2 className="text-xl font-semibold mb-4">{offer.title}</h2>
                        <p className="">{offer.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhatWeOffer;
