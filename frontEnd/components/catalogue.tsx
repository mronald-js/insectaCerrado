// @/components/Catalog.tsx
'use client';

import Link from 'next/link';
import InsectCard from '@/components/InsectCard';
import { Inseto } from '@/types/Inseto';

interface CatalogProps {
  insetos: Inseto[];
  onDelete: (id: number) => void;
}

export default function Catalog({ insetos, onDelete }: CatalogProps) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4 gap-8">
      <section className="fadeAnimation h-auto mt-10 hiddenAnimation w-full">
        <div className="flex justify-end max-w-6xl w-full mb-4">
          <Link
            href="/catalog/new"
            className="px-6 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-500 transition-colors font-semibold"
          >
            Adicionar
          </Link>
        </div>
        <div className="cursor-pointer grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full max-w-6xl mx-auto">
          {insetos.map((inseto) => (
            <InsectCard key={inseto.id} inseto={inseto} onDelete={onDelete} />
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
  );
}