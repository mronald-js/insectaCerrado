// @/types/Inseto.ts
export interface Inseto {
  id: number;
  imagemURL?: string; // Para suportar URLs de imagem
  imagemBase64?: string; // Para suportar imagens em base64
  familia: string; // Para o campo "family" do catalogue.tsx
  nomeComum: string; // Para o campo "name" do catalogue.tsx
  descricao: string; // Para o campo "description" do catalogue.tsx
  nomeCientifico?: string; // Opcional, do InsetoComponente.tsx
  localizacao?: string; // Opcional, do InsetoComponente.tsx
  observacoes?: string; // Opcional, do InsetoComponente.tsx
}