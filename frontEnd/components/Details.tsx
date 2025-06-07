// @/components/Details.tsx
import { Inseto } from '@/types/Inseto';

interface DetailsProps {
  inseto: Inseto;
  isOpen: boolean;
  onClose: () => void;
}

export default function Details({ inseto, isOpen, onClose }: DetailsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-[80%] max-w-4xl h-[80vh] overflow-y-auto p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>
        <h1 className="text-3xl font-bold text-amber-700 mb-4">{inseto.nomeComum}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={inseto.imagemBase64 || inseto.imagemURL || '/images/placeholder.jpg'}
              alt={inseto.nomeComum}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <p><strong>Nome Científico:</strong> {inseto.nomeCientifico}</p>
            <p><strong>Família:</strong> {inseto.familia}</p>
            <p><strong>Localização:</strong> {inseto.localizacao || 'Não especificado'}</p>
            <p><strong>Descrição:</strong> {inseto.descricao}</p>
            <p><strong>Observações:</strong> {inseto.observacoes || 'Sem observações'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}