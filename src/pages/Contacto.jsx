import Header from "../components/Header.jsx";
import { useState } from "react";

const EMAIL_CONTACTO = "clubdeleonesquibdomonarca@hotmail.com";

const MOTIVOS = [
  "Quiero ser voluntario",
  "Necesito apoyo",
  "Quiero donar",
  "Otro",
];

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    motivo: MOTIVOS[0],
    mensaje: "",
    _honey: "",
  });

  const [estado, setEstado] = useState({
    tipo: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Protección antispam.
    if (form._honey) return;

    if (enviando) return;

    setEnviando(true);
    setEstado({ tipo: "", mensaje: "" });

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${EMAIL_CONTACTO}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            nombre: form.nombre.trim(),
            email: form.email.trim(),
            motivo: form.motivo,
            mensaje: form.mensaje.trim(),
            _replyto: form.email.trim(),
            _subject: `Mensaje desde la web: ${form.motivo}`,
            _template: "table",
            _captcha: "false",
          }),
        },
      );

      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error(
          "El servicio de correo devolvió una respuesta inesperada.",
        );
      }

      if (
        !response.ok ||
        data.success === false ||
        data.success === "false" ||
        data.success === "error"
      ) {
        throw new Error(
          data.message || "El servicio no pudo procesar el mensaje.",
        );
      }

      setForm({
        nombre: "",
        email: "",
        motivo: MOTIVOS[0],
        mensaje: "",
        _honey: "",
      });

      setEstado({
        tipo: "ok",
        mensaje:
          "¡Gracias! Tu mensaje fue enviado correctamente. Te responderemos pronto.",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);

      setEstado({
        tipo: "err",
        mensaje:
          error.message ||
          "No pudimos enviar el mensaje. Inténtalo nuevamente o escríbenos a ferchosoftwaredev@gmail.com.",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f9fd] text-[#16213a]">
      <Header />

      {/* Encabezado de la página */}
      <section className="relative overflow-hidden bg-[#1c4f9b] pb-[110px] pt-[70px] text-white">
        <div className="mx-auto max-w-[1140px] px-6">
          <h1 className="font-['Bricolage_Grotesque'] text-[clamp(2.7rem,6.5vw,4.6rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            Contáctanos
          </h1>

          <p className="mt-[14px] max-w-[54ch] text-[1.35rem] leading-[1.7] opacity-95">
            Cuéntanos cómo quieres ayudar, o qué apoyo necesitas.
          </p>
        </div>

        {/* Onda inferior */}
        <svg
          className="absolute bottom-[-1px] left-0 block h-[60px] w-full"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 50C320 100 560 0 860 40s380 40 580-10V90H0z"
            fill="#0b1833"
          />
        </svg>
      </section>

      {/* Formulario e información de contacto */}
      <section className="bg-[#0b1833] py-[84px] text-white">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 items-start gap-[30px] px-6 md:grid-cols-2 md:gap-14">
          <form id="cf" className="grid gap-5" onSubmit={handleSubmit}>
            <label className="grid gap-[8px] text-[1.15rem] font-semibold">
              Nombre
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                autoComplete="name"
                className="w-full rounded-[14px] border-2 border-[#dbe3f1] bg-white px-4 py-[16px] text-[1.1rem] font-normal text-[#16213a] outline-none transition-colors focus:border-[#1c4f9b]"
              />
            </label>

            <label className="grid gap-[8px] text-[1.15rem] font-semibold">
              Correo
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="w-full rounded-[14px] border-2 border-[#dbe3f1] bg-white px-4 py-[16px] text-[1.1rem] font-normal text-[#16213a] outline-none transition-colors focus:border-[#1c4f9b]"
              />
            </label>

            <label className="grid gap-[8px] text-[1.15rem] font-semibold">
              Motivo
              <select
                name="motivo"
                value={form.motivo}
                onChange={handleChange}
                className="w-full rounded-[14px] border-2 border-[#dbe3f1] bg-white px-4 py-[16px] text-[1.1rem] font-normal text-[#16213a] outline-none transition-colors focus:border-[#1c4f9b]"
              >
                {MOTIVOS.map((motivo) => (
                  <option key={motivo} value={motivo}>
                    {motivo}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-[8px] text-[1.15rem] font-semibold">
              Mensaje
              <textarea
                name="mensaje"
                rows={5}
                value={form.mensaje}
                onChange={handleChange}
                required
                className="w-full resize-y rounded-[14px] border-2 border-[#dbe3f1] bg-white px-4 py-[16px] text-[1.1rem] font-normal text-[#16213a] outline-none transition-colors focus:border-[#1c4f9b]"
              />
            </label>

            {/* Campo antispam oculto */}
            <div className="hidden" aria-hidden="true">
              <label>
                No completar este campo
                <input
                  type="text"
                  name="_honey"
                  value={form._honey}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <button
              className="inline-block w-fit cursor-pointer rounded-full border-0 bg-[#fdcb06] px-[32px] py-[17px] font-['Bricolage_Grotesque'] text-[1.2rem] font-bold text-[#0e2d5e] shadow-[0_6px_0_#c9a200] transition-transform hover:-translate-y-[3px] disabled:cursor-wait disabled:opacity-60"
              type="submit"
              disabled={enviando}
            >
              {enviando ? "Enviando…" : "Enviar mensaje"}
            </button>

            <p
              id="st"
              role="status"
              aria-live="polite"
              className={`m-0 min-h-[1.6em] text-[1.05rem] font-semibold ${
                estado.tipo === "ok"
                  ? "text-white"
                  : estado.tipo === "err"
                    ? "text-[#ff8d7d]"
                    : ""
              }`}
            >
              {estado.mensaje}
            </p>
          </form>

          {/* Datos de contacto */}
          <div className="grid gap-[24px] rounded-[32px] bg-[#0e2d5e] p-[30px] text-white sm:p-[38px]">
            <h2 className="font-['Bricolage_Grotesque'] text-[1.9rem] font-bold leading-[1.25] tracking-[-0.02em]">
              Estamos en Quibdó, Chocó
            </h2>

            <p className="break-words text-[1.1rem] leading-[1.7]">
              <b className="mb-1 block text-[1.15rem] text-[#fdcb06]">Correo</b>

              <a
                href={`mailto:${EMAIL_CONTACTO}`}
                className="transition-opacity hover:opacity-80"
              >
                {EMAIL_CONTACTO}
              </a>
            </p>

            <p className="text-[1.1rem] leading-[1.7]">
              <b className="mb-1 block text-[1.15rem] text-[#fdcb06]">
                Dirección
              </b>
              Calle 31 Nº 1-01, Quibdó, Colombia
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
