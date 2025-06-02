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
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
            <div className="bg-gray-100">
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={200}
                    className="object-cover w-full h-48"
                />
            </div>
            <div className="flex flex-col gap-2 items-center justify-center border-b p-4">
                <span className="text-xs text-gray-500 uppercase tracking-widest">{family}</span>
            </div>
            <footer className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500 mb-2">{description}</p>
                <button className="self-start px-4 py-1 border border-customSpan text-customSpan rounded-full transition-all duration-300 hover:bg-customSpan hover:text-white">Ver mais</button>
            </footer>
        </div>
    )
}

export default function Catalog(){
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
                <div className=" cursor-pointer grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full max-w-6xl mx-auto">
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