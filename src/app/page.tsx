import Link from "next/link";
import Hero from "@/components/Hero";
import { Mountain, Compass, CalendarRange, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  const portalCards = [
    {
      icon: Mountain,
      title: "Rinjani Expedition",
      description: "Premium small-group adventure 6 hari 5 malam ke Gunung Rinjani, kuota terbatas 6 seat per kloter.",
      href: "/paket",
      linkText: "Lihat Paket Rinjani",
    },
    {
      icon: Compass,
      title: "Bali - Lombok",
      description: "Open trip 5 hari 4 malam dengan tiket pesawat, hotel, transportasi, guide, dokumentasi, dan souvenir.",
      href: "/paket",
      linkText: "Lihat Bali Lombok",
    },
    {
      icon: CalendarRange,
      title: "Private Trip",
      description: "Rancang perjalanan keluarga, komunitas, kantor, atau honeymoon sesuai jadwal dan gaya liburan Anda.",
      href: "/booking",
      linkText: "Mulai Konsultasi",
    },
    {
      icon: MapPin,
      title: "Info & Booking",
      description: "Hubungi admin Trip Banua Kita via WhatsApp, Instagram, atau TikTok untuk cek seat dan itinerary terbaru.",
      href: "/lokasi",
      linkText: "Hubungi Kami",
    },
  ];

  return (
    <>
      <Hero />

      <section
        className="py-16 md:py-24 bg-brand-blue-bg border-t border-brand-blue/10"
        aria-labelledby="portal-title"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-widest text-brand-blue uppercase">
              Travelnya Urang Banua
            </span>
            <h2
              id="portal-title"
              className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3"
            >
              Open Trip Aman, Nyaman, dan Berkesan
            </h2>
            <p className="text-base text-brand-dark/70 mt-4">
              Trip Banua Kita membantu traveler Banua menjelajahi destinasi impian tanpa repot. Tiket, transportasi, penginapan, itinerary, guide, dokumentasi, dan kebutuhan trip dirapikan dari awal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portalCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border border-brand-blue/10 hover:border-brand-accent card-hover-effect flex flex-col justify-between items-start text-left shadow-sm animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="h-12 w-12 rounded-xl bg-brand-blue-bg border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark">{card.title}</h3>
                    <p className="text-sm text-brand-dark/60 leading-relaxed">{card.description}</p>
                  </div>

                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand-blue hover:text-brand-accent group"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

