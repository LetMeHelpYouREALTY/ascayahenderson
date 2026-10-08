import Link from "next/link";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeRealScout from "@/components/realscout/OfficeRealScout";
import {
  ctaPhone,
  googleReviewsUrl,
  hoursSummary,
  maps,
  nap,
} from "@/lib/contact";
import { photos } from "@/lib/media";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { ascayaRelatedLinks, type AscayaGuide } from "@/lib/ascaya-guides";

const ASCAYA_ADDRESS = "1 Ascaya Blvd, Henderson, NV 89012";
const ASCAYA_MAP =
  "https://maps.google.com/maps?q=1+Ascaya+Blvd+Henderson+NV+89012&z=14&output=embed";
const ASCAYA_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=1+Ascaya+Blvd,+Henderson,+NV+89012";

/**
 * Pin from Ascaya's own directions link on ascaya.com/amenities,
 * checked 2026-10-08.
 */
const ASCAYA_GEO = {
  latitude: 35.9977006,
  longitude: -115.0657846,
};

type AscayaGuidePageProps = {
  guide: AscayaGuide;
};

export default function AscayaGuidePage({ guide }: AscayaGuidePageProps) {
  const related = ascayaRelatedLinks(guide.id);
  const breadcrumb = generateBreadcrumbSchema(
    guide.id === "community"
      ? [
          { name: "Home", url: "/" },
          { name: "Ascaya Henderson", url: guide.path },
        ]
      : [
          { name: "Home", url: "/" },
          { name: "Ascaya Henderson", url: "/neighborhoods/ascaya" },
          { name: guide.h1, url: guide.path },
        ],
  );
  const faqSchema = generateFAQSchema(guide.faqs);
  const placeSchema = guide.includePlace
    ? {
        "@context": "https://schema.org",
        "@type": "Place",
        name: "Ascaya",
        description: guide.lede,
        address: {
          "@type": "PostalAddress",
          streetAddress: "1 Ascaya Blvd",
          addressLocality: "Henderson",
          addressRegion: "NV",
          postalCode: "89012",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: ASCAYA_GEO.latitude,
          longitude: ASCAYA_GEO.longitude,
        },
        containedInPlace: {
          "@type": "City",
          name: "Henderson",
          address: {
            "@type": "PostalAddress",
            addressRegion: "NV",
            addressCountry: "US",
          },
        },
      }
    : null;

  return (
    <main id="main-content" className="pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {placeSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
        />
      ) : null}
      <div className="container mx-auto px-4">
        <article className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm text-slate-500">
            <Link href="/" className="text-blue-700 hover:underline">
              Home
            </Link>
            {" / "}
            <Link
              href="/neighborhoods/ascaya"
              className="text-blue-700 hover:underline"
            >
              Ascaya Henderson
            </Link>
          </p>
          <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            {guide.h1}
          </h1>
          <HeadingPhoto
            path={guide.path}
            photo={{
              ...photos.henderson,
              alt: "Henderson park and mountain views in the Ascaya Henderson service area",
            }}
            heading={guide.h1}
          />
          <p className="mb-8 text-xl text-slate-700">{guide.lede}</p>
          <CtaActions variant="onLight" bookLabel="Book an Ascaya tour" />
          <div className="mb-12 mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={ASCAYA_DIRECTIONS}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Directions to Ascaya
            </a>
            <a
              href={maps.directionsUrl}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Directions to the office
            </a>
            <a
              href={googleReviewsUrl}
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              View Google Reviews
            </a>
          </div>

          <OfficeRealScout heading="Which Ascaya Henderson homes are for sale?" />

          {guide.sections.map((section) => (
            <section key={section.heading} className="mb-12">
              <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
                {section.heading}
              </h2>
              <p className="text-lg text-slate-700">{section.answer}</p>
              {section.points ? (
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {section.points.map((point) => (
                    <div
                      key={point.heading}
                      className="rounded-xl border border-slate-200 p-5"
                    >
                      <h3 className="mb-2 text-lg font-bold text-slate-900">
                        {point.heading}
                      </h3>
                      <p className="text-sm text-slate-600">{point.body}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}

          <section className="mb-12" aria-labelledby="ascaya-faq-heading">
            <h2
              id="ascaya-faq-heading"
              className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl"
            >
              Ascaya Henderson questions
            </h2>
            <div className="space-y-6">
              {guide.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="mb-2 text-lg font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12" aria-labelledby="ascaya-map-heading">
            <h2
              id="ascaya-map-heading"
              className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl"
            >
              Where do you meet for an Ascaya tour?
            </h2>
            <p className="mb-4 text-lg text-slate-700">
              Ascaya tours meet at {ASCAYA_ADDRESS}. Paperwork and weekday
              meetings are at {nap.fullAddress}. Call {ctaPhone.display}.{" "}
              {hoursSummary}.
            </p>
            <iframe
              title="Map of Ascaya at 1 Ascaya Blvd, Henderson, Nevada"
              src={ASCAYA_MAP}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full rounded-xl border-0"
            />
            <p className="mt-4 text-sm text-slate-600">
              {nap.name}. License {nap.license}. {nap.street}, {nap.city},{" "}
              {nap.state} {nap.zip}. {ctaPhone.display}.
            </p>
          </section>

          <section className="mb-12" aria-labelledby="ascaya-related-heading">
            <h2
              id="ascaya-related-heading"
              className="mb-4 text-2xl font-bold text-slate-900 md:text-3xl"
            >
              More Ascaya Henderson pages
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-700 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/listings"
                  className="text-blue-700 hover:underline"
                >
                  Ascaya and valley homes for sale
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-700 hover:underline">
                  Contact Dr. Jan Duffy
                </Link>
              </li>
            </ul>
          </section>

          <p className="text-sm text-slate-500">
            Community facts checked against ascaya.com on October 8, 2026.
            Prices, availability, and views change. Equal Housing Opportunity.
          </p>
        </article>
      </div>
    </main>
  );
}
