import { useState } from 'react'
import Image from 'next/image'

export default function UploadImagem({ onImageSelect }: { onImageSelect: (base64: string) => void }) {
  const [preview, setPreview] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result as string
        setPreview(base64)
        console.log('Imagem carregada:', base64)
        onImageSelect(base64)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="mt-4">
      <label className="block mb-2 font-medium">Ou envie uma imagem:</label>
      <div className="flex items-center gap-4">
        <label className="cursor-pointer bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-800">
          Escolher imagem
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
        {preview && (
          <Image
            src={preview}
            alt="Pré-visualização"
            className="w-24 h-24 object-cover rounded border"
          />
        )}
      </div>
    </div>
  )
}
