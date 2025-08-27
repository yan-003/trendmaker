// Backend Node.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = "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"; // Coloque aqui sua chave OpenAI

app.post('/gerar-texto', async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens: 150
            })
        });
        const data = await response.json();
        res.json({ texto: data.choices[0].text });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

app.post('/gerar-imagem', async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                prompt: prompt,
                n: 1,
                size: "512x512"
            })
        });
        const data = await response.json();
        res.json({ url: data.data[0].url });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
