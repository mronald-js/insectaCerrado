import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-emerald-300 p-4">
      <Image
        src="/images/logo.png"
        alt="InsectaCerrado Logo"
        width={200}
        height={200}
      />
      <h1 className="text-6xl font-bold text-green-700 mb-4">InsectaCerrado</h1>
      <p className="text-xl text-gray-700">
        Sistema de catalogação de insetos do Cerrado Brasileiro
      </p>
      <button className="mt-8">
        <a
          href="/catalog"
          className=" px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Acessar Catálogo
        </a>
      </button>
    </main>
  );
}
