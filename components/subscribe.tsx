import Image from "next/image";

export default function SubscribeSection() {
    return (
        <section className="bg-gray-100 py-9 px-4 mt-[50px] font-sans">

            <div className="relative bg-orange-500 rounded-2xl px-8 py-10 overflow-hidden shadow-lg max-w-5xl h-[300px] mx-auto">

                <div className="absolute bottom-0 left-0 w-24 sm:w-80">
                    <Image src="/subscribeCircles.png" alt="Circles" width={560} height={120} className="object-contain" />
                </div>

                <div className="absolute top-3 -right-4 w-12 sm:w-40">
                    <Image src="/subscribeTrees.png" alt="Trees" width={120} height={80} className="object-contain" />
                </div>

                <div className="flex flex-col items-center justify-center text-center space-y-6 relative z-10">
                    <div className="text-white text-lg sm:text-[35px] font-semibold leading-relaxed text-center">
                        <p>Subscribe and get exclusive</p>
                        <p>deals & offer</p>
                    </div>

                    <div className="relative w-full max-w-lg">
                        <input
                            type="email"
                            placeholder="Enter your mail"
                            className="w-full py-3 pl-4 pr-28 rounded-lg text-sm text-gray-700 placeholder-gray-500 bg-white focus:outline-none shadow-sm"
                        />
                        <button className="absolute top-0.5 right-0.5 h-[calc(100%-0.25rem)] px-5 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 cursor-pointer transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}