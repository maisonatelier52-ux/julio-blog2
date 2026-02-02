import { ArrowRightCircle } from "lucide-react";

export default function Education() {
  return (
    <main className="font-raleway bg-white text-black min-h-screen w-full md:pr-12 pt-24 px-5 md:px-0 pb-16 md:pb-0">
      {/* ---------- CONTENT ROW ---------- */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-16">

        {/* Left: Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="overflow-hidden md:rounded-tr-xl md:rounded-br-xl w-full h-[400px] md:h-[500px]">
            <img
              src="/julio_small.jpg"
              alt="Education"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-2/3 flex flex-col justify-center gap-6 md:gap-8">

          {/* Big Heading with left line */}
          <h1 className="text-3xl sm:text-4xl md:text-[80px] lg:text-[120px] border-l-4 border-black pl-4 sm:pl-6 md:pl-8">
            Education & Certifications
          </h1>

          {/* Subheading with Lucide Icon */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-4 pl-4 sm:pl-6 md:pl-10">
            <ArrowRightCircle className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Academic Background
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 max-w-full md:max-w-2xl pl-4 sm:pl-6 md:pl-10 text-base sm:text-lg">
            I have pursued a rigorous academic path, combining formal education
            with professional certifications to strengthen my expertise and knowledge.
          </p>

          {/* Dotted Points */}
          <div className="flex flex-wrap gap-4 pl-4 sm:pl-6 md:pl-10 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border-2 rounded-full"></span>
              <span className="text-sm sm:text-base">Bachelor's Degree in Finance</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 border-2 rounded-full"></span>
              <span className="text-sm sm:text-base">MBA in International Business</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
