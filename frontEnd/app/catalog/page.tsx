// pages/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Inseto } from '@/types/Inseto';
import { insetosExemplo } from '@/utils/exemplos';
import Catalog from '@/components/catalogue';
import Link from 'next/link';

export default function Home() {
  const [insetos, setInsetos] = useState<Inseto[]>([]);

  //Atualização para mesclar o localStorage e os dados de insetosExemplo
  useEffect(() => {
  const dados = localStorage.getItem('insetos');
  let insetosCarregados: Inseto[] = [];

  if (dados) {
    insetosCarregados = JSON.parse(dados);
    // Mesclar os dados do localStorage com insetosExemplo, priorizando insetosExemplo
    const novosInsetos = insetosExemplo.filter(
      (exemplo) => !insetosCarregados.some((inseto) => inseto.id === exemplo.id)
    );
    insetosCarregados = [...insetosCarregados, ...novosInsetos];
    // Atualizar com as alterações em insetosExemplo para os IDs existentes
    insetosCarregados = insetosCarregados.map(
      (inseto) => insetosExemplo.find((ex) => ex.id === inseto.id) || inseto
    );
  } else {
    insetosCarregados = insetosExemplo;
  }

  setInsetos(insetosCarregados);
  localStorage.setItem('insetos', JSON.stringify(insetosCarregados));
}, []);

  const remover = (id: number) => {
    const novos = insetos.filter((i) => i.id !== id);
    setInsetos(novos);
    localStorage.setItem('insetos', JSON.stringify(novos));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mx-auto p-6 space-y-4 w-full max-w-6xl">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-400">Catálogo de Insetos</h1>
          <Link href="/catalog/new" className="px-6 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-500 transition-colors font-semibold">
            + Adicionar Inseto
          </Link>
        </div>
        <Catalog insetos={insetos} onDelete={remover} />
      </div>
    </main>
  );
}