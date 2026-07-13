"use client";

import Image from "next/image";
import { Compass, Sparkles, Camera, Map } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0e1b2e] text-white"
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND IMAGE 1920x1080 FULL SCREEN */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/Asset/BACKGROUND BANUA.png"
          alt="Trip Banua Kita Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* SUBTLE DARK OVERLAY FOR TEXT READABILITY */}
      <div className="absolute inset-0 bg-[#0e1b2e]/30 pointer-events-none z-10" />

      {/* MAIN CONTENT AREA - PELETAKAN TEKS SESUAI DENGAN BACKGROUND (tidak menabrak elemen utama di kiri dan teks di background)
          Berdasarkan analisis visual, area langit atas-tengah dan kanan bawah adalah area kosong paling aman.
          Teks diletakkan di sebelah kanan tengah-bawah untuk menghindari pria beransel di kiri depan. */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 md:px-8 flex-grow flex flex-col justify-end lg:justify-center pt-32 pb-4 lg:pb-6 items-end">
        <div className="max-w-xl text-center lg:text-right flex flex-col items-center lg:items-end gap-4 md:gap-6 mb-2 lg:mb-3 lg:mr-10">
          <h1
            id="hero-title"
            className="text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans filter drop-shadow-lg"
          >
            Liburan Berkelas, <br />
            <span className="text-brand-accent">Kenangan Tak Terbatas.</span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base text-white leading-relaxed max-w-md font-medium filter drop-shadow-md">
            Yuk, ciptakan cerita terbaikmu bersama kami. Menjelajahi keindahan Rinjani yang megah, keeksotisan Bali-Lombok, dan berbagai destinasi premium tanah air dengan aman dan nyaman.
          </p>

          <a
            href="/booking"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-accent hover:bg-brand-accent-light px-6 py-3 text-sm font-bold text-white transition-all shadow-md mt-2"
          >
            <span>Mulai Petualangan</span>
            <Compass className="h-4.5 w-4.5 animate-spin" style={{ animationDuration: '6s' }} />
          </a>
        </div>

        {/* HERO FOOTER */}
        <div className="hidden md:grid grid-cols-12 gap-6 pt-3 border-t border-white/10 mt-12 items-center text-left w-full">
          <div className="col-span-5 flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">Travelnya Urang Banua</span>
              <span className="text-[11px] text-white/80">Layanan Terbaik & Terpercaya</span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-white/80">
              <Camera className="h-4.5 w-4.5" />
              <Compass className="h-4.5 w-4.5" />
              <Map className="h-4.5 w-4.5" />
              <Sparkles className="h-4.5 w-4.5 animate-pulse" />
            </div>
          </div>

          <div className="col-span-7 text-right">
            <p className="text-xs text-white/85 leading-relaxed">
              Jasa travel & open trip dari Banjarmasin yang melayani tour domestik dan internasional. Menyediakan fasilitas premium, pemandu profesional, dan perjalanan tanpa repot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
