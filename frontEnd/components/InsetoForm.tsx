'use client'
import { Inseto } from '@/types/Inseto'
import { useState } from 'react'
import UploadImagem from './UploadImage'

interface Props {
  initial?: Inseto
  onSubmit: (inseto: Inseto) => void
}

export default function InsetoForm({ initial, onSubmit }: Props) {
  const [imagemBase64, setImagemBase64] = useState<string | null>(null)

  const [form, setForm] = useState<Inseto>({
    id: initial?.id ?? Date.now(),
    nomeComum: initial?.nomeComum ?? '',
    nomeCientifico: initial?.nomeCientifico ?? '',
    localizacao: initial?.localizacao ?? '',
    observacoes: initial?.observacoes ?? '',
    imagemBase64: imagemBase64 ?? '',
    imagemURL: initial?.imagemURL ?? '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(form) }} className="space-y-4">
      <input name="nomeComum" placeholder="Nome comum" value={form.nomeComum} onChange={handleChange} className="border w-full p-2" required />
      <input name="nomeCientifico" placeholder="Nome científico" value={form.nomeCientifico} onChange={handleChange} className="border w-full p-2" required />
      <input name="localizacao" placeholder="Localização" value={form.localizacao} onChange={handleChange} className="border w-full p-2" />
      <textarea name="observacoes" placeholder="Observações" value={form.observacoes} onChange={handleChange} className="border w-full p-2" />
      
      <div>
        <label className="block mb-1">URL da Imagem:</label>
        <input name="imagemURL" value={form.imagemURL} onChange={(e) => {
          setForm({ ...form, imagemURL: e.target.value, imagemBase64: '' })
        }} className="border w-full p-2" />
      </div>

      <UploadImagem onImageSelect={(base64) => {
        setImagemBase64(base64)
        setForm({ ...form, imagemBase64: base64 })
      }} />

      <button className="bg-green-600 text-white px-4 py-2 rounded">{initial ? 'Atualizar' : 'Cadastrar'}</button>
    </form>
  )
}
