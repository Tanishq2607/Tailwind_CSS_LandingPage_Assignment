import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="bg-[#FBFBEC] h-[600px] font-sans relative overflow-hidden px-15">

            {/* Airplane dotted line decoration */}
            <div className="absolute top-10 left-80">
                <Image
                    src="/herosectionplane.png"
                    alt="Airplane path decoration"
                    width={470}
                    height={128}
                    className="object-contain"
                />
            </div>

            <div className="container mx-auto px-6 py-16  z-10">
                <div className="flex flex-col lg:flex-row gap-40 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 mt-[-80px]">
                        <div className="space-y-6">
                            <span className="text-[#07AC9E] text-sm font-semibold roboto tracking-[8px]">
                                Save Journey
                            </span>

                            <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight m-0.5">
                                Make Your{" "}
                                <span className="text-orange-500">Holiday</span>
                                <br />
                                Memorable
                            </h1>

                            <p className="text-gray-600 text-[18px] leading-relaxed max-w-[375px]">
                                Travor is one of the most popular Travel agency for those who want to explore the world and try to make adventure
                            </p>
                        </div>

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-lg font-semibold text-[15px] hover:cursor-pointer">
                            Plan Trip
                        </button>
                    </div>

                    {/* Right Content - Hero Image with White Cards */}
                    <div className="relative p-8 ml-7 mb-[-20px] mt-[-75px]">
                        {/* Boy Image */}
                        <Image
                            src="/herosectionboy.png"
                            alt="Happy traveler with luggage"
                            width={400}
                            height={500}
                            className="w-full max-w-[400px] h-auto"
                        />

                        {/* Trophy Card - Positioned at bottom left */}
                        <div className="w-[120px] relative bottom-25 right-16 bg-white shadow-lg rounded-lg flex items-center gap-2 px-3 py-2">
                            <Image
                                src="/herosectiontrophy.png"
                                alt="Best Tour Awards"
                                width={24}
                                height={24}
                            />
                            <span className="text-sm font-semibold text-gray-700">Best Tour Awards</span>
                        </div>

                        {/* Map Card - Positioned at top right */}
                        <div className="w-[150px] relative bottom-95 left-85 bg-white shadow-lg rounded-lg flex items-center gap-2 px-3 py-2">
                            <Image
                                src="/herosectiongooglemaps.png"
                                alt="Explore the world"
                                width={24}
                                height={24}
                            />
                            <div className="flex flex-col">
                                <p className="text-sm font-semibold text-gray-700">Explore</p>
                                <p className="text-xs text-gray-500 w-[95px]">Every corner of the world with us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}