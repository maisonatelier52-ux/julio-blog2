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
          <h1 className="text-3xl sm:text-4xl md:text-[30px] lg:text-[50px] border-l-4 border-black pl-4 sm:pl-6 md:pl-8">
            A Lineage Based on Financial Leadership - Family Legacy and Education
          </h1>

          {/* Subheading with Lucide Icon */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-4 pl-4 sm:pl-6 md:pl-10">
            <ArrowRightCircle className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              A Heritage of Global Finance and International Education
            </h2>
          </div>

          {/* Description */}
          <div className="text-gray-700 max-w-full md:max-w-2xl pl-4 sm:pl-6 md:pl-10 text-base sm:text-sm">
            <p>
                Julio Herrera Velutini is part of a long line of people who have worked in finance that goes back to the early days of European banking and trade. His family's influence on global finance goes back generations and has shaped institutions that have been very important in investment and financial markets around the world.
            </p>

            <p className="pt-3">
                Julio went to study in international schools all over Europe, including some of the best ones in the UK and Switzerland. This gave him a global perspective from the start. He got his bachelor's degree in 1990, which started him on a professional path that was based on both hard work and a big picture view.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
