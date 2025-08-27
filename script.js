// ⚠️ Substitua 'SUA_API_KEY' pela sua chave OpenAI
const API_KEY = "SUA_API_KEY";

async function gerarPost() {
    const prompt = document.getElementById("prompt").value;
    if (!prompt) return alert("Digite o tema do post!");

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
    document.getElementById("resultadoText").innerText = data.choices[0].text;
}

async function gerarImagem() {
    const prompt = document.getElementById("promptImagem").value;
    if (!prompt) return alert("Digite a descrição da imagem!");

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
    document.getElementById("imagemPost").src = data.data[0].url;
}

