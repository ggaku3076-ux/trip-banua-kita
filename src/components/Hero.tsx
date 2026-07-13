"use client";

import Image from "next/image";
import { Sparkles, Camera, Map, Compass } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative h-screen min-h-screen w-full overflow-hidden bg-brand-dark text-white"
      aria-labelledby="hero-title"
    >
      {/* BACKGROUND IMAGE 1920x1080 FULLSCREEN TANPA CROP */}
      <div className="absolute inset-0 z-0 h-full w-full" aria-hidden="true">
        <Image
          src="/Asset/BACKGROUND BANUA.png"
          alt="Trip Banua Kita Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-fill"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-brand-dark/20 pointer-events-none" />

      <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 pt-28 md:px-8 lg:items-end">
        <div className="max-w-3xl text-center lg:mr-8 lg:text-right">
          <h1
            id="hero-title"
            className="text-4xl font-extrabold leading-[0.95] tracking-tight text-white drop-shadow-xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Liburan Berkelas, <br />
            <span className="text-white">Kenangan Tak Terbatas.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-white drop-shadow-lg sm:text-lg lg:mx-0 lg:text-xl">
            Yuk, ciptakan cerita terbaikmu bersama kami. Menjelajahi keindahan Rinjani yang megah, keeksotisan Bali-Lombok, dan berbagai destinasi premium tanah air dengan aman dan nyaman.
          </p>
        </div>

        <div className="absolute bottom-6 left-1/2 hidden w-[calc(100%-3rem)] max-w-7xl -translate-x-1/2 grid-cols-12 items-center gap-6 border-t border-white/15 pt-4 text-left md:grid">
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
