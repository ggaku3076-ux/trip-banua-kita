import { MapPin, Phone, Clock, Compass, MessageSquare } from "lucide-react";

export default function LokasiPage() {
  return (
    <section
      className="bg-brand-cream pt-32 pb-16 md:pt-40 md:pb-24"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-brand-accent uppercase">
            HUBUNGI KAMI & LOKASI
          </span>
          <h1
            id="contact-title"
            className="text-3xl font-extrabold text-brand-dark sm:text-4xl mt-3 font-nunito"
          >
            Kontak Trip Banua Kita
          </h1>
          <p className="text-base text-brand-dark/70 mt-4 font-light">
            Kami siap melayani kebutuhan open trip, private trip, dan konsultasi perjalanan Anda. Hubungi admin melalui WhatsApp, Instagram, atau TikTok.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-8">
          <div className="flex flex-col gap-8 text-left">
            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-4 font-nunito">Informasi Kontak</h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-accent shrink-0">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-sm">Area Operasional</h3>
                    <p className="text-sm text-brand-dark/70 mt-1 leading-relaxed font-light">
                      Banjarmasin, Kalimantan Selatan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-accent shrink-0">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-sm">WhatsApp Admin</h3>
                    <p className="text-sm text-brand-dark/70 mt-1">
                      <a href="tel:+6282254042207" className="hover:text-brand-accent transition-colors">
                        0822-5404-2207
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-accent shrink-0">
                    <svg className="h-5 w-5 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-sm">Instagram</h3>
                    <p className="text-sm text-brand-dark/70 mt-1">
                      <a href="https://instagram.com/etripbanuakita_" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">
                        @etripbanuakita_
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-accent shrink-0 text-xs font-bold">
                    TK
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-sm">TikTok</h3>
                    <p className="text-sm text-brand-dark/70 mt-1">
                      <a href="https://tiktok.com/@etrip.banua.kita" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors">
                        @etrip.banua.kita
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-brand-dark mb-4 font-nunito">Jam Layanan</h2>
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-brand-accent shrink-0">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-sm">Buka Setiap Hari</h3>
                  <p className="text-sm text-brand-dark/70 mt-1 font-light">
                    24 Jam Nonstop untuk konsultasi, cek seat, dan info keberangkatan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl">
            <h2 className="text-xl font-bold text-brand-dark text-left font-nunito">Konsultasi Cepat</h2>

            <div className="relative aspect-[16/10] w-full rounded-xl border border-slate-200 bg-brand-blue-bg p-4 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-20">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="border-r border-b border-brand-blue/20" />
                ))}
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
                <div className="h-10 w-10 rounded-full bg-brand-accent flex items-center justify-center text-white shadow-lg animate-bounce">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="bg-brand-dark text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">Trip Banua Kita</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-left">
              <p className="text-xs text-brand-dark/60 leading-relaxed font-light">
                Mau cek seat Rinjani, Bali-Lombok, atau minta itinerary private trip? Tekan tombol di bawah dan langsung chat admin.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/6282254042207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-accent hover:bg-brand-accent-light py-3 px-4 text-xs font-bold text-white transition-all shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat WhatsApp</span>
                </a>
                <a
                  href="https://instagram.com/etripbanuakita_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-dark py-3 px-4 text-xs font-bold text-white hover:bg-brand-mid transition-all shadow-sm"
                >
                  <Compass className="h-4 w-4" />
                  <span>Lihat Instagram</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
