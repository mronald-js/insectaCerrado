# InsectaCerrado

Sistema de catalogação de insetos do Cerrado Brasileiro desenvolvido como projeto para INF - UFG.

## Descrição

O **InsectaCerrado** é uma aplicação web construída com [Next.js](https://nextjs.org/) que permite cadastrar, visualizar, editar e remover espécies de insetos típicos do Cerrado. O sistema utiliza armazenamento local do navegador (localStorage) para persistência dos dados e oferece uma interface amigável para gerenciamento do catálogo.

## Funcionalidades

!OBSS - A funcionalidade em questão contempla a RF03 definida no documento final do projeto! (Requisito Funcional 03 - Cadastro de Obserações)

- Listagem de insetos cadastrados com visualização em cards.
- Cadastro de novas espécies com upload de imagem (URL ou base64).
- Edição dos dados de espécies já cadastradas.
- Remoção de espécies com confirmação.
- Visualização detalhada de cada inseto em modal.
- Dados de exemplo carregados automaticamente no primeiro acesso.
- Interface responsiva e moderna com Tailwind CSS.

## Estrutura do Projeto

```
app/
  layout.tsx           # Layout global da aplicação
  page.tsx             # Página inicial
  globals.css          # Estilos globais
  catalog/
    page.tsx           # Listagem do catálogo
    new/page.tsx       # Cadastro de nova espécie
    edit/[id]/page.tsx # Edição de espécie existente
components/
  catalogue.tsx        # Componente de listagem de insetos
  InsectCard.tsx       # Card individual do inseto
  Details.tsx          # Modal de detalhes do inseto
  InsetoForm.tsx       # Formulário de cadastro/edição
  UploadImage.tsx      # Upload de imagem (base64)
  ConfirmarExclusaoModal.tsx # Modal de confirmação de exclusão
  footer.tsx           # Rodapé
lib/
  insetoStorage.tsx    # Funções utilitárias para manipulação do localStorage
types/
  Inseto.tsx           # Interface TypeScript para o modelo de inseto
utils/
  exemplos.ts          # Dados de exemplo de insetos
public/
  images/              # Imagens estáticas (logo, exemplos)
```

## Como rodar o projeto

### Pré requisitos
1. Ter o node instalado

### Passo a passo

1. Clone o projeto em sua máquina/acessa a pasta "FrontEnd"

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

4. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

(Em caso de erro, tente instalar separadamente a biblioteca do next, npm i next)

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Organização dos Dados

Os insetos são representados pela interface [`Inseto`](types/Inseto.tsx), contendo campos como `id`, `nomeComum`, `nomeCientifico`, `familia`, `descricao`, `imagemURL`, `imagemBase64`, entre outros.

O armazenamento é feito no localStorage, utilizando as funções utilitárias de [`lib/insetoStorage.tsx`](lib/insetoStorage.tsx).

## Observações
Os modelos de inseto listados são exemplos e podem não corresponder, o foco é a funcionalidade

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para sugerir melhorias ou corrigir problemas.

---

Desenvolvido por INF - UFG.
Autores: Marcello Ronald, Libna Rafely, Nicoly Liechiesk, Lucas, Matheus Augusto
