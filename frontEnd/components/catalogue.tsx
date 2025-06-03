'use client';
import Image from "next/image";
import Link from 'next/link'

// Componente reutilizável para o card do inseto
interface InsectCardProps {
    image: string;
    family: string;
    name: string;
    description: string;
}

function InsectCard({ image, family, name, description }: InsectCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col justify-between group">
            <div className="relative">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={250}
                    className="object-cover w-full h-56 transition-all duration-300 group-hover:brightness-90"
                />
                <span className="absolute top-3 left-3 bg-amber-700 text-white text-xs px-3 py-1 rounded-full shadow">
                    {family}
                </span>
            </div>
            <div className="flex flex-col gap-2 items-start justify-center p-5">
                <h3 className="text-xl font-bold text-amber-700">{name}</h3>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Habitat: Cerrado</span>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Tamanho: Pequeno</span>
                </div>
                <div className="flex gap-2 mt-4 self-end">
                    <button
                        className="px-3 py-1 border border-amber-700 text-amber-700 rounded-full font-semibold text-xs hover:bg-amber-700 hover:text-white transition-all"
                        onClick={() => alert('Editar inseto')}
                    >
                        Editar
                    </button>
                    <button
                        className="px-3 py-1 border border-red-500 text-red-500 rounded-full font-semibold text-xs hover:bg-red-500 hover:text-white transition-all"
                        onClick={() => alert('Remover inseto')}
                    >
                        Remover
                    </button>
                </div>
                <button className="mt-2 self-end px-5 py-2 border border-amber-700 text-amber-700 rounded-full font-semibold transition-all duration-300 hover:bg-amber-700 hover:text-white shadow">
                    Ver mais
                </button>
            </div>
        </div>
    )
}

export default function Catalog() {
    // Exemplo de dados dos insetos
    const insects = [
        {
            image: '/images/formiga_cerrado.jpg',
            family: 'Formicidae',
            name: 'Formiga do Cerrado',
            description: 'Espécie comum em áreas de cerrado, conhecida por sua organização social.'
        },
        {
            image: '/images/gafanhotoVerde.jpg',
            family: 'Acrididae',
            name: 'Gafanhoto Verde',
            description: 'Inseto saltador, importante para o equilíbrio ecológico.'
        },
        {
            image: '/images/cigarra.jpg',
            family: 'Cicadidae',
            name: 'Cigarra',
            description: 'Famosa pelo canto alto durante o verão.'
        }
    ];

    return (
        <div className="flex flex-col items-center min-h-screen bg-white p-4 gap-8">
            <section className="fadeAnimation h-auto mt-10 hiddenAnimation w-full">
                <div className="flex justify-end max-w-6xl w-full mb-4">
                    <button
                        className="px-6 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-500 transition-colors font-semibold"
                        onClick={() => alert('Adicionar novo inseto')}
                    >
                        Adicionar
                    </button>
                </div>
                <div className="cursor-pointer grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full max-w-6xl mx-auto">
                    {insects.map((insect, idx) => (
                        <InsectCard key={idx} {...insect} />
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Link href="/">
                        <div className="px-6 py-4 bg-amber-700 text-white rounded-lg hover:bg-amber-500 transition-colors cursor-pointer">
                            Voltar para o Início
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}