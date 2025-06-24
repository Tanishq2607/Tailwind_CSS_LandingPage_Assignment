export default function ThingsToDoSection() {
    return (
        <section className="py-16 px-[230px] mt-[70px] font-sans bg-[#F7F8FC]">
            <div className="container mx-auto max-w-6xl">

                <div className="text-center mb-5">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Things you need <span className="text-orange-500">to do</span>
                    </h2>
                    <p className="text-gray-600 text-base lg:text-lg w-full max-w-[370px] px-4 mx-auto">
                        We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">

                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="mb-4">
                            <img
                                src="/signUp.png"
                                alt="Sign up icon"
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Sign Up</h3>
                        <p className="text-gray-600 text-[13px] leading-relaxed">
                            Complete all the work associated with planning and processing
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="mb-4">
                            <img
                                src="/worthOfMoney.png"
                                alt="Money icon"
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Worth of Money</h3>
                        <p className="text-gray-600 text-[12px] leading-relaxed">
                            After successful access then book from exclusive deals & pricing
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative">

                        <div className="absolute -top-25 right-4">
                            <img
                                src="thingToDoAirplane.png"
                                alt="Airplane decoration"
                                className="w-28 h-auto lg:w-35"
                            />
                        </div>
                        <div className="mb-4">
                            <img
                                src="/excitingTravel.png"
                                alt="Travel icon"
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Exciting Travel</h3>
                        <p className="text-gray-600 text-[13px] leading-relaxed">
                            Start and explore a wide range of exciting travel experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}