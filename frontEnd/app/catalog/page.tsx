'use client'
import { useEffect, useState } from 'react'
import { Inseto } from '@/types/Inseto'
import Link from 'next/link'
import { insetosExemplo } from '@/utils/exemplos'
import InsetoComponente from '@/components/InsetoComponente'

export default function Home() {
    const [insetos, setInsetos] = useState<Inseto[]>([])

    useEffect(() => {
        const dados = localStorage.getItem('insetos')
        if (dados) {
            setInsetos(JSON.parse(dados))
        } else {
            localStorage.setItem('insetos', JSON.stringify(insetosExemplo))
            setInsetos(insetosExemplo)
        }
    }, [])

    const remover = (id: number) => {
        const novos = insetos.filter(i => i.id !== id)
        setInsetos(novos)
        localStorage.setItem('insetos', JSON.stringify(novos))
    }

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <main className="max-w-2xl mx-auto p-6 space-y-4">
                <h1 className="text-2xl font-bold text-amber-400">Catálogo de Insetos</h1>
                <Link href="/catalog/new" className="text-green-600">+ Adicionar Inseto</Link>
                <ul className="space-y-3">
                    {insetos.map(inseto => (
                        <InsetoComponente key={inseto.id} inseto={inseto} onDelete={remover} />
                    ))}
                </ul>
            </main>
        </main>
    )
}