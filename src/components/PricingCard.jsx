import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';

const PricingCard = ({ image, offerHead, includedFeatures, price }) => {
    const [isMonthly, setIsMonthly] = useState(false);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };
    return (
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-800 sm:mt-20 lg:mx-0 lg:flex col-span-8 lg:max-w-none bg-gray-900">
            <div className="mx-auto my-6 max-w-64">
                <div className="mx-auto px-4">
                    <img src={image} alt="Offer" className="rounded-2xl h-full border border-gray-700" />
                </div>
            </div>
            <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-5xl font-bold tracking-tight headingFont text-white">{offerHead ? offerHead : 'Lifetime membership'}</h3>
                <p className="text-base leading-7 text-transparent ">
                    {'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.'}
                </p>
                <div className="mt-2 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 subHeadingFont text-indigo-400">What’s included</h4>
                    <div className="h-px flex-auto bg-gray-600" />
                </div>
                <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                >
                    {includedFeatures.map((feature) => (
                        <li key={feature} className="flex gap-x-3 items-center">
                            <CheckIcon className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                            <span className="text-white subHeadingFont">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="-mt-2 p-2 lg:my-auto lg:w-full lg:max-w-md">
                <div className="rounded-2xl bg-gray-800 py-20 text-center ring-1 ring-inset ring-gray-100/5 lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8 my-auto">
                        <div className="flex items-center justify-center mt-4 w-full">
                            <button
                                onClick={handleToggle}
                                className={`relative w-14 h-8 flex items-center rounded-full p-1 transition-colors ${isMonthly ? 'bg-blue-600' : 'bg-gray-400'
                                    }`}
                            >
                                <span
                                    className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform ${isMonthly ? 'translate-x-6' : 'translate-x-0'
                                        } transition-transform`}
                                />
                            </button>
                            <span className="ml-3 text-gray-600 font-medium">
                                {isMonthly ? 'Monthly' : 'Annual'}
                            </span>
                        </div>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                            <span className="text-5xl font-bold tracking-tight text-white">{price ? isMonthly ? price : price * 12 : '100'}</span>
                            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">INR</span>
                        </p>
                        <a
                            href="#"
                            className="mt-10 block w-full rounded-md bg-indigo-400 px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                        >
                            Get access
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCard