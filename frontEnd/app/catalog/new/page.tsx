'use client'
import { useRouter } from 'next/navigation'
import InsetoForm from '@/components/InsetoForm'
import { adicionarInseto } from '@/lib/insetoStorage'

export default function NovaPagina() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col justify-center p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Cadastrar Nova Espécie</h2>
      <InsetoForm onSubmit={(inseto) => {
        adicionarInseto(inseto)
        router.push('/catalog')
      }} />
    </div>
  )
}