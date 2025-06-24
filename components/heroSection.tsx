import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#FBFBEC] min-h-[600px] lg:h-[600px] font-sans relative overflow-hidden px-4 sm:px-8 lg:px-[70px]">
      <div className="absolute top-6 left-80 hidden lg:block">
        <Image
          src="/herosectionplane.png"
          alt="Airplane path decoration"
          width={650}
          height={0}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-6 py-8 lg:py-16 relative z-10 min-h-[600px] lg:h-full">
        <div className="flex flex-col lg:flex-row items-center min-h-full">
          <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left lg:pr-10">
            <div className="space-y-4 lg:space-y-6">
              <span className="text-[#07AC9E] text-sm font-semibold tracking-[6px] lg:tracking-[8px] block">
                Save Journey
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-[55px] font-bold text-gray-900 leading-tight">
                Make Your <span className="text-orange-500">Holiday</span>
                <br />
                Memorable
              </h1>

              <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 lg:max-w-[375px]">
                Travor is one of the most popular Travel agency for those who
                want to explore the world and try to make adventure
              </p>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white px-6 lg:px-8 py-3 rounded-lg font-semibold">
              Plan Trip
            </button>
          </div>
          <div className="flex-1 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative bottom-0 lg:bottom-[50px] right-0 lg:right-[70px]">
              <Image
                src="/herosectionboy.png"
                alt="Happy traveler with luggage"
                width={430}
                height={500}
                className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[430px] h-auto"
              />
              <div className="absolute bottom-6 lg:bottom-19 -left-1 lg:-left-3 transform -translate-x-1/2 translate-y-1/2 w-[120px] lg:w-[140px] bg-white shadow-lg rounded-lg flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-2">
                <Image
                  src="/herosectiontrophy.png"
                  alt="Best Tour Awards"
                  width={45}
                  height={45}
                  className="lg:w-[40px] lg:h-[40px]"
                />
                <span className="text-xs lg:text-sm font-semibold text-gray-700">
                  Best Tour Awards
                </span>
              </div>
              <div className="absolute top-16 lg:top-40 -right-3 lg:-right-6 transform translate-x-1/2 -translate-y-1/2 w-[160px] lg:w-[200px] bg-white shadow-lg rounded-lg flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-2">
                <Image
                  src="/herosectiongooglemaps.png"
                  alt="Explore the world"
                  width={45}
                  height={45}
                  className="lg:w-[40px] lg:h-[40px]"
                />
                <div className="flex flex-col">
                  <p className="text-xs lg:text-sm font-semibold text-gray-700">
                    Explore
                  </p>
                  <p className="text-xs lg:text-sm text-gray-500">
                    Every corner of the world with us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
