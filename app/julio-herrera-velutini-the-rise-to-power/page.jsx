import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

const SITE_URL = "https://jhvelutini.com";
const PAGE_URL = `${SITE_URL}/julio-herrera-velutini-the-rise-to-power/`;
const OG_IMAGE = `${SITE_URL}/julio_small.jpg`;

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: "From Tradition to Transformation — Julio Herrera Velutini | Rise in Banking",

  description:
    "Explore the rise of Julio Herrera Velutini, bridging centuries of banking tradition with modern financial innovation.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title: "From Tradition to Transformation — Julio Herrera Velutini",
    description:
      "Discover how Julio Herrera Velutini combined banking tradition with modern innovation to rise to global prominence.",
    url: PAGE_URL,
    siteName: "Julio Herrera Velutini",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini Rise",
      },
    ],
    type: "article",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "From Tradition to Transformation — Julio Herrera Velutini",
    description:
      "Julio Herrera Velutini’s rise in banking, blending heritage with modern financial innovation.",
    images: [OG_IMAGE],
  },
};

export default function TheRise() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "From Tradition to Transformation: The Rise of Julio Herrera Velutini",
        description:
          "Julio Herrera Velutini’s journey from early finance roles to global banking leadership, combining heritage with innovation.",
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
            From Tradition to Transformation: The Rise of Julio Herrera Velutini
          </h1>

          {/* Subheading with Lucide Icon */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-4 pl-4 sm:pl-6 md:pl-10">
            <ArrowRightCircle className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              A Legacy of Tradition and Innovation in Banking
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 max-w-full md:max-w-2xl pl-4 sm:pl-6 md:pl-10 text-base sm:text-sm">
            In a world where money moves as fast as thoughts, few names capture both the past and the future like Julio Herrera Velutini. He is a banker whose tale connects centuries of tradition with the needs of the future. His rise from entry-level jobs in finance to the top of the world shows how banking has changed to keep up with the times and how successful he has been.
          </p>
        </div>
      </div>
    </main>
  );
}
