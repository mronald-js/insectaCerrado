'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { getInsetoPorId, atualizarInseto } from '@/lib/insetoStorage'
import InsetoForm from '@/components/InsetoForm'
import { Inseto } from '@/types/Inseto'

export default function Editar() {
  const [inseto, setInseto] = useState<Inseto | null>(null)
  const { id } = useParams()
  const router = useRouter()

  useEffect(() => {
    const encontrado = getInsetoPorId(Number(id))
    if (encontrado) setInseto(encontrado)
  }, [id])

  if (!inseto) return <p className="p-6">Espécie não encontrada.</p>

  return (
    <div className="p-6 max-w-xl flex flex-col justify-center items-center mx-auto min-h-screen">
      <h2 className="text-xl font-bold mb-4">Editar Espécie</h2>
      <InsetoForm initial={inseto} onSubmit={(novo) => {
        atualizarInseto(novo)
        router.push('/')
      }} />
    </div>
  )
}