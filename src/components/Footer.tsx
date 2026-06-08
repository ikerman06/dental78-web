import Link from "next/link";
import Logo from "./Logo";
import { FOOTER_LINKS, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={28} color="#777777" />
              <span className="font-syne font-700 text-sm tracking-widest text-[#111] uppercase">
                Dental 78
              </span>
            </div>
            <p className="text-[#777] font-dm text-sm leading-relaxed">
              Laboratorio de prótesis dental B2B.
              <br />
              Barcelona · Desde {SITE.founded}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-syne text-xs tracking-widest text-[#777] uppercase mb-4">Navegación</p>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-dm text-sm text-[#777] hover:text-[#111] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-syne text-xs tracking-widest text-[#777] uppercase mb-4">Contacto</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href={`tel:${SITE.phone}`} className="font-dm text-sm text-[#777] hover:text-[#111] transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="font-dm text-sm text-[#777] hover:text-[#111] transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li className="font-dm text-sm text-[#777]">{SITE.schedule}</li>
              <li className="font-dm text-sm text-[#777]">{SITE.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-black/8">
          <p className="font-dm text-xs text-[#999]">
            © {new Date().getFullYear()} Dental 78. Todos los derechos reservados.
          </p>
          <p className="font-dm text-xs text-[#999]">{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
