export default function Home() {
  return (
    <main
      className="
        font-raleway
        relative
        w-full
        bg-white
        text-black

        /* Mobile */
        min-h-screen
        px-5
        pt-12
        overflow-y-auto

        /* Desktop */
        md:h-screen
        md:overflow-hidden
        md:px-12
        md:pt-1
      "
    >
      {/* ---------- ROW 1 ---------- */}
      <div className="flex flex-col md:flex-row md:h-1/2 items-center md:items-stretch">

        {/* Left: Heading */}
        <div className="relative w-full md:w-3/4 flex items-center justify-center py-12 md:py-0">
  
          {/* Short vertical divider */}
          <span
            className="
              hidden md:block
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              h-50
              w-[3px]
              bg-black
            "
          />

          <h1
            className="
              text-[72px]
              sm:text-[100px]
              md:text-[140px]
              lg:text-[180px]
              xl:text-[210px]
              leading-tight
              text-center md:text-left
            "
          >
            Personal
          </h1>
        </div>

        {/* Right: Description */}
        <div className="w-full md:w-1/4 flex items-center px-4 md:pl-6 pb-10 md:pb-0">
          <p className="text-sm md:text-base text-gray-700 text-center md:text-left">
            This section contains curated works and selected highlights.
          </p>
        </div>
      </div>

      {/* ---------- ROW 2 ---------- */}
      <div className="flex flex-col-reverse md:flex-row md:h-2/5 items-center">

        {/* Image */}
        <div className="w-full md:max-w-xl p-4 md:p-10">
          <img
            src="/julio.jpg"
            alt="Julio Herrera"
            className="w-full h-[260px] md:h-full rounded-xl shadow-xl object-cover"
          />
        </div>

        {/* Right: Heading + Description (CENTERED) */}
        <div className="flex flex-col items-center justify-center text-center px-4 pb-20">
          <h2
            className="
              text-[48px]
              sm:text-[64px]
              md:text-[70px]
              lg:text-[100px]
              xl:text-[180px]
            "
          >
            Portfolio
          </h2>

          <p className="font-semibold text-lg text-gray-700">
            Leadership means having deep respect for the past and a bold vision for the future.
          </p>
        </div>
      </div>
    </main>
  );
}
