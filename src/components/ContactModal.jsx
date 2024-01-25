import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

export default function MyModal({ isOpen, setIsOpen }) {
    function closeModal() {
        setIsOpen(false)
    }

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto bg-transparent">
                        <div className="flex min-h-full items-center justify-center p-4 text-center bg-transparent">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black border-2 border-[#FF6701] p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-[#FF6701] text-opacity-85 bg-transparent"
                                    >
                                        Get in Touch
                                    </Dialog.Title>
                                    <div className="mt-2 bg-transparent">
                                        <p className="text-sm text-white bg-transparent">
                                            Provide us with your contact details and we will reach out to you.
                                        </p>
                                    </div>
                                    <div className="mt-2 bg-transparent">
                                        <p className="text-sm text-white bg-transparent">
                                            Name
                                        </p>
                                        <input
                                            type='text'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className='py-2 px-4 border-2 border-[#FF6701] rounded-md bg-transparent'
                                            placeholder='Enter your name' />
                                    </div>
                                    <div className="mt-2 bg-transparent">
                                        <p className="text-sm text-white bg-transparent">
                                            Phone
                                        </p>
                                        <input
                                            type='text'
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className='py-2 px-4 border-2 border-[#FF6701] rounded-md bg-transparent'
                                            placeholder='Enter your name' />
                                    </div>
                                    <div className="mt-2 bg-transparent">
                                        <p className="text-sm text-white bg-transparent">
                                            Email
                                        </p>
                                        <input
                                            type='text'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className='py-2 px-4 border-2 border-[#FF6701] rounded-md bg-transparent'
                                            placeholder='Enter your email' />
                                    </div>

                                    <div className="mt-4 bg-transparent">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-[#FF6701] hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Join Us
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

MyModal.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func
}
