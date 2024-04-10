// Recuperando os valores numéricos do LocalStorage
const qntHomem = parseInt(localStorage.getItem("qntHomem")) || 0;
const qntMulher = parseInt(localStorage.getItem("qntMulher")) || 0;
const qntCrianca = parseInt(localStorage.getItem("qntCrianca")) || 0;

// Recuperar valores do localStorage
const nome = JSON.parse(localStorage.getItem('nome'));
const email = JSON.parse(localStorage.getItem('email'));

// Selecionar elementos HTML onde você deseja exibir os valores
const nomeElement = document.querySelector('.nome-form');
const emailElement = document.querySelector('.email-form');

// Exibir valores do nome e email na tela
// foi melhor não colocar a senha e mantela salva só no LocalStorage
nomeElement.textContent = nome;
emailElement.textContent = email;

// aqui vai as funções de exibir os resultados na tela
// somando a quantidade de pessoas e o quanto cada uma precisa levar para o piquenique 
// Uso das funções com os valores recuperados do LocalStorage
const quantidadeSanduiches = calcularQuantidadeSanduiches(qntHomem, qntMulher, qntCrianca);
const quantidadePipoca = calcularQuantidadePipoca(qntHomem, qntMulher, qntCrianca);
const quantidadeTorradas = calcularQuantidadeTorradas(qntHomem, qntMulher, qntCrianca);
const quantidadeSalgados = calcularQuantidadeSalgados(qntHomem, qntMulher, qntCrianca);
const quantidadeGelo = calcularQuantidadeGelo(qntHomem, qntMulher, qntCrianca);
const quantidadeRefrigerante = calcularQuantidadeRefrigerante(qntHomem, qntMulher, qntCrianca);
const quantidadeAgua = calcularQuantidadeAgua(qntHomem, qntMulher, qntCrianca);
const quantidadeFrutas = calcularQuantidadeFrutas(qntHomem, qntMulher, qntCrianca);

 // Funções de cálculo de itens do piquenique
 function calcularQuantidadeSanduiches(homens, mulheres, criancas) {
    return ((0.4 * homens) + (0.32 * mulheres) + (0.20 * criancas)).toFixed(2) + " KG";
}

function calcularQuantidadePipoca(adultos, criancas) {
    return (2 * adultos + 1 * criancas) + " pacotes";
}

function calcularQuantidadeTorradas(homens, mulheres, criancas) {
    const totalPessoas = homens + mulheres + criancas;
    return (1 * totalPessoas) + " KG";
}

function calcularQuantidadeSalgados(homens, mulheres, criancas) {
    const totalPessoas = homens + mulheres + criancas;
    return (0.04 * totalPessoas) + " KG";
}

function calcularQuantidadeGelo(homens, mulheres, criancas) {
    const totalPessoas = homens + mulheres + criancas;
    return (5 * Math.ceil(totalPessoas / 10)) + " KG";
}

function calcularQuantidadeRefrigerante(homens, mulheres, criancas) {
    const totalPessoas = homens + mulheres + criancas;
    return Math.ceil(totalPessoas / 5) + " garrafas de 2L";
}

function calcularQuantidadeAgua(homens, mulheres, criancas) {
    const totalPessoas = homens + mulheres + criancas;
    return Math.ceil(totalPessoas / 5) + " garrafas de 1L";
}

function calcularQuantidadeFrutas(homens, mulheres, criancas) {
    const totalPessoas = homens + mulheres + criancas;
    return (3 * totalPessoas) + " pacotes de 600ml";
}

// Exibir os resultados nas classes das células da tabela
document.querySelector('.sanduiches-quantidade').textContent = quantidadeSanduiches;
document.querySelector('.pipoca-quantidade').textContent = quantidadePipoca;
document.querySelector('.torradas-quantidade').textContent = quantidadeTorradas;
document.querySelector('.salgados-quantidade').textContent = quantidadeSalgados;
document.querySelector('.gelo-quantidade').textContent = quantidadeGelo;
document.querySelector('.refrigerante-quantidade').textContent = quantidadeRefrigerante;
document.querySelector('.agua-quantidade').textContent = quantidadeAgua;
document.querySelector('.frutas-quantidade').textContent = quantidadeFrutas;