import Header from "../components/Header.jsx";
import logo from "../assets/svg/logo.svg"; // descomenta si importas el logo
import { Link } from "react-router";

const display =
  "font-['Bricolage_Grotesque'] leading-[1.08] tracking-[-0.02em]";
const wrap = "mx-auto max-w-[1140px] px-6";

const PILARES = [
  {
    emoji: "🩺",
    titulo: "Salud y bienestar",
    texto:
      "Jornadas médicas, prevención y apoyo a familias que no tienen acceso fácil a la salud.",
    clases:
      "md:col-span-3 rounded-[40px_40px_40px_8px] bg-[#fdcb06] text-[#0e2d5e]",
  },
  {
    emoji: "📚",
    titulo: "Educación",
    texto:
      "Útiles, becas y espacios de aprendizaje para niños y jóvenes del Chocó.",
    clases:
      "md:col-span-3 rounded-[40px_40px_8px_40px] border border-[#dbe3f1] bg-white",
  },
  {
    emoji: "🚨",
    titulo: "Emergencias",
    texto: "Ayuda rápida ante desastres naturales.",
    clases:
      "md:col-span-2 rounded-[8px_40px_40px_40px] border border-[#dbe3f1] bg-white",
  },
  {
    emoji: "🤝",
    titulo: "Inclusión",
    texto: "Apoyo a personas en situación de vulnerabilidad.",
    clases:
      "md:col-span-2 rounded-[40px_8px_40px_40px] bg-[#1c4f9b] text-white",
  },
  {
    emoji: "🕊️",
    titulo: "Paz",
    texto: "Solidaridad y servicio voluntario como motor de cambio.",
    clases:
      "md:col-span-2 rounded-[40px_40px_8px_40px] border border-[#dbe3f1] bg-white",
  },
];

const btnBase = `${display} inline-block cursor-pointer rounded-full border-0 px-[30px] py-[15px] text-[1.1rem] font-bold transition-transform hover:-translate-y-[3px]`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fd] font-['Figtree'] text-[1.06rem] leading-[1.65] text-[#16213a]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(1200px_600px_at_85%_10%,#2a68c4_0,transparent_60%),linear-gradient(160deg,#1c4f9b,#10336a)] pb-[150px] pt-10 text-white md:pt-[84px]">
        <div
          className={`${wrap} grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]`}
        >
          <div>
            <h1
              className={`${display} text-[clamp(2.8rem,7vw,5.4rem)] font-extrabold`}
            >
              CLUB DE LEONES
            </h1>

            <p className="mb-[34px] mt-[22px] max-w-[30ch] text-[clamp(1.15rem,2vw,1.5rem)] font-medium leading-[1.5]">
              Desde 1956 servimos con compromiso a Quibdó y el Chocó, impulsando
              proyectos de salud, educación y bienestar para quienes más lo
              necesitan.
            </p>

            <div className="mb-9 flex flex-wrap gap-[34px]">
              <div>
                <b
                  className={`${display} block text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-none text-[#fdcb06]`}
                >
                  +70
                </b>
                <span className="font-semibold opacity-95">
                  Años de servicio
                </span>
              </div>
              <div>
                <b
                  className={`${display} block text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-none text-[#fdcb06]`}
                >
                  +1000
                </b>
                <span className="font-semibold opacity-95">
                  Familias beneficiadas
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/servicios"
                className={`${btnBase} bg-[#fdcb06] text-[#0e2d5e] shadow-[0_6px_0_#c9a200]`}
              >
                Ver servicios
              </Link>
              <Link
                to="/nosotros"
                className={`${btnBase} bg-[#1c4f9b] text-white shadow-[0_6px_0_#0e2d5e] outline-2 -outline-offset-2 outline-white/35`}
              >
                Nosotros
              </Link>
            </div>
          </div>

          {/* Sello */}
          <div className="relative order-first mx-auto grid aspect-square w-[min(100%,300px)] place-items-center md:order-none md:w-[min(100%,440px)]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-[4%] animate-spin rounded-full border-4 border-dashed border-[#fdcb06] [animation-duration:60s] motion-reduce:animate-none"
            />
            <div className="relative grid aspect-square w-full place-items-center rounded-full bg-white shadow-[0_0_0_12px_#fdcb06,0_30px_60px_rgba(0,0,0,0.4)]">
              <img
                src={logo}
                alt="Logo del Club de Leones"
                className="h-auto w-[88%]"
              />
            </div>

            {/* Requiere @keyframes bob en tu CSS global (ver nota) */}
            <span className="absolute left-0 top-[8%] rounded-full bg-white px-[18px] py-[10px] font-bold text-[#0e2d5e] shadow-[0_10px_24px_rgba(0,0,0,0.25)] [animation:bob_5s_ease-in-out_infinite] motion-reduce:animate-none">
              Salud
            </span>
            <span className="absolute bottom-[20%] right-[-2%] rounded-full bg-white px-[18px] py-[10px] font-bold text-[#0e2d5e] shadow-[0_10px_24px_rgba(0,0,0,0.25)] [animation:bob_5s_ease-in-out_-2s_infinite] motion-reduce:animate-none">
              Educación
            </span>
            <span className="absolute bottom-[2%] left-[6%] rounded-full bg-white px-[18px] py-[10px] font-bold text-[#0e2d5e] shadow-[0_10px_24px_rgba(0,0,0,0.25)] [animation:bob_5s_ease-in-out_-3.5s_infinite] motion-reduce:animate-none">
              Bienestar
            </span>
          </div>
        </div>

        <svg
          className="absolute bottom-[-1px] left-0 block h-[90px] w-full"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 50C240 100 480 0 760 40s480 50 680-10V90H0z"
            fill="#0b1730"
          />
        </svg>
      </section>

      {/* Servir es nuestra forma de ser comunidad */}
      <section className="py-[84px] bg-[#0b1730]">
        <div className={wrap}>
          <h2
            className={`${display} max-w-[18ch] text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold text-white`}
          >
            Servir es nuestra forma de ser comunidad
          </h2>

          <p className="mt-[14px] max-w-[56ch] text-white">
            Trabajamos junto a voluntarios y organizaciones aliadas para que la
            ayuda llegue a quienes más la necesitan, en el momento en que la
            necesitan.
          </p>

          <div className="mt-11 grid grid-cols-1 gap-5 md:grid-cols-6">
            {PILARES.map((p) => (
              <div key={p.titulo} className={`p-[30px] ${p.clases}`}>
                <span className="mb-[10px] block text-[2.2rem]">{p.emoji}</span>
                <h3 className={`${display} mb-2 text-[1.4rem] font-bold`}>
                  {p.titulo}
                </h3>
                <p className="text-base opacity-90">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banda amarilla */}
      <section className="bg-[#fdcb06] py-16 text-[#0e2d5e]">
        <div
          className={`${wrap} flex flex-wrap items-center justify-between gap-[30px]`}
        >
          <h2
            className={`${display} max-w-[20ch] text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold`}
          >
            ¿Quieres servir con nosotros?
          </h2>
          <Link
            to={"/contacto"}
            className={`${btnBase} bg-[#1c4f9b] text-white shadow-[0_6px_0_#0e2d5e] outline-2 -outline-offset-2 outline-white/35`}
          >
            Quiero unirme
          </Link>
        </div>
      </section>
    </main>
  );
}
