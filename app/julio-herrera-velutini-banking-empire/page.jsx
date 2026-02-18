import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

const SITE_URL = "https://www.jhvelutini.com";
const PAGE_URL = `${SITE_URL}/julio-herrera-velutini-banking-empire/`;
const OG_IMAGE = `${SITE_URL}/julio_small.jpg`;

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Julio Herrera Velutini |  The Best in International Banking",

  description:
    "Explore the international banking ventures of Julio Herrera Velutini, including Bancredito International Bank & Trust and Britannia Financial Group.",

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Julio Herrera Velutini Banking Empire — International Finance Leadership",
    description:
      "Discover how Julio Herrera Velutini built leading private banking and wealth management institutions serving global clients.",
    url: PAGE_URL,
    siteName: "Julio Herrera Velutini",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Julio Herrera Velutini Banking Empire",
      },
    ],
    type: "article",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Julio Herrera Velutini Banking Empire",
    description:
      "International private banking, wealth management, and ethical financial leadership.",
    images: [OG_IMAGE],
  },
};

export default function BankingEmpire() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}#article`,
        headline: "The Best in International Banking - Business Ventures",
        description:
          "An overview of the international banking ventures led by Julio Herrera Velutini, including Bancredito International Bank & Trust and Britannia Financial Group.",
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
            The Best in International Banking <span className="hidden sm:inline">-</span> Business Ventures
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
              Julio started Bancredito International Bank & Trust Corporation in
              2008. It was a new kind of financial platform that put
              eco-friendliness, great customer service, and new ideas first.
              This was a turning point in his career.
            </p>

            <p className="pt-3">
              After that, he was in charge of setting up Britannia Wealth
              Management and Britannia Financial Group, both of which are based
              in Geneva. These companies want to offer clients from all over
              the world a full range of private banking, investing, and asset
              management services.
            </p>

            <p className="pt-3">
              Because of his leadership, these companies have become well-known
              names in the world of international finance. They have a great
              reputation for their work and for their commitment to ethical
              banking and giving each customer personal attention.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}