'use client'
import { useState } from 'react'
import { Inseto } from '@/types/Inseto'
import Link from 'next/link'
import ConfirmarExclusaoModal from '@/components/ConfirmarExclusaoModal'

type Props = {
  inseto: Inseto
  onDelete: (id: number) => void
}

export default function InsetoComponente({ inseto, onDelete }: Props) {
  const [modalAberto, setModalAberto] = useState(false)

  const abrirModal = () => setModalAberto(true)
  const fecharModal = () => setModalAberto(false)
  const confirmarExclusao = () => {
    onDelete(inseto.id)
    fecharModal()
  }

  return (
    <>
      <li className="border p-3 rounded flex gap-4">
        {(inseto.imagemBase64 || inseto.imagemURL) && (
          <img
            src={inseto.imagemBase64 || inseto.imagemURL}
            alt={inseto.nomeComum}
            className="w-24 h-24 object-cover rounded"
          />
        )}
        <div className="flex-1">
          <strong>{inseto.nomeComum}</strong> — {inseto.nomeCientifico}
          <p className="text-sm text-gray-600">{inseto.localizacao}</p>
          <p className="text-sm">{inseto.observacoes}</p>
          <div className="mt-1 space-x-2">
            <Link href={`/catalog/edit/${inseto.id}`} className="text-blue-600">
              Editar
            </Link>
            <button onClick={abrirModal} className="text-red-600">
              Excluir
            </button>
          </div>
        </div>
      </li>

      <ConfirmarExclusaoModal
        isOpen={modalAberto}
        onClose={fecharModal}
        onConfirm={confirmarExclusao}
      />
    </>
  )
}
