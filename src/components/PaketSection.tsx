"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Compass, Check, ArrowRight } from "lucide-react";

interface PaketTour {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: string;
  description: string;
  imagePath: string;
  features: string[];
  isPopular?: boolean;
}

export default function PaketSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const paketList: PaketTour[] = [
    {
      id: "pkg-1",
      name: "Rinjani Expedition Premium",
      category: "petualangan",
      price: 8500000,
      duration: "6 Hari 5 Malam",
      description: "Jelajahi keindahan Gunung Rinjani yang megah dan alami. Perjalanan 6D5N penuh pengalaman, kenangan, dan makna — small group maksimal 6 orang per kloter.",
      imagePath: "/Asset/BROMO.png",
      features: ["Tiket Pesawat PP (BDJ–LOP)", "Guide Berlisensi 4 Hari Pendakian", "Porter 1:2 Peserta", "Tenda, Sleeping Bag, Matras", "Asuransi Pendakian"],
      isPopular: true,
    },
    {
      id: "pkg-2",
      name: "Open Trip Bali – Lombok",
      category: "wisata",
      price: 8100000,
      duration: "5 Hari 4 Malam",
      description: "Jelajah 2 pulau — nikmati keeksotisan Bali dan keindahan Lombok bersama rombongan Trip Banua Kita yang asyik dan solid.",
      imagePath: "/Asset/BALI.png",
      features: ["Tiket Pesawat PP", "Hotel Bintang 3", "Transportasi All In", "Makan 1x/Hari", "Dokumentasi & Souvenir"],
      isPopular: true,
    },
    {
      id: "pkg-3",
      name: "Private Trip Custom",
      category: "private",
      price: 0,
      duration: "Sesuai Permintaan",
      description: "Rancang perjalanan keluarga, komunitas, kantor, atau honeymoon sesuai jadwal dan keinginan Anda bersama tim profesional Trip Banua Kita.",
      imagePath: "/Asset/JOGJA.png",
      features: ["Itinerary Custom", "Pemandu Profesional", "Transportasi Privat", "Akomodasi Pilihan", "Fleksibel Tanggal"],
    },
  ];

  const filteredPaket = useMemo(() => {
    return paketList.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [searchQuery]);

  return (
    <section className="py-24 bg-brand-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16 pt-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">Destinasi Terbaik Kami</span>
          <h2 className="text-4xl font-extrabold text-brand-dark mt-2 font-nunito">Paket Wisata Trip Banua Kita</h2>
          <p className="text-slate-500 mt-4 text-base font-light">
            Temukan paket perjalanan terbaik dengan fasilitas lengkap. Tinggal packing, berangkat — semua sudah kami siapkan.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="text-sm font-semibold text-slate-500">
            Menampilkan {filteredPaket.length} Paket Wisata Pilihan
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Cari destinasi wisata..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm text-slate-800 focus:outline-none focus:border-brand-accent"
            />
            <Search className="absolute left-3.5 top-3 h-4.5 w-4.5 text-slate-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPaket.map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-sm card-hover-effect flex flex-col justify-between animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 w-full bg-slate-100">
                <Image
                  src={pkg.imagePath}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 md:p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-brand-accent bg-brand-cream px-3 py-1.5 rounded-full border border-brand-accent/10">
                    {pkg.duration}
                  </span>
                  {pkg.isPopular && (
                    <span className="text-xs font-bold text-white bg-brand-accent px-3 py-1.5 rounded-full">
                      Terlaris
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-brand-dark mb-3 font-nunito">{pkg.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">{pkg.description}</p>

                <div className="space-y-2.5">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <Check className="h-4 w-4 text-brand-accent shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 py-5 md:px-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {pkg.price === 0 ? "Hubungi Kami" : "Mulai Dari"}
                  </span>
                  <span className="text-lg font-extrabold text-brand-dark">
                    {pkg.price === 0 ? "Custom Price" : `Rp ${pkg.price.toLocaleString("id-ID")}`}
                  </span>
                </div>

                <a
                  href={`https://wa.me/6282254042207?text=Halo+Trip+Banua+Kita,+saya+ingin+info+paket+${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-light text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
                >
                  <span>Pesan</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredPaket.length === 0 && (
          <div className="text-center py-20">
            <Compass className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Paket wisata tidak ditemukan.</p>
          </div>
        )}

      </div>
    </section>
  );
}
