# 🌩️ NodeStorm

NodeStorm é um servidor simples e rápido construído com **Node.js** e **Express.js**.

## 🚀 Tecnologias  

Este projeto foi desenvolvido com as seguintes tecnologias:  
- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  

## 📦 Instalação  

1. Clone o repositório:  
   ```sh
   git clone https://github.com/SEU-USUARIO/nodestorm.git
   cd nodestorm
   ```  
2. Instale as dependências:  
   ```sh
   npm install
   ```  

## ▶️ Como rodar o servidor  

```sh
npm start
```
O servidor estará rodando em:  
👉 **http://localhost:3000/**  

## 📌 Rotas disponíveis  

### **GET /**
Retorna uma mensagem de boas-vindas.  

**Exemplo de resposta:**  
```json
{
  "message": "Bem-vindo ao NodeStorm!"
}
```

### **GET /saudacao/:nome**
Retorna uma saudação personalizada com o nome enviado na URL.  

**Exemplo de requisição:**  
```sh
curl http://localhost:3000/saudacao/João
```
**Exemplo de resposta:**  
```json
{
  "message": "Olá, João! Bem-vindo ao NodeStorm."
}
```

## 🛠️ Como contribuir  

1. Faça um fork do repositório  
2. Crie uma branch com sua feature: `git checkout -b minha-feature`  
3. Commit suas mudanças: `git commit -m "Minha nova feature"`  
4. Faça um push para a branch: `git push origin minha-feature`  
5. Abra um Pull Request  

## 📜 Licença  

Este projeto está sob a licença **MIT**.  

