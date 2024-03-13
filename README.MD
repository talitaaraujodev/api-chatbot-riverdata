<div align="center">

# Desafio Técnico Backend - Riverdata

Esse projeto faz parte do desafio técnico da Riverdata, e consiste em uma API REST desenvolvida em Node.js, na qual é possível utilizar um chat conversional integrando o modelo de linguagem LLAMA 2.

</div>

## 📋 Pré Requisitos

- Baixar o modelo de linguagem do LLAMA no seguinte link: https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/resolve/main/llama-2-7b-chat.Q2_K.gguf ;
- Criar uma pasta chamada models no mesmo nível da pasta src e colar o modelo baixado anteriormente nessa pasta;
- Ter o Docker instalado na sua máquina, pois toda a aplicação será subida em containers no Docker;
- Crie um arquivo .env seguindo a estrutura do .env.example;

## ⚙️ Como rodar o projeto?

1. Crie a imagem no Docker

```bash
npm run docker:build
```

2. Execute o contêiner no Docker

```bash
npm run docker:run
```

## 🚀 Utilizando a API

Após seguir os passos acima, será possível fazer as requisições POST utilizando os endpoints abaixo:

- "POST /chat": http://localhost:4009/chat

### 1. Endpoint POST /chat:

Esse endpoint receberá como parâmetro, um JSON com o prompt (String) com a pergunta/dúvida do usuário para IA, como no exemplo abaixo:

```json
{
  "prompt": "O que é AWS Lambda?"
}
```

## 👋 Documentação

Acesse a documentação pela seguinte url abaixo:

```bash
http://localhost:4009/docs
```

## 🎯 Tecnologias Utilizadas

<p>
  <img style='margin: 5px;' src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</p>

<br><br>

### 👩🏽‍💻 Desenvolvido por Talita Araujo

<div align="left">
  <a href = "mailto:talitacumi.araujo@gmail.com"><img src="https://img.shields.io/badge/-Gmail-db4a39?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/talitaaraujodev" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
</div>
