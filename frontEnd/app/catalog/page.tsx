import Catalog from "@/components/catalogue";

export default function CatalogPage() {
    return (
        <main className="flex flex-col items-center min-h-screen bg-white p-4">
        <h1 className="text-6xl font-bold text-amber-400 mt-12 mb-4">Catálogo de Insetos</h1>
        <p className="text-xl text-amber-600 mb-8">
            Explore a diversidade dos insetos do Cerrado Brasileiro
        </p>

        <div className="flex w-full max-w-4xl mb-8">
            <input
                type="text"
                placeholder="Buscar insetos..."
                className="w-full p-2 border font-semibold text-amber-900 border-gray-300 rounded"
            />
            <select className="ml-2 p-2 border border-gray-300 text-amber-900 rounded">
                <option value="">Ordenar por</option>
                <option value="name">Nome</option>
                <option value="family">Família</option>
                <option value="habitat">Habitat</option>
                <option value="size">Tamanho</option>
            </select>
            <select className="ml-2 p-2 border border-gray-300 text-amber-900 rounded">
                <option value="">Filtrar por Família</option>
                <option value="coleoptera">Coleoptera</option>
                <option value="lepidoptera">Lepidoptera</option>
                <option value="hymenoptera">Hymenoptera</option>
                <option value="diptera">Diptera</option>
                <option value="orthoptera">Orthoptera</option>
                <option value="hemiptera">Hemiptera</option>
            </select>
        </div>

        <Catalog />
        
        </main>
    );
    }