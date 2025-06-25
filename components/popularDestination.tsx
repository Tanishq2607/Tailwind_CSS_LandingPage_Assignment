"use client";
import Image from "next/image";

const destinations = [
    {
        id: 1,
        title: "Madrid",
        country: "Spain",
        image: "/madrid.png",
        price: "$950",
        offerPrice: "$850",
    },
    {
        id: 2,
        title: "Loga Sea",
        country: "German",
        image: "/logasea.png",
        price: "$950",
        offerPrice: "$850",
    },
    {
        id: 3,
        title: "Desert",
        country: "UK",
        image: "/desert.png",
        price: "$950",
        offerPrice: "$850",
    },
    {
        id: 4,
        title: "Falling",
        country: "India",
        image: "/falling.png",
        price: "$950",
        offerPrice: "$850",
    },
];

export default function PopularDestination() {
    return (
        <section className="py-10 font-sans px-4 md:px-10 lg:px-23 bg-[#F7F8FC] my-[50px]">
            <p className="text-sm text-[#07AC9E] font-medium">Most Attractive</p>
            <div className="flex justify-between items-center flex-wrap gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Destination</h2>
                <div className="flex gap-4 text-gray-900 text-sm">
                    <button className="px-4 py-1 bg-[#07AC9E] text-white rounded-lg cursor-pointer">Beach</button>
                    <button className="px-4 py-1 hover:text-teal-600 cursor-pointer">Waterfall</button>
                    <button className="px-4 py-1 hover:text-teal-600 cursor-pointer">Mountains</button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {destinations.map((item) => (
                    <div 
                    key={item.id} 
                    className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transform hover:scale-100 hover:-translate-y-2 transition-all duration-300 ease-in-out"
                  >
                        <div className="h-48 relative">
                            <Image src={item.image} alt={item.title} fill className="object-cover " />
                        </div>
                        <div className="p-4 space-y-3">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-sans font-semibold text-gray-900">{item.title}</h3>
                                <div className="flex items-center gap-1">
                                    <Image src="/popularDestinationStar.png" alt="rating" width={14} height={14} />
                                    <span className="text-sm font-medium text-gray-700">4.8</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-gray-500 text-sm">

                                <div className="flex items-center gap-1">
                                    <Image src="/popularDestinationLocation.png" alt="location" width={14} height={14} />
                                    {item.country}
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-gray-500 line-through text-sm">{item.price}</span>
                                    <span className="text-orange-500 bg-orange-100 p-1 rounded-lg font-semibold">{item.offerPrice}</span>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
