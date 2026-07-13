import Image from "next/image";
import { Heart } from "lucide-react";

export default function ArmadaSection() {
  const armadas = [
    {
      name: "Hiace / Elf Commuter",
      type: "Minibus Wisata",
      capacity: "14-19 Penumpang",
      price: 1100000,
      imagePath: "/Asset/HIACE.png",
      description: "Pilihan utama rombongan wisata ziarah, dinas, atau family gathering dengan kenyamanan maksimal.",
      features: ["AC Ducting Dingin", "Driver Berpengalaman", "Reclining Seats & Audio"],
    },
    {
      name: "Toyota Innova Reborn",
      type: "MPV Premium",
      capacity: "7 Penumpang",
      price: 650000,
      imagePath: "/Asset/INOVA REBORNN.png",
      description: "Kendaraan premium dengan suspensi empuk, kabin lega, dan berkelas untuk perjalanan privat.",
      features: ["Kabin Senyap & Nyaman", "AC Dingin", "Driver Profesional"],
    },
    {
      name: "Toyota Avanza",
      type: "MPV",
      capacity: "6 Penumpang",
      price: 350000,
      imagePath: "/Asset/AVANZA.png",
      description: "Mobil andalan keluarga yang gesit dan sangat hemat bahan bakar untuk keliling kota.",
      features: ["AC Double Blower", "Driver Ramah & Santun", "BBM Opsional"],
    },
  ];

  return (
    <section
      id="armada"
      className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-24 border-y border-slate-200"
      aria-labelledby="armada-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-accent uppercase">
            Pilihan Transportasi Trip
          </span>
          <h2
            id="armada-title"
            className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3 font-nunito"
          >
            Armada Nyaman & Terawat
          </h2>
          <p className="text-base text-brand-dark/70 mt-4 font-light">
            Trip Banua Kita berkomitmen menyajikan armada terawat, bersih, wangi, dan ber-AC dingin untuk menjamin kenyamanan Anda sepanjang jalan.
          </p>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {armadas.map((mobil, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-150 hover:border-brand-accent card-hover-effect flex flex-col justify-between overflow-hidden shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-44 w-full bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                  <Image
                    src={mobil.imagePath}
                    alt={mobil.name}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-3 transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold text-brand-accent bg-brand-cream px-2.5 py-1 rounded-full border border-brand-accent/10">
                      {mobil.type}
                    </span>
                    <h3 className="text-xl font-bold text-brand-dark mt-4 font-nunito">{mobil.name}</h3>
                    <span className="text-xs text-slate-400 block mt-1">{mobil.capacity}</span>
                    <p className="text-sm text-brand-dark/60 leading-relaxed mt-4 font-light">{mobil.description}</p>

                    <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                      {mobil.features.map((feat, idx) => (
                        <span key={idx} className="block text-xs text-slate-500">• {feat}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mulai Dari</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-lg font-extrabold text-brand-dark">
                        Rp {mobil.price.toLocaleString("id-ID")}<span className="text-xs font-normal text-slate-400">/hari</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white border border-slate-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 text-left">
            <div className="h-10 w-10 rounded-full bg-brand-cream border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
              <Heart className="h-5 w-5 fill-current" />
            </div>
            <div>
              <h4 className="font-bold text-brand-dark">Butuh Armada Lain untuk Group Besar?</h4>
              <p className="text-xs text-brand-dark/60">Kami juga menyediakan sewa bus pariwisata medium & big bus untuk kebutuhan gathering komunitas atau instansi Anda.</p>
            </div>
          </div>
          <a
            href="/booking"
            className="rounded-xl bg-brand-accent hover:bg-brand-accent-light px-6 py-3 text-sm font-semibold text-white transition-colors shrink-0"
          >
            Hubungi Admin
          </a>
        </div>
      </div>
    </section>
  );
}
