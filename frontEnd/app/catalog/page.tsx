import Catalog from "@/components/catalogue";

export default function CatalogPage() {
    return (
        <main className="flex flex-col items-center min-h-screen bg-white p-4">
        <h1 className="text-6xl font-bold text-amber-400 mt-12 mb-4">Catálogo de Insetos</h1>
        <p className="text-xl text-amber-600 mb-8">
            Explore a diversidade dos insetos do Cerrado Brasileiro
        </p>
        <Catalog />
        
        </main>
    );
    }