const express = require('express');
const app = express();
const port = 3000;

// Rota principal
app.get('/', (req, res) => {
    res.send('Olá, mundo! Este é um servidor Node.js com Express.');
});

// Rota dinâmica
app.get('/saudacao/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send(`Olá, ${nome}! Bem-vindo ao nosso servidor.`);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
