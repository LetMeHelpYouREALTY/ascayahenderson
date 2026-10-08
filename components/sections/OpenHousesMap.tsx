import { ctaPhone } from "@/lib/contact";
import { openHousesMapEmbedUrl } from "@/lib/runtime-config";

export default function OpenHousesMap() {
  const src = openHousesMapEmbedUrl();
  if (!src) return null;

  return (
    <section
      className="bg-slate-50 py-16"
      aria-labelledby="open-houses-heading"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h2
          id="open-houses-heading"
          className="mb-4 text-center text-3xl font-bold text-slate-900"
        >
          Open houses
        </h2>
        <p className="mb-6 text-center text-lg text-slate-600">
          Pins for homes open to tour. Call or text {ctaPhone.display} before
          you drive to the gate.
        </p>
        <div className="aspect-video overflow-hidden rounded-xl border border-slate-200">
          <iframe
            title="Open houses map"
            src={src}
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
