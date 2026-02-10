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
           The Best in International Banking - Business Ventures
          </h1>

          {/* Subheading with Lucide Icon */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-4 pl-4 sm:pl-6 md:pl-10">
            <ArrowRightCircle className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Building Ethical Banking and International Wealth Solutions
            </h2>
          </div>

          {/* Description */}
          <div className="text-gray-700 max-w-full md:max-w-2xl pl-4 sm:pl-6 md:pl-10 text-base sm:text-sm">
            <p>
                Julio started Bancredito International Bank & Trust Corporation in 2008. It was a new kind of financial platform that put eco-friendliness, great customer service, and new ideas first. This was a turning point in his career. 
            </p>

            <p className="pt-3">
                After that, he was in charge of setting up Britannia Wealth Management and Britannia Financial Group, both of which are based in Geneva. These companies want to offer clients from all over the world a full range of private banking, investing, and asset management services.
            </p>

            <p className="pt-3">
                Because of his leadership, these companies have become well-known names in the world of international finance. They have a great reputation for their work and for their commitment to ethical banking and giving each customer personal attention.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
