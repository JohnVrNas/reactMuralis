# **Documentação do Projeto React - Formulário de Cadastro**

## **Índice**
1. [Introdução](#introdução)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Componentes](#componentes)
5. [Scripts](#scripts)
6. [Melhorias Futuras](#melhorias-futuras)

---

## **Introdução**
Este projeto React consiste em um formulário interativo que permite o cadastro de informações de um estudante, como nome, curso, estado e cidade, com opções dinâmicas baseadas em seleção. A interface foi criada para demonstrar conceitos de controle de estado usando `useState`.

### **Funcionalidades**
- Seleção dinâmica de estado e cidade.
- Renderização de opções de curso.
- Validação da interação por estado (desabilitar cidades sem estado selecionado).

---

## **Configuração do Ambiente**

### **1. Clone este repositório:**
   
- git clone https://github.com/seu-usuario/react-formulario.git

### **2. Instale as dependências:**

    npm install
    # ou
    yarn install

### **3. Inicie o projeto npm start:**

    npm start
    # ou
    yarn start

### **4. Acesse o navegador:**

    http://localhost:3000


## **Estrutura do Projeto**
    react-formulario/
    ├── public/
    │   ├── index.html        # Arquivo HTML principal
    │   └── favicon.ico       # Ícone do projeto
    ├── src/
    │   ├── App.css           # Estilos do componente principal
    │   ├── App.js            # Componente principal do formulário
    │   ├── App.test.js       # Testes para o App.js
    │   ├── index.css         # Estilos globais
    │   ├── index.js          # Ponto de entrada do React
    │   ├── reportWebVitals.js# Métricas de performance (opcional)
    │   ├── setupTests.js     # Configuração de testes
    ├── package.json          # Configurações do projeto e dependências
    └── README.md             # Documentação do projeto


## **Componentes**
### **Componente Formulário**

Localização: App.js
Este é o componente principal responsável por renderizar o formulário e gerenciar o estado dinâmico das seleções. Ele utiliza o hook useState para controlar os estados de estado (região) e cidade.

Estados
    estado: Gerencia o estado selecionado.
    cidade: Gerencia a cidade selecionada.
Funções
    handleEstadoChange: Atualiza o estado selecionado e reseta a cidade ao mudar o estado.
    Renderiza as opções dinâmicas de curso, estado e cidade.
Estrutura
    Nome: Campo de entrada simples.
    Curso: Dropdown com cursos estáticos.
    Estado: Dropdown com estados brasileiros.
    Cidade: Dropdown com cidades dinâmicas baseadas no estado selecionado.
