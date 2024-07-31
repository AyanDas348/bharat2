import { logo } from '../assets'

import { Instagram } from 'lucide-react'
const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="#" className="flex items-center">
                                <img src={logo} className="h-20 w-20 me-3" alt="Bharat Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">Bharat&apos;s Fitness Den</span>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Trainers</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Schedules</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline ">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-evenly">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">IAMPIX™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://www.instagram.com/bharatfiitnessden/" className="text-white dark:hover:text-white ms-5 flex items-center gap-x-3 cursor-pointer">
                                <Instagram className='text-white'/>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer