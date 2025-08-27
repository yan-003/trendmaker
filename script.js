async function gerarPost() {
    const prompt = document.getElementById("prompt").value;
    if(!prompt) return alert("Digite o tema do post!");

    try {
        const response = await fetch("http://localhost:3000/gerar-texto", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });
        const data = await response.json();
        document.getElementById("resultadoText").innerText = data.texto;
    } catch (error) {
        console.error(error); alert("Erro ao gerar post!");
    }
}

async function gerarImagem() {
    const prompt = document.getElementById("promptImagem").value;
    if(!prompt) return alert("Digite a descrição da imagem!");

    try {
        const response = await fetch("http://localhost:3000/gerar-imagem", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt })
        });
        const data = await response.json();
        document.getElementById("imagemPost").src = data.url;
    } catch (error) {
        console.error(error); alert("Erro ao gerar imagem!");
    }
}
