"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-25 px-4 md:px-10 lg:px-[230px] bg-[#F7F8FC] flex flex-col lg:flex-row items-center justify-between gap-15">
      <div className="flex flex-col items-start max-w-[320px] space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          What people say <span className="text-orange-500">about us.</span>
        </h2>
        <p className="text-gray-500 text-base">
          Our Clients send us bunch of smiles with our services and we love
          them.
        </p>

        <div className="flex gap-4 mt-4">
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer transition">
            &lt;
          </button>
          <button className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 cursor-pointer transition">
            &gt;
          </button>
        </div>
      </div>

      <div className="relative flex flex-col items-start ml-3">
        <div className="bg-white rounded-xl shadow p-6 w-full max-w-[460px] h-[190px] md:h-[190px] sm:h-[160px] absolute left-10 top-28 opacity-50 z-0 flex flex-col justify-end">
          <div>
            <h4 className="text-gray-400 text-base sm:text-lg">Chris Thomas</h4>
            <p className="text-gray-300 text-sm">CEO of Red Button</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md relative z-10 mt-6">
          <div className="absolute -top-6 -left-4">
            <Image
              src="/aboutUsBoyImage.png"
              alt="Mike Taylor"
              width={48}
              height={48}
              className="rounded-full border-2 border-white"
            />
          </div>

          <p className="text-gray-700 text-sm leading-relaxed mt-6">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>

          <div className="mt-4">
            <h4 className="font-semibold text-gray-800">Mike taylor</h4>
            <p className="text-gray-500 text-sm">Lahore, Pakistan</p>
          </div>
        </div>

        <div className="relative w-full h-full">
          <Image
            src="/aboutUsAirplane.png"
            alt="airplane"
            width={100}
            height={100}
            className="absolute bottom-20 sm:bottom-38 right-[-50px] sm:right-[-70px] w-16 sm:w-24 md:w-28"
          />
        </div>
      </div>
    </section>
  );
}
