import { useState } from "react";
import originalLion1 from "../assets/img/pages/Nosotros/original-lion.webp";
import originalLion2 from "../assets/img/pages/Nosotros/original-lion2.webp";
import Header from "../components/Header.jsx";

/* Tokens de color + modo oscuro (igual que el :root del CSS original) */
const THEME_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Figtree:wght@400;500;600&display=swap');
.lc-root li.pj-li::marker{color:#fdcb06}
`;

const D =
  "font-[family-name:'Bricolage_Grotesque',Figtree,system-ui,sans-serif] leading-[1.08] tracking-[-0.02em]";
const WRAP = "mx-auto w-full max-w-[1140px] px-6";

const LINKS = [
  { href: "index.html", label: "Inicio" },
  { href: "nosotros.html", label: "Nosotros", current: true },
  { href: "servicios.html", label: "Servicios" },
  { href: "novedades.html", label: "Novedades" },
  { href: "contacto.html", label: "Contacto" },
];

const VALUES = [
  "Solidaridad",
  "Servicio voluntario",
  "Compromiso",
  "Inclusión",
  "Paz",
];

const DATES = [
  ["1879", "Nace Melvin Jones, el 13 de enero, en Fort Thomas, Arizona."],
  ["1913", "Forma su propia agencia de seguros."],
  ["1917", "El 7 de junio nace la Asociación de Clubes de Leones."],
  [
    "1958",
    "La Junta Directiva Internacional lo designa oficialmente fundador.",
  ],
];

const HEALTH = [
  "Construcción de centros de salud en Puerto Conto y Barrio Obrero",
  "Brigadas de salud",
  "Campañas para la prevención de la diabetes",
  "Prevención de la ceguera",
  "En el hospital San Francisco de Asís de Quibdó, se atendía un centro de recuperación nutricional para niños",
];

function Wave({ h = 60 }) {
  return (
    <svg
      className="absolute inset-x-0 -bottom-px block w-full"
      style={{ height: h }}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 60C300 0 600 100 900 50s400-30 540 10V90H0z"
        className="fill-[#f7f9fd] dark:fill-[#0b1730]"
      />
    </svg>
  );
}

function Timeline({ items, compact = false }) {
  return (
    <div
      className={`grid border-l-4 border-[#fdcb06] pl-[26px] ${compact ? "gap-[22px]" : "gap-[30px]"}`}
    >
      {items.map(([year, text]) => (
        <div key={year} className="relative">
          <span className="absolute -left-9 top-1.5 h-[18px] w-[18px] rounded-full border-4 border-[#fdcb06] bg-[#1c4f9b]" />
          <b
            className={`${D} font-extrabold text-[#1c4f9b] dark:text-[#8fb4f0] ${compact ? "text-[1.3rem]" : "text-2xl"}`}
          >
            {year}
          </b>
          <p className={compact ? "text-[0.97rem] leading-normal" : ""}>
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}

function Fact({ big, children, variant }) {
  const styles = {
    navy: "bg-[#0e2d5e] text-white [&_b]:text-[#fdcb06]",
    yellow: "bg-[#fdcb06] text-[#0e2d5e]",
  }[variant];
  return (
    <div
      className={`flex-[1_1_180px] rounded-3xl px-[26px] py-[22px] ${styles}`}
    >
      {children}
    </div>
  );
}

const factB = (big) =>
  `${D} block font-extrabold leading-[1.05] ${big ? "text-[length:clamp(2.2rem,5vw,3.4rem)]" : "text-[length:clamp(1.8rem,4vw,2.6rem)]"}`;

const sectionTitle = `${D} mb-[26px] max-w-[20ch] text-[length:clamp(2rem,5vw,3.6rem)] font-extrabold uppercase`;
const lead = "text-[length:clamp(1.12rem,2vw,1.32rem)] leading-[1.6]";

export default function Nosotros() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lc-root min-h-screen bg-[#f7f9fd] dark:bg-[#0b1730] font-[family-name:'Figtree',system-ui,sans-serif] text-[1.06rem] leading-[1.65] text-[#16213a] dark:text-[#eaf0fb]">
      <style>{THEME_CSS}</style>

      {/* Header */}
      <Header />

      <main>
        {/* Encabezado de página */}
        <section className="relative bg-[#1c4f9b] pb-[110px] pt-[70px] text-white">
          <div className={WRAP}>
            <h1
              className={`${D} text-[length:clamp(2.4rem,6vw,4.2rem)] font-extrabold`}
            >
              Quiénes somos
            </h1>
            <p className="mt-3.5 max-w-[54ch] text-[1.2rem] opacity-95">
              Una organización humanitaria sin ánimo de lucro, hecha de
              voluntarios que creen en transformar vidas a través del servicio.
            </p>
            <div className="mt-[26px] flex flex-wrap gap-2.5">
              {[
                ["#leon", "El león original"],
                ["#melvin", "Melvin Jones"],
                ["#quibdo", "Nuestro club"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-full border-2 border-white/45 px-5 py-2.5 font-semibold transition-colors duration-200 hover:border-[#fdcb06] hover:bg-[#fdcb06] hover:text-[#0e2d5e]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <Wave />
        </section>

        {/* Historia de servicio */}
        <section className="py-[84px]">
          <div className={WRAP}>
            <h2
              className={`${D} max-w-[18ch] text-[length:clamp(2rem,4.5vw,3.2rem)] font-extrabold`}
            >
              Una historia de servicio
            </h2>
            <p className="mt-3.5 max-w-[56ch] text-[#55627d] dark:text-[#a9b8d6]">
              La Fundación Lions Clubs International (LCIF) apoya y financia
              proyectos sociales que mejoran la calidad de vida de las personas
              y fortalecen las comunidades.
            </p>
            <p className="mt-3.5 max-w-[56ch] text-[#55627d] dark:text-[#a9b8d6]">
              Trabaja junto con los Clubes de Leones, voluntarios y aliados para
              llegar a las poblaciones vulnerables, promover la salud, apoyar la
              educación, atender emergencias y fomentar la inclusión y la paz.
            </p>
            <div className="mt-[30px] flex flex-wrap gap-3">
              {VALUES.map((v, i) => (
                <span
                  key={v}
                  className={`rounded-full border-2 border-[#1c4f9b] px-[22px] py-3 font-semibold ${
                    i % 2 === 1
                      ? "bg-[#1c4f9b] text-white"
                      : "bg-[#ffffff] dark:bg-[#122448]"
                  }`}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* El león original */}
        <section id="leon" className="scroll-mt-20 pb-[84px] pt-5">
          <div
            className={`${WRAP} grid items-center gap-x-14 min-[861px]:grid-cols-[1fr_1.2fr]`}
          >
            <h2
              className={`${sectionTitle} min-[861px]:col-start-1 min-[861px]:row-start-1 min-[861px]:self-end`}
            >
              El león original
            </h2>
            <p
              className={`${lead} min-[861px]:col-start-1 min-[861px]:row-start-2 min-[861px]:self-start`}
            >
              Antes de que hubiera más de 1,4 millones de Leones por todo el
              mundo, hubo un hombre con una gran visión. Un hombre de negocios
              de Chicago, Illinois, EE.UU., llamado Melvin Jones, que impulsado
              por una personalidad dinámica y un gran corazón, ayudó a crear un
              movimiento de servicio que 100 años después todavía sigue
              creciendo.
            </p>

            <figure className="m-0 mt-[30px] overflow-hidden rounded-[36px_36px_60px_36px] shadow-[12px_12px_0_#fdcb06] min-[861px]:col-start-2 min-[861px]:row-span-2 min-[861px]:row-start-1 min-[861px]:mt-0">
              <img
                src={originalLion1}
                alt="imagen de Melvin Jones"
                className="block h-auto w-full"
              />
            </figure>

            <div className="mt-[30px] flex flex-wrap gap-4 min-[861px]:col-span-2 min-[861px]:row-start-3 min-[861px]:mt-11">
              <Fact variant="navy">
                <b className={factB()}>+1,4 millones</b>
                <span>de Leones en todo el mundo</span>
              </Fact>
              <Fact variant="yellow">
                <b className={factB()}>100 años</b>
                <span>de un movimiento que sigue creciendo</span>
              </Fact>
            </div>
          </div>
        </section>

        {/* Melvin Jones */}
        <section id="melvin" className="scroll-mt-20 py-[84px]">
          <div className={WRAP}>
            <h2 className={sectionTitle}>Melvin Jones</h2>
            <div className="grid items-start gap-[34px] min-[861px]:grid-cols-[290px_1fr] min-[861px]:gap-14">
              <aside className="rounded-[28px] border-2 border-[#fdcb06] bg-[#ffffff] dark:bg-[#122448] px-7 pb-8 pt-7 min-[861px]:sticky min-[861px]:top-[88px]">
                <h3 className={`${D} mb-[22px] text-2xl`}>Fechas clave</h3>
                <Timeline items={DATES} compact />
              </aside>

              <div className="max-w-[68ch] [&_p]:mt-[18px] [&_p.lead]:mt-0">
                <p className={`lead ${lead}`}>
                  Melvin Jones era soñador, muy emprendedor y pragmático. Era un
                  vendedor enérgico y extrovertido que en su tiempo libre leía a
                  Shakespeare. ¿Qué mejor hombre para fundar la mayor asociación
                  de clubes de servicios?
                </p>
                <p>
                  En 1958, la Junta Directiva Internacional de nuestra
                  asociación designó oficialmente a Jones como el fundador de
                  los clubes de Leones, más de cuatro décadas después de que los
                  clubes de Leones celebraran su primera reunión. Pero,
                  independientemente de cuál fuera su título oficial, el impacto
                  de Jones en los Leones ha sido de gran alcance. Él proporcionó
                  el liderato, la capacidad organizativa, la tenacidad y el
                  músculo necesario que permitió que la Asociación Internacional
                  de Clubes de Leones llegara a ser lo que es hoy.
                </p>
                <p>
                  Jones nació el 13 de enero de 1879 en Fort Thomas, Arizona, un
                  puesto de vigilancia del ejército estadounidense, donde su
                  padre era centinela. Cuando tenía 7 años, toda la familia se
                  trasladó a Illinois. Dotado con una excelente voz de tenor,
                  consideró seguir una carrera musical, pero cambió de opinión y
                  se hizo vendedor de seguros.
                </p>
                <p>
                  Para el año 1913, Jones había formado su propia agencia de
                  seguros. Cuando ingresó en un club para hombres de negocios de
                  Chicago, llamado Business Circle, tomó la iniciativa de
                  reclutar a nuevos socios y de persuadir a los antiguos socios
                  a que volvieran a unirse al grupo. Pero el hecho de que el
                  club estuviera enfocado exclusivamente en los negocios no
                  agradó a Jones, cuya visión era diferente, más amplia.
                </p>
                <p>
                  Jones se preguntó: ¿qué sucedería si estos hombres exitosos
                  por su empuje, inteligencia y ambición pusieran todo su
                  talento al servicio de las comunidades en las que viven?
                  Imaginó un nuevo tipo de club con el deseo de ayudar a los
                  demás.
                </p>
                <p>
                  Como secretario del club de negocios, con la ayuda de su
                  esposa, la campeona de golf Rose Amanda Freeman, escribió
                  decenas de cartas a clubes de todo el país invitándolos a
                  adoptar su idea de una organización centrada en el servicio.
                  Los empresarios interesados en afiliarse se reunieron en
                  Chicago, Illinois y el 7 de junio de 1917 nació la Asociación
                  de Clubes de Leones.
                </p>
                <p>
                  Más adelante ese año, en la convención inaugural en Dallas,
                  Texas, Jones fue elegido secretario-tesorero, un título que
                  ostentó durante muchos años. Llegado el momento, la Junta
                  Directiva le concedió el título de secretario general de por
                  vida.
                </p>
                <p>
                  Jones fue un escritor prolífico que podía ser claro y
                  contundente en ocasiones, y sentimental en otras. Se nota su
                  influencia en los documentos de fundación como son los
                  Objetivos de los clubes de Leones y el código de ética. Sus
                  artículos en la revista LION, que todavía se citan hoy en día,
                  ayudaron a articular los principios y valores de la
                  organización.
                </p>

                <figure className="my-[34px]! overflow-hidden rounded-[36px_60px_36px_36px] shadow-[12px_12px_0_#fdcb06]">
                  <img
                    src={originalLion2}
                    alt="Melvin Jones en su oficina"
                    className="block h-auto w-full"
                  />
                </figure>

                <p>
                  También le encantaban los aforismos. Jones, que nunca fue
                  partidario de disfrazar la verdad, tenía un dicho favorito
                  enmarcado cuidadosamente en su oficina: “
                  <b className="font-semibold">
                    La verdad y las rosas tienen espinas
                  </b>
                  ”.
                </p>
                <p>
                  Jones abandonó el negocio de seguros para convertirse en el
                  director general de facto y embajador mundial de buena
                  voluntad de los Leones. Jugó ambos papeles espléndidamente,
                  desarrollando y administrando las operaciones de una sede en
                  expansión y viajando constantemente para visitar a los clubes
                  y dar conferencias. Nunca redujo el ritmo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Club Quibdó */}
        <section id="quibdo" className="scroll-mt-20 py-[84px]">
          <div className={WRAP}>
            <h2 className={sectionTitle}>Club de Leones Quibdó, Chocó</h2>

            <div className="mt-[30px] flex max-w-[620px] flex-wrap gap-4">
              <Fact variant="navy">
                <b className={factB(true)}>17 feb 1956</b>
                <span>Fecha de fundación de nuestro club</span>
              </Fact>
              <Fact variant="yellow">
                <b className={factB(true)}>22</b>
                <span>
                  ciudadanos fundadores, en su mayoría comerciantes y médicos
                </span>
              </Fact>
            </div>

            <p className={`${lead} mt-[30px] max-w-[62ch]`}>
              Nuestro Club fue fundado el 17 de febrero de 1956 por un grupo de
              22 ciudadanos, en su mayoría comerciantes y médicos. Desde su
              fundación hemos servido incansablemente a nuestros hermanos que lo
              necesitan en Quibdó y el departamento del Chocó, por medio de
              proyectos:
            </p>

            <div className="mt-[34px] grid gap-5 min-[861px]:grid-cols-[1.2fr_0.8fr]">
              <article className="rounded-[40px_40px_40px_8px] bg-[#0e2d5e] p-[34px] text-white">
                <span aria-hidden="true" className="mb-2 block text-[2.2rem]">
                  🩺
                </span>
                <h3 className={`${D} mb-2.5 text-[1.7rem]`}>Salud</h3>
                <p>
                  En sus inicios la labor social estuvo orientada a ofrecer
                  servicios de salud, lo cual es comprensible si se tiene en
                  cuenta el recurso humano con que disponía.
                </p>
                <ul className="m-0 mt-3.5 grid gap-2 pl-[1.2em]">
                  {HEALTH.map((item) => (
                    <li key={item} className="pj-li">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[40px_40px_8px_40px] bg-[#fdcb06] p-[34px] text-[#0e2d5e]">
                <span aria-hidden="true" className="mb-2 block text-[2.2rem]">
                  📚
                </span>
                <h3 className={`${D} mb-2.5 text-[1.7rem]`}>Educación</h3>
                <p>
                  Construcción de la Escuela Melvin Jones, en el Barrio El
                  Jardín, en donde se desarrolla el programa Leones Educando, a
                  través del cual se les enseña a los niños habilidades y
                  destrezas para el éxito diario, y otros servicios.
                </p>
              </article>
            </div>

            <div className="mt-14 grid gap-5 min-[701px]:grid-cols-2">
              <div className="rounded-[28px] bg-[#0e2d5e] p-[34px] text-white">
                <h3 className={`${D} mb-2.5 text-[1.6rem]`}>Misión</h3>
                <p>
                  Transformar vidas mediante la solidaridad, el servicio
                  voluntario y el apoyo a iniciativas con impacto positivo y
                  duradero.
                </p>
              </div>
              <div className="rounded-[28px] border-2 border-[#fdcb06] bg-[#ffffff] dark:bg-[#122448] p-[34px] text-[#16213a] dark:text-[#eaf0fb]">
                <h3 className={`${D} mb-2.5 text-[1.6rem]`}>Visión</h3>
                <p>
                  Ser una comunidad fuerte, unida y solidaria en Quibdó y el
                  Chocó, donde nadie quede sin apoyo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
