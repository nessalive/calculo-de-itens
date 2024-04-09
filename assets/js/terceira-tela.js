document.addEventListener('DOMContentLoaded', function() {
    const dadosPessoas = JSON.parse(localStorage.getItem('calculoItens'));

    // Verifica se há dados salvos no localStorage
    if (dadosPessoas) {
        calcularEExibirResultado(dadosPessoas);
    } else {
        // Redireciona para a primeira tela se não houver dados
        window.location.href = 'segundaTela.html';
    }
});

function exibirResultado(dadosPessoas) {
    // Atualiza os elementos HTML com os resultados salvos no localStorage
    document.querySelector('.qntHomem').textContent = dadosPessoas.qntHomem;
    document.querySelector('.qntMulher').textContent = dadosPessoas.qntMulher;
    document.querySelector('.qntCrianca').textContent = dadosPessoas.qntCrianca;
}

function calcularEExibirResultado(dadosPessoas) {
    // Chama as funções de cálculo e armazena os resultados em variáveis
    const quantidadeSanduiches = calcularQuantidadeSanduiches(dadosPessoas);
    const quantidadePipoca = calcularQuantidadePipoca(dadosPessoas);
    const quantidadeTorradas = calcularQuantidadeTorradas(dadosPessoas);
    const quantidadeSalgados = calcularQuantidadeSalgados(dadosPessoas);
    const quantidadeGelo = calcularQuantidadeGelo(dadosPessoas);
    const quantidadeRefrigerante = calcularQuantidadeRefrigerante(dadosPessoas);
    const quantidadeAgua = calcularQuantidadeAgua(dadosPessoas);
    const quantidadeFrutas = calcularQuantidadeFrutas(dadosPessoas);

    // Atualiza os elementos HTML com os resultados calculados
    document.querySelector('.sanduiches-quantidade').textContent = quantidadeSanduiches;
    document.querySelector('.pipoca-quantidade').textContent = quantidadePipoca;
    document.querySelector('.torradas-quantidade').textContent = quantidadeTorradas;
    document.querySelector('.salgados-quantidade').textContent = quantidadeSalgados;
    document.querySelector('.gelo-quantidade').textContent = quantidadeGelo;
    document.querySelector('.refrigerante-quantidade').textContent = quantidadeRefrigerante;
    document.querySelector('.agua-quantidade').textContent = quantidadeAgua;
    document.querySelector('.frutas-quantidade').textContent = quantidadeFrutas;
}

// Funções de cálculo da quantidade de itens do piquenique
function calcularQuantidadeSanduiches(dadosPessoas) {
    const homens = dadosPessoas.homens || 0;
    const mulheres = dadosPessoas.mulheres || 0;
    const criancas = dadosPessoas.criancas || 0;
    return ((0.4 * homens) + (0.32 * mulheres) + (0.20 * criancas)).toFixed(2) + " KG";
}

function calcularQuantidadePipoca(dadosPessoas) {
    const adultos = dadosPessoas.adultos || 0;
    const criancas = dadosPessoas.criancas || 0;
    return (2 * adultos + 1 * criancas) + " pacotes";
}

function calcularQuantidadeTorradas(dadosPessoas) {
    const totalPessoas = (dadosPessoas.homens || 0) + (dadosPessoas.mulheres || 0) + (dadosPessoas.criancas || 0);
    return (1 * totalPessoas) + " KG";
}

function calcularQuantidadeSalgados(dadosPessoas) {
    const totalPessoas = (dadosPessoas.homens || 0) + (dadosPessoas.mulheres || 0) + (dadosPessoas.criancas || 0);
    return (0.04 * totalPessoas) + " KG";
}

function calcularQuantidadeGelo(dadosPessoas) {
    const totalPessoas = (dadosPessoas.homens || 0) + (dadosPessoas.mulheres || 0) + (dadosPessoas.criancas || 0);
    return (5 * Math.ceil(totalPessoas / 10)) + " KG";
}

function calcularQuantidadeRefrigerante(dadosPessoas) {
    const totalPessoas = (dadosPessoas.homens || 0) + (dadosPessoas.mulheres || 0) + (dadosPessoas.criancas || 0);
    return Math.ceil(totalPessoas / 5) + " garrafas de 2L";
}

function calcularQuantidadeAgua(dadosPessoas) {
    const totalPessoas = (dadosPessoas.homens || 0) + (dadosPessoas.mulheres || 0) + (dadosPessoas.criancas || 0);
    return Math.ceil(totalPessoas / 5) + " garrafas de 1L";
}

function calcularQuantidadeFrutas(dadosPessoas) {
    const totalPessoas = (dadosPessoas.homens || 0) + (dadosPessoas.mulheres || 0) + (dadosPessoas.criancas || 0);
    return (3 * totalPessoas) + " pacotes de 600ml";
}
