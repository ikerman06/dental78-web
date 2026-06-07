"use client";
import { useState } from "react";

interface FormState {
  clinica: string;
  ciudad: string;
  telefono: string;
  mensaje: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    clinica: "",
    ciudad: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contacto",
          ...form,
        }).toString(),
      });

      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-brand/30 p-12 text-center">
        <div className="w-10 h-10 border border-brand mx-auto mb-6 flex items-center justify-center">
          <span className="text-brand text-sm">✓</span>
        </div>
        <h3 className="font-syne font-600 text-lg text-cream mb-3">Mensaje recibido</h3>
        <p className="font-dm text-sm text-accent">
          Nos pondremos en contacto contigo en un plazo máximo de 24 horas hábiles.
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="border border-red-900/30 p-12 text-center">
        <h3 className="font-syne font-600 text-lg text-cream mb-3">Error al enviar</h3>
        <p className="font-dm text-sm text-accent mb-6">
          Ha ocurrido un error. Llámanos directamente al 640 606 621.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-dm text-sm text-brand hover:text-cream transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="contacto"
      method="POST"
      data-netlify="true"
      className="space-y-6"
    >
      {/* Hidden field required by Netlify Forms */}
      <input type="hidden" name="form-name" value="contacto" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="font-dm text-xs tracking-widest text-brand uppercase block mb-2">
            Nombre de la clínica *
          </label>
          <input
            type="text"
            name="clinica"
            value={form.clinica}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-white/10 focus:border-brand/50 outline-none px-4 py-3 font-dm text-sm text-cream placeholder:text-brand/30 transition-colors duration-200"
            placeholder="Clínica Dental..."
          />
        </div>
        <div>
          <label className="font-dm text-xs tracking-widest text-brand uppercase block mb-2">
            Ciudad *
          </label>
          <input
            type="text"
            name="ciudad"
            value={form.ciudad}
            onChange={handleChange}
            required
            className="w-full bg-transparent border border-white/10 focus:border-brand/50 outline-none px-4 py-3 font-dm text-sm text-cream placeholder:text-brand/30 transition-colors duration-200"
            placeholder="Barcelona..."
          />
        </div>
      </div>

      <div>
        <label className="font-dm text-xs tracking-widest text-brand uppercase block mb-2">
          Teléfono de contacto *
        </label>
        <input
          type="tel"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          required
          className="w-full bg-transparent border border-white/10 focus:border-brand/50 outline-none px-4 py-3 font-dm text-sm text-cream placeholder:text-brand/30 transition-colors duration-200"
          placeholder="+34..."
        />
      </div>

      <div>
        <label className="font-dm text-xs tracking-widest text-brand uppercase block mb-2">
          Cuéntanos qué necesitas
        </label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows={5}
          className="w-full bg-transparent border border-white/10 focus:border-brand/50 outline-none px-4 py-3 font-dm text-sm text-cream placeholder:text-brand/30 transition-colors duration-200 resize-none"
          placeholder="Tipo de trabajos que realizáis habitualmente, volumen aproximado, si tenéis escáner intraoral..."
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="font-dm text-xs text-brand/50">* Campos obligatorios</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-8 py-3.5 border border-brand/50 text-cream font-dm text-sm tracking-wider hover:border-brand hover:bg-brand/10 transition-all duration-200 disabled:opacity-50"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
