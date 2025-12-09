# 🐦 Flappy Bird - Edição JS

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</div>

<br />

<div align="center">
  <p>
    Uma recriação fiel do icônico jogo Flappy Bird, construída com <strong>JavaScript Puro (Vanilla)</strong> moderno.
    <br />
    Refatorado com Módulos ES6 e Classes para um código limpo, fácil de manter e performático.
  </p>
</div>

---

## 🎮 Sobre o Projeto

Este projeto é uma peça de portfólio demonstrando como construir um motor de jogo completo do zero usando apenas tecnologias web padrão. Ele replica a física, detecção de colisão e o loop de jogo do original, mantendo padrões de código modernos.

### ✨ Funcionalidades Principais

- **Física Suave**: Gravidade e mecânica de pulo personalizadas que parecem exatamente como o original.
- **Colisão Pixel Perfect**: Hitboxes precisas para o pássaro, canos e chão.
- **Sistema de Pontuação**: Rastreia sua pontuação atual e salva sua **Melhor Pontuação** (High Score).
- **Medalhas**: Ganhe medalhas diferentes (Bronze, Prata, Ouro, Platina) com base no seu desempenho.
- **Efeitos Sonoros**: Áudio imersivo para pulos, pontuação e colisões.
- **Arquitetura Modular**: Código organizado em `Entidades`, `Telas` e `Gerenciadores` para fácil escalabilidade.
- **Entrada Multiplataforma**: Jogue com Teclado (Espaço/Seta para Cima), Clique do Mouse ou Toque.

## 🚀 Como Rodar

Como este projeto usa **Módulos ES6** (`import`/`export`), navegadores modernos exigem que ele seja servido através de um servidor web (devido a políticas de CORS). Você não pode simplesmente clicar duas vezes no `index.html`.

### Opção 1: Usando VS Code (Recomendado)

1. Instale a extensão **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)**.
2. Clique com o botão direito no `index.html` no explorador de arquivos.
3. Selecione **"Open with Live Server"**.

### Opção 2: Usando Python

Se você tem Python instalado, pode iniciar um servidor simples pelo terminal:

```bash
# Navegue até a pasta docs
cd docs

# Python 3
python3 -m http.server 8000
```

Depois abra `http://localhost:8000` no seu navegador.

### Opção 3: Usando Node.js

```bash
npx serve docs
```

## 🕹️ Controles

| Ação                | Tecla / Entrada                                          |
| :------------------ | :------------------------------------------------------- |
| **Pular / Iniciar** | `Barra de Espaço`, `Seta para Cima` ou `Clique Esquerdo` |
| **Reiniciar**       | Clique na tela de "Game Over" ou "Start"                 |

## 📂 Estrutura do Projeto

O código está organizado para demonstrar separação de responsabilidades:

```
docs/
├── scripts/
│   ├── entities/       # Objetos do jogo (Pássaro, Cano, Fundo, etc.)
│   ├── main.js         # Ponto de entrada e Loop do Jogo
│   ├── screens.js      # Gerenciamento de estado das telas (Início, Jogo, Game Over)
│   └── utils.js        # Funções auxiliares (Detecção de colisão, etc.)
├── efeitos-sonoros/    # Arquivos de áudio
├── imagens/            # Arquivos de imagem
└── index.html          # Arquivo HTML principal
```

## 📝 Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.

---
