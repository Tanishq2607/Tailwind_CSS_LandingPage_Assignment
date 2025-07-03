import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="px-21 py-4 sticky top-0 z-[100] font-sans bg-[#FBFBEC]">
            <div className="container mx-auto flex items-center justify-between">
              
                <div className="flex items-center hover:cursor-pointer">
                    <Image
                        src={'/logo.png'}
                        alt="BrandLogo"
                        width={150}
                        height={150}
                    />
                </div>

               
                <div className="hidden md:flex">
                    <ul className="flex items-center space-x-8">
                        <li>
                            <a href="#" className="text-[#080707] hover:text-orange-500 font-medium transition-colors duration-200">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#080707] hover:text-orange-500 font-medium transition-colors duration-200">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#080707] hover:text-orange-500 font-medium transition-colors duration-200">
                                Destination
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#080707] hover:text-orange-500 font-medium transition-colors duration-200">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[#080707] hover:text-orange-500 font-medium transition-colors duration-200">
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-[#FBFBEC] text-[#080707] px-10 py-2 rounded-lg border border-orange-500 hover:bg-orange-500 hover:text-white hover:cursor-pointer font-medium transition-colors duration-200">
                        LogIn
                    </button>
                </div>


            </div>
        </nav>
    );
}