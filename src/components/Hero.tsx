import Image from "next/image";
import { Sparkles, Camera, Map, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen overflow-hidden bg-brand-dark text-white"
      aria-label="Trip Banua Kita Hero"
    >
      {/* Desktop background: 16:9, full-screen, tidak gepeng */}
      <div className="absolute inset-0 z-0 hidden md:block" aria-hidden="true">
        <Image
          src="/Asset/BACKGROUND BANUA.png"
          alt="Trip Banua Kita Hero Background Desktop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Mobile background khusus: 9:16 */}
      <div className="absolute inset-0 z-0 block md:hidden" aria-hidden="true">
        <Image
          src="/Asset/MOBILE.png"
          alt="Trip Banua Kita Hero Background Mobile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-brand-dark/5 pointer-events-none" />

      {/* Tidak ada teks overlay: desain utama sudah berada di aset background */}
      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-6 pb-6 md:px-8">
        <div className="hidden md:grid grid-cols-12 items-center gap-6 border-t border-white/15 pt-4 text-left">
          <div className="col-span-5 flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-white">Travelnya Urang Banua</span>
              <span className="text-[11px] text-white/80">Layanan Terbaik & Terpercaya</span>
            </div>
            <div className="h-6 w-px bg-white/25" />
            <div className="flex items-center gap-2 text-white/85">
              <Camera className="h-4.5 w-4.5" />
              <Compass className="h-4.5 w-4.5" />
              <Map className="h-4.5 w-4.5" />
              <Sparkles className="h-4.5 w-4.5 animate-pulse" />
            </div>
          </div>

          <div className="col-span-7 text-right">
            <p className="text-xs leading-relaxed text-white/90">
              Jasa travel & open trip dari Banjarmasin yang melayani tour domestik dan internasional. Menyediakan fasilitas premium, pemandu profesional, dan perjalanan tanpa repot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
