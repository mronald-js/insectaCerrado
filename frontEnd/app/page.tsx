import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <Image
        src="/images/logo.png"
        alt="InsectaCerrado Logo"
        width={200}
        height={200}
      />
      <h1 className="text-6xl font-bold text-amber-400 mb-4">InsectaCerrado</h1>
      <p className="text-xl text-amber-600">
        Sistema de catalogação de insetos do Cerrado Brasileiro
      </p>
      <button className="mt-8">
        <a
          href="/catalog"
          className=" px-6 py-4 bg-amber-700 text-white rounded-lg hover:bg-amber-500 transition-colors"
        >
          Acessar Catálogo
        </a>
      </button>
    </main>
  );
}
