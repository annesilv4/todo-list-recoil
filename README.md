# 📝 Todo-List Recoil

Uma aplicação de gerenciamento de tarefas moderna, construída com **React** e **Recoil** para demonstrar o uso avançado de gerenciamento de estado.

## 🎯 Sobre o Projeto

Este projeto é uma lista de tarefas (Todo-List) que utiliza **Recoil** como biblioteca de gerenciamento de estado, oferecendo uma solução elegante e eficiente para compartilhar e sincronizar dados entre componentes React.

### Funcionalidades

- ✅ Adicionar novas tarefas
- ✏️ Editar tarefas existentes
- ❌ Remover tarefas
- 🔍 Filtrar tarefas por status (Todas, Pendentes, Concluídas)
- 💾 Gerenciamento de estado com Recoil Atoms e Selectors
- 🎨 Interface responsiva e intuitiva

## 🛠️ Tecnologias Utilizadas

- **React** 18.2.0 - Biblioteca JavaScript para construir interfaces
- **Recoil** 0.7.7 - Biblioteca de gerenciamento de estado do Facebook
- **Vite** 7.3.1 - Build tool moderno e rápido
- **JavaScript/JSX** - Linguagem de programação
- **CSS** - Estilização da aplicação

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── filter/           # Componente de filtro de tarefas
│   ├── taskForm/         # Formulário para adicionar tarefas
│   ├── taskItem/         # Item individual da tarefa
│   └── taskList/         # Lista de tarefas
├── atoms/
│   ├── task.js           # Atom para gerenciar tarefas
│   └── filterTask.js     # Atom para gerenciar filtro
├── selectors/
│   └── filterTaskSelector.js  # Selector para filtrar tarefas
├── App.jsx               # Componente principal
├── global.css            # Estilos globais
└── main.jsx              # Arquivo de entrada
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js versão 14+ instalado
- npm ou yarn como gerenciador de pacotes

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/annesilv4/todo-list-recoil.git
cd todo-list-recoil
```

2. Instale as dependências:

```bash
npm install
```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

### Preview da Aplicação

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## 🧪 Linting

Para verificar a qualidade do código:

```bash
npm run lint
```

## 🔑 Conceitos-Chave do Recoil

Este projeto demonstra o uso de:

- **Atoms** - Unidades de estado reutilizáveis que podem ser compartilhadas entre componentes
- **Selectors** - Funções que transformam ou derivam dados dos atoms
- **useRecoilState** - Hook para ler e escrever state
- **useRecoilValue** - Hook para ler state
- **useSetRecoilState** - Hook para escrever state

## 📚 Como Usar a Aplicação

1. **Adicionar Tarefa**: Digite a descrição da tarefa no formulário e clique em "Adicionar"
2. **Filtrar Tarefas**: Use os botões de filtro para visualizar todas, pendentes ou concluídas
3. **Marcar como Concluído**: Clique no checkbox da tarefa para marcar como completa
4. **Remover Tarefa**: Clique no botão de remover (X) para deletar a tarefa

## 👨‍💻 Desenvolvedor

- **Anne Carolayne Barbosa da Silva - Aluno de Desenvolvimento Full-Stack em Python**
