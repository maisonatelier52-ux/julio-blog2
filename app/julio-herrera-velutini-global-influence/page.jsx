import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

const SITE_URL = "https://jhvelutini.com";
const PAGE_URL = `${SITE_URL}/julio-herrera-velutini-global-influence/`;
const OG_IMAGE = `${SITE_URL}/julio_small.jpg`;

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Global Impact — Julio Herrera Velutini | International Finance",

  description:
    "Learn about Julio Herrera Velutini’s global leadership in banking, spanning multiple continents and innovation in international finance.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "Global Impact — Julio Herrera Velutini | Modern Banking Leadership",
    description:
      "Discover Julio Herrera Velutini’s global influence in the banking world and his approach to modern international finance.",
    url: PAGE_URL,
    siteName: "Julio Herrera Velutini",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini Global Impact",
      },
    ],
    type: "article",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Global Impact — Julio Herrera Velutini",
    description:
      "Julio Herrera Velutini’s global leadership and innovation in international banking.",
    images: [OG_IMAGE],
  },
};

export default function GlobalImpact() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline:
          "A Real Global Citizen in the Financial World - Global Impact",
        description:
          "Julio Herrera Velutini’s global leadership in banking and financial institutions, integrating heritage with innovation across continents.",
        image: OG_IMAGE,
        author: {
          "@type": "Person",
          "@id": `${SITE_URL}/#person`,
          name: "Julio Herrera Velutini",
        },
        publisher: {
          "@type": "Organization",
          name: "Julio Herrera Velutini",
          logo: {
            "@type": "ImageObject",
            url: OG_IMAGE,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": PAGE_URL,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Julio Herrera Velutini",
        url: SITE_URL,
        jobTitle: "Founder & Chairman",
        worksFor: {
          "@type": "Organization",
          name: "Britannia Financial Group",
        },
      },
    ],
  };

  return (
    <main className="font-raleway bg-white text-black min-h-screen w-full md:pr-12 pt-24 px-5 md:px-0 pb-16 md:pb-0">
      {/* ---------- JSON-LD ---------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* ---------- CONTENT ROW ---------- */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12 md:gap-16">
        {/* Left: Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <div className="overflow-hidden md:rounded-tr-xl md:rounded-br-xl w-full h-[400px] md:h-[500px] relative">
            <Image
              src="/julio_small.jpg"
              alt="Education"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-2/3 flex flex-col justify-center gap-6 md:gap-8">
          {/* Big Heading with left line */}
          <h1 className="text-3xl sm:text-4xl md:text-[30px] lg:text-[50px] border-l-4 border-black pl-4 sm:pl-6 md:pl-8">
            A Real Global Leadership in the Financial World - Global Impact
          </h1>

          {/* Subheading with Lucide Icon */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-4 pl-4 sm:pl-6 md:pl-10">
            <ArrowRightCircle className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Global Leadership in Modern Banking
            </h2>
          </div>

          {/* Description */}
          <div className="text-gray-700 max-w-full md:max-w-2xl pl-4 sm:pl-6 md:pl-10 text-base sm:text-sm">
            <p>
              Julio has a lot of power now that he is in charge of banks and other financial institutions on several continents. He has a truly global view because he has traveled a lot for both school and work. So, it's clear that global banking needs a lot of different skills and points of view.
            </p>

            <p className="pt-3">
              He has demonstrated throughout his career that genuine innovation in finance can be realized by integrating heritage with adaptation, leadership with accountability, and tradition with insight. Julio Herrera Velutini has shown these traits throughout his whole career.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}