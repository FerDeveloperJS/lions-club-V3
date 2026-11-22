import { useState } from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/svg/logo.svg";

const LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contacto", label: "Contacto" },
];

/**
 * Header / Navbar del Club de Leones.
 * - React Router: Link y useLocation.
 * - Colores: navy #0e2d5e, amarillo #fdcb06.
 * - Tipografía: Bricolage Grotesque y Figtree.
 */
const FIGTREE = "Figtree, system-ui, sans-serif";
const BRICOLAGE = '"Bricolage Grotesque", Figtree, system-ui, sans-serif';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header
      style={{ fontFamily: FIGTREE }}
      className="sticky top-[env(safe-area-inset-top,0px)] z-20 bg-[#0e2d5e] text-[1.2rem] leading-[1.65] text-white"
    >
      <div className="mx-auto flex min-h-[84px] max-w-[1400px] items-center justify-between px-3 py-3">
        <Link
          to="/"
          aria-label="Club de Leones, inicio"
          onClick={() => setOpen(false)}
          style={{ fontFamily: BRICOLAGE }}
          className="flex items-center gap-3 text-[1.5rem] font-extrabold"
        >
          <span className="grid h-[58px] w-[58px] flex-none place-items-center rounded-full bg-white">
            <img src={logo} alt="" className="h-auto w-4/5" />
          </span>
          Club de Leones
        </Link>

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
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col gap-1.5 bg-[#0e2d5e] px-3 pb-5 pt-2 md:static md:flex md:flex-row md:items-center md:bg-transparent md:p-0`}
        >
          {LINKS.map(({ to, label }) => {
            const active =
              to === "/"
                ? pathname === "/"
                : pathname === to || pathname.startsWith(`${to}/`);

            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-full px-4 py-[9px] text-[1.2rem] font-semibold transition-colors ${
                  active
                    ? "bg-[#fdcb06] text-[#0e2d5e]"
                    : "opacity-85 hover:bg-white/10 hover:opacity-100"
                } focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#fdcb06]`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
