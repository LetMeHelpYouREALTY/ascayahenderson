import MlsDisclaimer from "@/components/shared/MlsDisclaimer";
import { ctaPhone, realscout } from "@/lib/contact";

/**
 * Office MLS grid. The RealScout script is loaded once in the root layout.
 * Render the custom element as HTML so React does not remount it.
 */
type OfficeRealScoutProps = {
  heading?: string;
};

export default function OfficeRealScout({
  heading = "Office listings",
}: OfficeRealScoutProps) {
  return (
    <section className="mb-16" aria-labelledby="office-listings-heading">
      <h2
        id="office-listings-heading"
        className="mb-3 text-center text-3xl font-bold text-slate-900 md:text-4xl"
      >
        {heading}
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-slate-600">
        Homes for sale in the Las Vegas Valley. Call or text {ctaPhone.display}.
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-office-listings agent-encoded-id="${realscout.agentEncodedId}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC"></realscout-office-listings>`,
        }}
      />
      <MlsDisclaimer className="mt-6" />
    </section>
  );
}
