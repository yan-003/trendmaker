const API_KEY = "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"; // só para teste

async function gerarPost(){
    const prompt = document.getElementById("prompt").value;
    if(!prompt) return alert("Digite o tema do post!");
    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${API_KEY}`
            },
            body:JSON.stringify({model:"text-davinci-003", prompt, max_tokens:150})
        });
        const data = await response.json();
        document.getElementById("resultadoText").innerText = data.choices[0].text;
    } catch(e){
        console.error(e);
        alert("Erro ao gerar post");
    }
}

async function gerarImagem(){
    const prompt = document.getElementById("promptImagem").value;
    if(!prompt) return alert("Digite a descrição da imagem!");
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations", {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${API_KEY}`
            },
            body:JSON.stringify({prompt, n:1, size:"512x512"})
        });
        const data = await response.json();
        document.getElementById("imagemPost").src = data.data[0].url;
    } catch(e){
        console.error(e);
        alert("Erro ao gerar imagem");
    }
}
