import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <span className="font-syne font-800 text-[10rem] text-white/5 leading-none">404</span>
      <h1 className="font-syne font-700 text-2xl tracking-tighter text-[#111] mt-4 mb-4">
        Página no encontrada
      </h1>
      <p className="font-dm text-sm text-[#555] mb-10">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="px-8 py-3 border border-brand/50 text-[#111] font-dm text-sm tracking-wider hover:border-brand hover:bg-brand/10 transition-all duration-200"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
