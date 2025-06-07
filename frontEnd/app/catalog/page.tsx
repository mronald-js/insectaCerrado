// app/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { Inseto } from '@/types/Inseto';
import { insetosExemplo } from '@/utils/exemplos';
import Catalog from '@/components/catalogue';
import Link from 'next/link';

export default function Home() {
  const [insetos, setInsetos] = useState<Inseto[]>([]);

  useEffect(() => {
    try {
      const dados = localStorage.getItem('insetos');
      if (dados) {
        setInsetos(JSON.parse(dados));
      } else {
        localStorage.setItem('insetos', JSON.stringify(insetosExemplo));
        setInsetos(insetosExemplo);
      }
    } catch (error) {
      console.error('Erro ao carregar insetos do localStorage:', error);
      localStorage.setItem('insetos', JSON.stringify(insetosExemplo));
      setInsetos(insetosExemplo);
    }
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
        </div>
        <Catalog insetos={insetos} onDelete={remover} />
      </div>
    </main>
  );
}