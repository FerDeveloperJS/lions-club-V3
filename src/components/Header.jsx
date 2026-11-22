import { useState } from "react";
import logo from "../assets/svg/logo.svg";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/novedades", label: "Novedades" },
  { href: "/contacto", label: "Contacto" },
];

/**
 * Header / Navbar del Club de Leones.
 * - current: ruta activa (ej. "/servicios").
 * - Colores: navy #0e2d5e, amarillo #fdcb06.
 * - Tipografía: Bricolage Grotesque y Figtree.
 */
const FIGTREE = "Figtree, system-ui, sans-serif";
const BRICOLAGE = '"Bricolage Grotesque", Figtree, system-ui, sans-serif';

export default function Header({ current }) {
  const [open, setOpen] = useState(false);

  const path =
    current ?? (typeof window !== "undefined" ? window.location.pathname : "/");

  return (
    <header
      style={{ fontFamily: FIGTREE }}
      className="sticky top-[env(safe-area-inset-top,0px)] z-20 bg-[#0e2d5e] text-[1.2rem] leading-[1.65] text-white"
    >
      <div className="mx-auto flex min-h-[84px] max-w-[1400px] items-center justify-between px-3 py-3">
        <a
          href="/"
          aria-label="Club de Leones, inicio"
          style={{ fontFamily: BRICOLAGE }}
          className="flex items-center gap-3 text-[1.5rem] font-extrabold"
        >
          <span className="grid h-[58px] w-[58px] flex-none place-items-center rounded-full bg-white">
            <img src={logo} alt="" className="h-auto w-4/5" />
          </span>
          Club de Leones
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
          className="rounded-[10px] border-2 border-white/50 px-3 py-1.5 text-[1.05rem] font-semibold md:hidden"
        >
          Menú
        </button>

        <nav
          id="nav"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-1.5 bg-[#0e2d5e] px-3 pb-5 pt-2 md:static md:flex md:flex-row md:items-center md:bg-transparent md:p-0`}
        >
          {LINKS.map(({ href, label }) => {
            const active = href === "/" ? path === "/" : path.startsWith(href);

            return (
              <a
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-full px-4 py-[9px] text-[1.2rem] font-semibold transition-colors ${
                  active
                    ? "bg-[#fdcb06] text-[#0e2d5e]"
                    : "opacity-85 hover:bg-white/10 hover:opacity-100"
                } focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#fdcb06]`}
              >
                {label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
