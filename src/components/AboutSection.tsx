"use client";

import { useState } from "react";
import { Award, CheckCircle2, ChevronRight, Car, Compass, Plane } from "lucide-react";

interface TransportService {
  id: string;
  name: string;
  maxCapacity: number;
  features: string[];
  description: string;
}

export default function AboutSection() {
  const [passengers, setPassengers] = useState<number>(4);
  const [serviceType, setServiceType] = useState<string>("paket");
  const [date, setDate] = useState<string>("");
  const [duration, setDuration] = useState<string>("5");
  const [clientName, setClientName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const services: TransportService[] = [
    {
      id: "avanza",
      name: "Toyota Avanza (MPV)",
      maxCapacity: 6,
      description: "Mobil keluarga ber-AC dingin, hemat BBM, cocok untuk grup kecil.",
      features: ["Kapasitas 6 Penumpang", "AC Double Blower", "Driver Profesional"],
    },
    {
      id: "innova",
      name: "Toyota Innova Reborn",
      maxCapacity: 7,
      description: "Kendaraan MPV premium nyaman dan suspensi empuk.",
      features: ["Kapasitas 7 Penumpang", "Kabin Lega & Senyap", "Driver Profesional"],
    },
    {
      id: "hiace",
      name: "Toyota Hiace / Elf",
      maxCapacity: 19,
      description: "Minibus ideal untuk rombongan wisata skala sedang.",
      features: ["Kapasitas 14-19 Penumpang", "AC Ducting Dingin", "Suspensi Nyaman"],
    },
  ];

  // Recommendations based on passenger count
  let recommendedService = services[0];
  if (passengers <= 6) {
    recommendedService = services.find((s) => s.id === "avanza") || services[0];
  } else if (passengers <= 7) {
    recommendedService = services.find((s) => s.id === "innova") || services[1];
  } else {
    recommendedService = services.find((s) => s.id === "hiace") || services[2];
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !date) return;

    const typeLabel =
      serviceType === "rental"
        ? "Sewa Mobil + Driver"
        : serviceType === "paket"
        ? "Open Trip / Paket Wisata"
        : "Antar Jemput Bandara/Drop-off";

    let message = `Halo Trip Banua Kita, saya ingin menanyakan ketersediaan & booking trip:\n\n`;
    message += `- *Nama Pemesan:* ${clientName}\n`;
    message += `- *Layanan:* ${typeLabel}\n`;
    message += `- *Jumlah Peserta:* ${passengers} orang\n`;
    message += `- *Tanggal Perjalanan:* ${date}\n`;
    message += `- *Durasi:* ${duration} Hari\n`;
    message += `- *Rekomendasi Armada:* ${recommendedService.name}\n\n`;
    message += `Mohon info harga total, ketersediaan seat, dan langkah booking selanjutnya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6282254042207?text=${encoded}`, "_blank");

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setClientName("");
      setDate("");
    }, 3000);
  };

  return (
    <section
      id="booking"
      className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-24 border-y border-slate-200"
      aria-labelledby="booking-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-accent uppercase">
            Form Simulasi & Reservasi
          </span>
          <h2
            id="booking-title"
            className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3 font-nunito"
          >
            Rencanakan Trip Anda Sekarang
          </h2>
          <p className="text-base text-brand-dark/70 mt-4 font-light">
            Silakan isi detail simulasi peserta di bawah ini untuk mendapatkan rekomendasi kapasitas armada dan langsung terhubung dengan admin kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Akhmad Fikri"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-dark mb-3">Jenis Layanan</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setServiceType("paket")}
                    className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all ${
                      serviceType === "paket"
                        ? "border-brand-accent bg-brand-cream/50 ring-2 ring-brand-accent/20"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl mb-3 ${
                        serviceType === "paket" ? "bg-brand-accent text-white" : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      <Compass className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-brand-dark">Open / Private Trip</span>
                    <span className="text-[10px] text-slate-400 mt-1">Paket trip destinasi pilihan lengkap</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType("rental")}
                    className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all ${
                      serviceType === "rental"
                        ? "border-brand-accent bg-brand-cream/50 ring-2 ring-brand-accent/20"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl mb-3 ${
                        serviceType === "rental" ? "bg-brand-accent text-white" : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      <Car className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-brand-dark">Sewa Unit + Driver</span>
                    <span className="text-[10px] text-slate-400 mt-1">Layanan mobil privat & driver harian</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setServiceType("drop")}
                    className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all ${
                      serviceType === "drop"
                        ? "border-brand-accent bg-brand-cream/50 ring-2 ring-brand-accent/20"
                        : "border-slate-200 bg-slate-50 hover:bg-slate-100"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl mb-3 ${
                        serviceType === "drop" ? "bg-brand-accent text-white" : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      <Plane className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-brand-dark">Antar - Jemput</span>
                    <span className="text-[10px] text-slate-400 mt-1">Drop-off bandara Syamsudin Noor</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Jumlah Peserta</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    required
                    value={passengers}
                    onChange={(e) => setPassengers(parseInt(e.target.value) || 1)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-brand-dark mb-2">Durasi (Hari)</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    required
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-accent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-brand-dark mb-2">Tanggal Keberangkatan</label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-brand-dark focus:outline-none focus:border-brand-accent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full py-4 rounded-xl bg-brand-accent hover:bg-brand-accent-light text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Membuka WhatsApp Admin...</span>
                  </>
                ) : (
                  <>
                    <span>Hubungi CS via WhatsApp</span>
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Recommendation Preview */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-dark border border-white/10 text-white p-6 md:p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/15 px-3 py-1 rounded-full border border-brand-accent/20">
                Kapasitas Armada Pendukung
              </span>

              <h3 className="text-2xl font-bold mt-4 font-nunito">{recommendedService.name}</h3>
              <p className="text-xs text-white/80 mt-1 font-light">{recommendedService.description}</p>

              <div className="mt-6 space-y-3">
                {recommendedService.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/95">
                    <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 flex gap-4 items-center">
              <div className="h-10 w-10 bg-brand-cream border border-brand-accent/20 flex items-center justify-center text-brand-accent rounded-xl shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-brand-dark">Garansi Pelayanan Premium</h4>
                <p className="text-xs text-slate-400 font-light">
                  Trip Banua Kita menjamin kebersihan, kelengkapan P3K, standard safety trip pendakian, serta guide berlisensi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
