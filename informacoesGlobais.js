const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas/1e9)
    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) *100)
    const porcentagemConectada = ((pessoasConectadas/pessoasMundo)*100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = "Com o fechamento das lojas físicas por conta da pandemia, o e-commerce brasileiro teve um aumento de 68% nas vendas. E esse crescimento permaneceu mesmo com a reabertura do mercado. Afinal, a expectativa para este ano é de um aumento de 132% em relação ao período pré-pandemia."
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()

