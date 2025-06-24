export default function SearchComponent() {
    return (
        <div className="bg-white shadow-lg font-sans w-[830px] rounded-lg mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 flex flex-col sm:flex-row">
            {/* Destination Field */}
            <div className="flex-1 p-4 sm:p-6 border-b sm:border-b-0 border-gray-200">
                <label className="flex  text-sm font-semibold text-gray-700 mb-2 cursor-pointer">
                    Destination 
                    <img src="/downarrow.png" alt="" className="w-3 h-2 mt-[7px] ml-[5px]" />
                </label>
                <input
                    type="text"
                    placeholder="Search Location"
                    className="w-full text-gray-600 text-sm placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
                />
            </div>

            {/* Date Field */}
            <div className="flex-1 p-4 sm:p-6 border-b sm:border-b-0 border-gray-200">
                <label className="flex text-sm font-semibold text-gray-700 mb-2 cursor-pointer">
                    Date
                    <img src="/downarrow.png" alt="" className="w-3 h-2 mt-[7px] ml-[5px]" />
                </label>
                <input
                    type="text"
                    placeholder="Type Date"
                    className="w-full text-gray-600 text-sm placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
                />
            </div>

            {/* Guest Field */}
            <div className="flex-1 p-4 sm:p-6 border-b sm:border-b-0 border-gray-200">
                <label className="flex text-sm font-semibold text-gray-700 mb-2 cursor-pointer">
                    Guest
                    <img src="/downarrow.png" alt="" className="w-3 h-2 mt-[7px] ml-[5px]" />
                </label>
                <input
                    type="text"
                    placeholder="Number of guest"
                    className="w-full text-gray-600 text-sm placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
                />
            </div>

            {/* Explore Now Button */}
            <div className="flex items-center justify-center p-4 sm:p-6">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm transition-colors duration-200 w-full sm:w-auto whitespace-nowrap cursor-pointer">
                    Explore Now
                </button>
            </div>
        </div>
    );
}