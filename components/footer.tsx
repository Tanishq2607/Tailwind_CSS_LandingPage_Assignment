import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-50 px-[95px] font-sans">
            <div className="max-w-7xl mx-auto  py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    <div className="flex-1 lg:max-w-md ml-[10px]">
                        <div className="flex items-center space-x-2 mb-4">
                            <Image
                                src={'/logo.png'}
                                alt="BrandLogo"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="text-gray-600 text-sm mb-6 max-w-[210px]">
                            Book your trip in minute, get full Control for much longer.
                        </p>
                        <div className="flex items-center space-x-2">
                            <Link
                                href="#"
                            >
                                <Image
                                    src={"/facebook.png"}
                                    alt="Facebook"
                                    width={50}
                                    height={50}
                                    className='hover:cursor-pointer'
                                />
                            </Link>
                            <Link
                                href="#"
                            >
                                <Image
                                    src={"/instagram.png"}
                                    alt="instagram"
                                    width={50}
                                    height={50}
                                    className='hover:cursor-pointer'
                                />
                            </Link>
                            <Link
                                href="#"
                            >
                                <Image
                                    src={"/twitter.png"}
                                    alt="twitter"
                                    width={50}
                                    height={50}
                                    className='hover:cursor-pointer'
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-22 ml-[70px]">
                            <div className="flex flex-col ">
                                <h3 className="text-gray-900 font-semibold text-lg mb-4">Company</h3>
                                <div className="flex flex-col space-y-3">
                                    <Link href="/about" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                                        About
                                    </Link>
                                    <Link href="/careers" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                                        Careers
                                    </Link>
                                    <Link href="/logistics" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                                        Logistic
                                    </Link>
                                    <Link href="/privacy" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                                        Privacy & Policy
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-gray-900 font-semibold text-lg mb-4">Contact</h3>
                                <div className="flex flex-col space-y-3">
                                    <Link href="/help" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                                        Help/FAQ
                                    </Link>
                                    <Link href="/press" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                                        Press
                                    </Link>
                                    <Link href="/affiliates" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                                        Affiliates
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-gray-900 font-semibold text-lg mb-4">More</h3>
                                <div className="flex flex-col space-y-3">
                                    <Link href="/press-centre" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                                        Press Centre
                                    </Link>
                                    <Link href="/blog" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                                        Our Blog
                                    </Link>
                                    <Link href="/low-fare-tips" className="text-gray-600 hover:text-orange-500 text-sm transition-colors duration-200">
                                        Low fare tips
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-gray-500 text-sm">
                            Copyright, Trabook 2022. All rights reserved.
                        </p>
                        <Link
                            href="/terms"
                            className="text-gray-500 hover:text-orange-500 text-sm transition-colors duration-200"
                        >
                            Terms & Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer