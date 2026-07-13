import Link from "next/link";
import { MapPin, Phone, Clock, Compass, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="bg-brand-dark text-white pt-12 md:pt-16 pb-6 md:pb-8 border-t border-brand-accent/10"
      aria-labelledby="footer-title"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* === MOBILE FOOTER LAYOUT === */}
        <div className="block md:hidden">

          <div className="flex flex-col items-center text-center gap-3 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white p-1.5 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Asset/LOGO BANUA.png"
                  alt="Trip Banua Kita Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-nunito font-light text-xl text-white tracking-tight">
                Trip Banua Kita
              </span>
            </div>
            <p className="text-xs text-white/75 leading-relaxed max-w-[280px]">
              Travelnya Urang Banua. Layanan open trip dan paket wisata terpercaya dari Banjarmasin.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col gap-2">
              <MapPin className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              <p className="text-[11px] text-white/90 leading-snug">
                Banjarmasin, Kalimantan Selatan
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col gap-2">
              <Clock className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              <div>
                <p className="text-[11px] font-semibold text-white/90">Setiap Hari</p>
                <p className="text-[11px] text-white/70">24 Jam Nonstop</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col gap-2">
              <Phone className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              <a href="tel:+6282254042207" className="text-[11px] text-white/90 leading-snug">
                0822-5404-2207
              </a>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 flex flex-col gap-2">
              <svg className="h-4 w-4 text-brand-accent shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <a href="https://instagram.com/etripbanuakita_" target="_blank" rel="noopener noreferrer" className="text-[11px] text-white/90 leading-snug">
                @etripbanuakita_
              </a>
            </div>
          </div>

          <a
            href="https://wa.me/6282254042207"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-brand-accent py-3 text-xs font-bold text-white hover:bg-brand-accent-light transition-all duration-200 shadow-sm mb-6"
          >
            <Compass className="h-4 w-4" />
            <span>Hubungi via WhatsApp</span>
            <ExternalLink className="h-3 w-3" />
          </a>

          <div className="flex items-center justify-center gap-5 py-4 border-t border-white/10">
            <Link href="/" className="text-[11px] text-white/70 hover:text-white transition-colors">Beranda</Link>
            <Link href="/paket" className="text-[11px] text-white/70 hover:text-white transition-colors">Paket</Link>
            <Link href="/armada" className="text-[11px] text-white/70 hover:text-white transition-colors">Armada</Link>
            <Link href="/booking" className="text-[11px] text-white/70 hover:text-white transition-colors">Booking</Link>
            <Link href="/lokasi" className="text-[11px] text-white/70 hover:text-white transition-colors">Kontak</Link>
          </div>

          <p className="text-center text-[10px] text-white/50 mt-3">
            © 2026 Trip Banua Kita. All rights reserved.
          </p>
        </div>

        {/* === DESKTOP FOOTER LAYOUT === */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white p-1.5 shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Asset/LOGO BANUA.png"
                    alt="Trip Banua Kita Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-nunito font-semibold text-xl text-white tracking-tight">
                  Trip Banua Kita
                </span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                Travelnya Urang Banua. Paket wisata & open trip terpercaya dari Banjarmasin untuk destinasi domestik dan internasional.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-brand-accent">Halaman</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-white/80">
                <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/paket" className="hover:text-white transition-colors">Paket Wisata</Link></li>
                <li><Link href="/armada" className="hover:text-white transition-colors">Armada Trip</Link></li>
                <li><Link href="/booking" className="hover:text-white transition-colors">Booking Sekarang</Link></li>
                <li><Link href="/lokasi" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-brand-accent">Layanan</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-white/80">
                <li>Open Trip Rinjani Lombok</li>
                <li>Open Trip Bali – Lombok</li>
                <li>Private Trip Custom</li>
                <li>Wisata Domestik & Internasional</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-brand-accent">Ikuti Kami</h4>
              <ul className="flex flex-col gap-3 text-sm text-white/80">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-accent" />
                  <span>Banjarmasin, Kalimantan Selatan</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-5 w-5 shrink-0 text-brand-accent" />
                  <a href="tel:+6282254042207" className="hover:text-white transition-colors">0822-5404-2207</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="h-5 w-5 shrink-0 text-brand-accent" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <a href="https://instagram.com/etripbanuakita_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@etripbanuakita_</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-5 w-5 shrink-0 text-brand-accent text-xs font-bold flex items-center justify-center border border-brand-accent/40 rounded">TK</span>
                  <a href="https://tiktok.com/@etrip.banua.kita" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@etrip.banua.kita</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-between pt-8 border-t border-white/10 text-xs text-white/60">
            <p>© 2026 Trip Banua Kita. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white">Syarat & Ketentuan</Link>
              <Link href="#" className="hover:text-white">Kebijakan Privasi</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
