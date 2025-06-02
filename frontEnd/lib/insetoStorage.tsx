import { Inseto } from '@/types/Inseto'

const STORAGE_KEY = 'insetos'

export function getInsetos(): Inseto[] {
  if (typeof window === 'undefined') return []
  const dados = localStorage.getItem(STORAGE_KEY)
  return dados ? JSON.parse(dados) : []
}

export function salvarInsetos(insetos: Inseto[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(insetos))
}

export function adicionarInseto(inseto: Inseto) {
  const lista = getInsetos()
  lista.push(inseto)
  salvarInsetos(lista)
}

export function atualizarInseto(inseto: Inseto) {
  const lista = getInsetos().map(i => (i.id === inseto.id ? inseto : i))
  salvarInsetos(lista)
}

export function excluirInseto(id: number) {
  const lista = getInsetos().filter(i => i.id !== id)
  salvarInsetos(lista)
}

export function getInsetoPorId(id: number): Inseto | undefined {
  return getInsetos().find(i => i.id === id)
}