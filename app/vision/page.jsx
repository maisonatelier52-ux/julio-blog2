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
            Taking Control and Having a Goal - Vision
          </h1>

          {/* Subheading with Lucide Icon */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-4 pl-4 sm:pl-6 md:pl-10">
            <ArrowRightCircle className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Leading with Values
            </h2>
          </div>

          {/* Description */}
          <div className="text-gray-700 max-w-full md:max-w-2xl pl-4 sm:pl-6 md:pl-10 text-base sm:text-sm">
            <p>
                Julio Herrera Velutini has said that we need to look at banking in a bigger way than just balance sheets and being the biggest player in the market. Moral values, growth that doesn't hurt the environment in the long run, and making a difference in society are all part of this way of thinking. He thought that being morally responsible and making money were the most important things in life. It makes the people who work in finance think about more than just making money; it also makes them think about how their actions will affect the community.
            </p>

            <p className="pt-3">
                People in global finance look up to him as a leader because he uses long-lasting, smart strategies that help businesses, investors, and communities all at the same time. His work on responsible banking projects shows that banks can do more than just make money; they can also help people make real progress.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
