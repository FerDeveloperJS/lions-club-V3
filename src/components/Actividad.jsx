import { useEffect, useState } from "react";

/*
  Uso:

  import foto1 from "../assets/img/actividades/ancianato-1.webp";
  import foto2 from "../assets/img/actividades/ancianato-2.webp";

  <Actividad
    titulo="Sembrando sonrisas: nuestra huella de amor en el Ancianato Nicolás Medrano de Quibdó"
    descripcion="La solidaridad nos mueve, el pasado 16 de septiembre visitamos el Ancianato..."
    anio={2026}
    mes={9}          // número (1-12) o texto ("Septiembre")
    dia={16}         // opcional
    imagenes={[foto1, foto2]}   // o [{ src: foto1, alt: "Entrega de donación" }]
  />
*/

const MESES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const display =
  "font-['Bricolage_Grotesque'] leading-[1.08] tracking-[-0.02em]";

const nombreMes = (mes) => {
  if (typeof mes === "number") return MESES[mes - 1] ?? "";
  const n = Number(mes);
  if (!Number.isNaN(n) && String(mes).trim() !== "") return MESES[n - 1] ?? "";
  return String(mes ?? "");
};

const normalizar = (img, i, titulo) =>
  typeof img === "string"
    ? { src: img, alt: `${titulo} — foto ${i + 1}` }
    : { alt: `${titulo} — foto ${i + 1}`, ...img };

export default function Actividad({
  titulo,
  descripcion,
  imagenes = [],
  anio,
  mes,
  dia,
}) {
  const [abierta, setAbierta] = useState(null); // índice de la imagen abierta

  const fotos = imagenes.map((img, i) => normalizar(img, i, titulo));
  const [portada, ...resto] = fotos;

  const mesTexto = nombreMes(mes);
  const mesCorto = mesTexto.slice(0, 3);
  const fechaLarga = dia
    ? `${dia} de ${mesTexto.toLowerCase()} de ${anio}`
    : `${mesTexto} de ${anio}`;
  const fechaISO = [
    anio,
    String(
      typeof mes === "number" ? mes : MESES.indexOf(mesTexto) + 1,
    ).padStart(2, "0"),
    dia ? String(dia).padStart(2, "0") : null,
  ]
    .filter(Boolean)
    .join("-");

  const cerrar = () => setAbierta(null);
  const siguiente = () => setAbierta((i) => (i + 1) % fotos.length);
  const anterior = () =>
    setAbierta((i) => (i - 1 + fotos.length) % fotos.length);

  // Teclado y bloqueo de scroll mientras el visor está abierto
  useEffect(() => {
    if (abierta === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") cerrar();
      if (e.key === "ArrowRight") siguiente();
      if (e.key === "ArrowLeft") anterior();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [abierta, fotos.length]);

  const Miniatura = ({ foto, index, className = "", imgClassName = "" }) => (
    <button
      type="button"
      onClick={() => setAbierta(index)}
      aria-label={`Ampliar foto ${index + 1}`}
      className={`group relative block w-full cursor-zoom-in overflow-hidden border-0 bg-[#dbe3f1] p-0 ${className}`}
    >
      <img
        src={foto.src}
        alt={foto.alt}
        loading="lazy"
        className={`block w-full transition-transform duration-500 group-hover:scale-105 ${imgClassName}`}
      />
      <span
        aria-hidden="true"
        className="absolute bottom-3 right-3 grid h-[38px] w-[38px] scale-75 place-items-center rounded-full bg-[#fdcb06] font-['Bricolage_Grotesque'] text-[1.5rem] font-extrabold leading-none text-[#0e2d5e] opacity-0 transition group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
      >
        +
      </span>
    </button>
  );

  return (
    <article className="mx-auto w-full max-w-[1140px] px-6 py-14">
      {/* Cabecera: fecha + título */}
      <header className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <time
          dateTime={fechaISO}
          aria-label={fechaLarga}
          className="flex w-fit flex-none flex-col items-center rounded-[28px_28px_28px_8px] bg-[#0e2d5e] px-7 py-5 text-center text-white shadow-[8px_8px_0_#fdcb06]"
        >
          <span
            className={`${display} text-[2.8rem] font-extrabold leading-none text-[#fdcb06]`}
          >
            {dia ?? mesCorto}
          </span>
          <span className="mt-1 text-[0.95rem] font-semibold opacity-90">
            {dia ? `${mesTexto} ${anio}` : anio}
          </span>
        </time>

        <div className="min-w-0">
          <h3
            className={`${display} max-w-[28ch] text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold text-[#fdcb06]`}
          >
            {titulo}
          </h3>
          <p className="mt-4 max-w-[68ch] text-[1.12rem] leading-[1.7] text-white">
            {descripcion}
          </p>
        </div>
      </header>

      {/* Galería */}
      {portada && (
        <div className="mt-10">
          <div className={resto.length ? "" : "max-w-[760px]"}>
            <Miniatura
              foto={portada}
              index={0}
              className="rounded-[36px_36px_36px_10px] shadow-[0_0_0_1px_#dbe3f1,10px_10px_0_#fdcb06]"
              imgClassName={
                resto.length
                  ? "h-[clamp(240px,46vw,520px)] object-cover"
                  : "h-auto"
              }
            />
          </div>

          {resto.length > 0 && (
            <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {resto.map((foto, i) => (
                <div key={foto.src + i} className="mb-4 break-inside-avoid">
                  <Miniatura
                    foto={foto}
                    index={i + 1}
                    className={
                      i % 2 === 0
                        ? "rounded-[28px_28px_28px_8px] shadow-[0_0_0_1px_#dbe3f1]"
                        : "rounded-[28px_8px_28px_28px] shadow-[0_0_0_1px_#dbe3f1]"
                    }
                    imgClassName="h-auto"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Visor de imágenes */}
      {abierta !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Fotos de ${titulo}`}
          onClick={cerrar}
          className="fixed inset-0 z-50 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5 bg-[#050c1c]/95 px-3.5 pb-5 pt-14 text-white max-sm:grid-cols-1"
        >
          <button
            type="button"
            onClick={cerrar}
            aria-label="Cerrar"
            className="absolute right-3.5 top-3 grid h-11 w-11 cursor-pointer place-items-center rounded-full border-0 bg-[#fdcb06] font-['Bricolage_Grotesque'] text-[1.9rem] font-extrabold leading-none text-[#0e2d5e]"
          >
            ×
          </button>

          {fotos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                anterior();
              }}
              aria-label="Foto anterior"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border-0 bg-[#fdcb06] font-['Bricolage_Grotesque'] text-[1.9rem] font-extrabold leading-none text-[#0e2d5e] max-sm:hidden"
            >
              ‹
            </button>
          )}

          <figure
            onClick={(e) => e.stopPropagation()}
            className="m-0 grid min-w-0 justify-items-center gap-3"
          >
            <img
              src={fotos[abierta].src}
              alt={fotos[abierta].alt}
              className="max-h-[78vh] max-w-full rounded-2xl object-contain"
            />
            <figcaption className="font-semibold opacity-85">
              {abierta + 1} / {fotos.length}
            </figcaption>
          </figure>

          {fotos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                siguiente();
              }}
              aria-label="Foto siguiente"
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border-0 bg-[#fdcb06] font-['Bricolage_Grotesque'] text-[1.9rem] font-extrabold leading-none text-[#0e2d5e] max-sm:hidden"
            >
              ›
            </button>
          )}
        </div>
      )}
    </article>
  );
}
