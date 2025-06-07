// @/components/InsectCard.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ConfirmarExclusaoModal from '@/components/ConfirmarExclusaoModal';
import Details from '@/components/Details'; // Importe o componente Details
import { Inseto } from '@/types/Inseto';

interface InsectCardProps {
  inseto: Inseto;
  onDelete: (id: number) => void;
}

export default function InsectCard({ inseto, onDelete }: InsectCardProps) {
  const [modalAberto, setModalAberto] = useState(false);
  const [detailsAberto, setDetailsAberto] = useState(false); // Estado para o modal de detalhes

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);
  const confirmarExclusao = () => {
    onDelete(inseto.id);
    fecharModal();
  };

  const abrirDetails = () => setDetailsAberto(true);
  const fecharDetails = () => setDetailsAberto(false);

  const srcImagem = inseto.imagemBase64 || inseto.imagemURL || '/images/placeholder.jpg';

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col justify-between group">
        <div className="relative">
          <img
            src={srcImagem}
            alt={inseto.nomeComum}
            width={400}
            height={250}
            className="object-cover w-full h-56 transition-all duration-300 group-hover:brightness-90"
          />
          <span className="absolute top-3 left-3 bg-amber-700 text-white text-xs px-3 py-1 rounded-full shadow">
            {inseto.familia}
          </span>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center p-5">
          <h3 className="text-xl font-bold text-amber-700">{inseto.nomeComum}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
              Habitat: {inseto.localizacao || 'Cerrado'}
            </span>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">Tamanho: Pequeno</span>
          </div>
          <div className="flex gap-2 mt-4 self-end">
            <Link
              href={`/catalog/edit/${inseto.id}`}
              className="px-3 py-1 border border-amber-700 text-amber-700 rounded-full font-semibold text-xs hover:bg-amber-700 hover:text-white transition-all"
            >
              Editar
            </Link>
            <button
              className="px-3 py-1 border border-red-500 text-red-500 rounded-full font-semibold text-xs hover:bg-red-500 hover:text-white transition-all"
              onClick={abrirModal}
            >
              Remover
            </button>
            <button
              onClick={abrirDetails}
              className="px-3 py-1 border border-amber-700 text-amber-700 rounded-full font-semibold text-xs hover:bg-amber-700 hover:text-white transition-all"
            >
              Ver mais
            </button>
          </div>
        </div>
      </div>

      <ConfirmarExclusaoModal
        isOpen={modalAberto}
        onClose={fecharModal}
        onConfirm={confirmarExclusao}
      />
      <Details
        inseto={inseto}
        isOpen={detailsAberto}
        onClose={fecharDetails}
      />
    </>
  );
}