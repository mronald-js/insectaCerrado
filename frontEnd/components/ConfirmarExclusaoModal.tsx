type Props = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export default function ConfirmarExclusaoModal({ isOpen, onClose, onConfirm }: Props) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-50 h-full">
      <div className="bg-white p-6 rounded shadow-xl w-[90%] max-w-sm">
        <h2 className="text-lg font-semibold mb-4">Confirmar exclusão</h2>
        <p className="mb-6">Tem certeza que deseja excluir este inseto? Essa ação não poderá ser desfeita.</p>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 rounded border border-gray-400">
            Cancelar
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Excluir
          </button>
        </div>
      </div>
    </div>
  )
}
