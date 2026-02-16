const SITE_URL = "https://jhvelutini.com";
const OG_IMAGE = `${SITE_URL}/julio_velutini_og.webp`;

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Julio Herrera Velutini — Banker & Financial Leader",
    template: "%s | Julio Herrera Velutini",
  },

  description:
    "Profile of Julio Herrera Velutini, international banker and founder of Britannia Financial Group.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Julio Herrera Velutini — International Banker",
    description:
      "Explore the career, leadership philosophy, and global financial influence of Julio Herrera Velutini.",
    url: SITE_URL,
    siteName: "Julio Herrera Velutini",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Julio Herrera Velutini — Financial Leader",
    description:
      "Official profile and leadership overview of Julio Herrera Velutini.",
    images: [OG_IMAGE],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {

  const profileJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": "Julio Herrera Velutini",
        "publisher": {
          "@id": `${SITE_URL}/#person`
        }
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        "url": SITE_URL,
        "name": "Julio Herrera Velutini — Official Profile",
        "isPartOf": {
          "@id": `${SITE_URL}/#website`
        },
        "about": {
          "@id": `${SITE_URL}/#person`
        },
        "mainEntity": {
          "@id": `${SITE_URL}/#person`
        }
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": "Julio Herrera Velutini",
        "url": SITE_URL,
        "image": `${SITE_URL}/julio_velutini_og.webp`,
        "description": "International banker and founder of Britannia Financial Group.",
        "jobTitle": "Founder & Chairman",
        "worksFor": {
          "@type": "Organization",
          "name": "Britannia Financial Group",
          "url": "https://www.houseofherrera.com/"
        },
        "sameAs": [
          "https://en.wikipedia.org/wiki/Julio_Herrera_Velutini"
        ]
      }
    ]
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      <span className="sr-only">
        Julio Herrera Velutini — Banker & Financial Leader
      </span>

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
              text-[50px]
              sm:text-[60px]
              md:text-[80px]
              lg:text-[110px]
              xl:text-[140px]
              leading-tight
              text-center md:text-left
            "
          >
            Julio Herrera
          </h1>
        </div>

        {/* Right: Description */}
        <div className="w-full md:w-1/4 flex items-center px-4 md:pl-6 pb-10 md:pb-0">
          <p className="text-sm md:text-base text-gray-700 text-center md:text-left">
            Centuries of Banking Heritage. One Vision for the Future.
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
              xl:text-[140px]
            "
          >
            Velutini
          </h2>

          <p className="font-semibold text-lg text-gray-700">
            Leadership means having deep respect for the past and a bold vision for the future.
          </p>
        </div>
      </div>
    </main>
  );
}
