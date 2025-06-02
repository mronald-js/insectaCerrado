export default function Catalog(){
    return (
        <div className="flex flex-col items-center min-h-screen bg-white p-4 gap-8">
            <div className="flex gap-4 flex-wrap justify-center">
                <div className="h-60 w-60 bg-amber-600 mx-auto mt-12">
                    <h1>InsetoExemplo</h1>
                </div>
                <div className="h-60 w-60 bg-amber-600 mx-auto mt-12">
                    <h1>InsetoExemplo</h1>
                </div>
                <div className="h-60 w-60 bg-amber-600 mx-auto mt-12">
                    <h1>InsetoExemplo</h1>
                </div>
            </div>
            <button>
                <a
                    href="/"
                >
                    <div className="px-6 py-4 bg-amber-700 text-white rounded-lg hover:bg-amber-500 transition-colors">
                        Voltar para o Início
                    </div>
                </a>
            </button>
        </div>
    )
}