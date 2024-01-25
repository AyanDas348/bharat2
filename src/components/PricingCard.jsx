import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { trainer } from '../assets'

const PricingCard = ({ image, offerHead, includedFeatures, price }) => {
    const [isMonthly, setIsMonthly] = useState(false);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };
    return (
        <div className='lg:grid lg:grid-cols-8 w-full col-span-8'>
            <div className="mt-16 sm:mt-20 lg:col-span-2 hidden md:block">
                <div className="mx-auto px-4 h-[300px] w-[300px]">
                    <img src={trainer} alt="Offer" className="rounded-2xl border h-full border-transparent" />
                </div>
            </div>
            <div className="mx-auto lg:mt-16 max-w-2xl mt-0 lg:mx-0 lg:grid lg:grid-cols-6 col-span-6 lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto col-span-4">
                    <h3 className="lg:text-5xl text-2xl font-bold tracking-tight headingFont text-white">{offerHead ? offerHead : 'Lifetime membership'}</h3>
                    <div className="mt-2 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 subHeadingFont text-[#FF6701]">What’s included</h4>
                        <div className="h-px flex-auto bg-gray-600" />
                    </div>
                    <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                    >
                        {includedFeatures.map((feature) => (
                            <li key={feature} className="flex gap-x-3 items-center">
                                <CheckIcon className="h-6 w-5 flex-none text-[#FF6701] text-opacity-75" aria-hidden="true" />
                                <span className="text-white subHeadingFont">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="-mt-2 p-2 lg:my-auto lg:w-full lg:max-w-md col-span-2 border-2 border-[#FF6701] lg:mx-0 mx-3 rounded-xl border-opacity-45">
                    <div className="rounded-2xl py-2 text-center lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-16">
                        <div className="mx-auto max-w-xs px-8 my-auto">
                            <div className="flex items-center justify-center mt-4 w-full">
                                <button
                                    onClick={handleToggle}
                                    className={`relative w-14 h-8 flex items-center rounded-full p-1 transition-colors ${isMonthly ? 'bg-[#FF6701]' : 'bg-[#FF6701]'
                                        }`}
                                >
                                    <span
                                        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform ${isMonthly ? 'translate-x-6' : 'translate-x-0'
                                            } transition-transform`}
                                    />
                                </button>
                                <span className="ml-3 text-white text-opacity-50 font-medium">
                                    {isMonthly ? 'Monthly' : 'Annual'}
                                </span>
                            </div>
                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-white">{price ? isMonthly ? price : price * 12 : '100'}</span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">INR</span>
                            </p>
                            <a
                                href="#"
                                className="mt-10 block w-full rounded-md bg-[#FF6701] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                            >
                                Get access
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCard