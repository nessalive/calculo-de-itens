//dados para o piquenique
document.addEventListener('DOMContentLoaded', function() {
 const dadosPessoas = JSON.parse(localStorage.getItem('dadosPessoas'));
 const dadosPiquenique = JSON.parse(localStorage.getItem('dadosPiquenique'));
 if (dadosPessoas && dadosPiquenique) {
     exibirResultado(dadosPessoas, dadosPiquenique);
 } else {
  //redirecionar para a primeira tela se não tiver dados (avisar as meninas)
     window.location.href = 'terceiraTela.html';
 }
});

function exibirResultado(dadosPessoas, dadosPiquenique) {

 document.querySelector('.sanduiches-quantidade').textContent = calcularQuantidadeSanduiches(dadosPessoas);
 document.querySelector('.pipoca-quantidade').textContent = calcularQuantidadePipoca(dadosPessoas);
 document.querySelector('.torradas-quantidade').textContent = calcularQuantidadeTorradas(dadosPessoas);
 document.querySelector('.salgados-quantidade').textContent = calcularQuantidadeSalgados(dadosPessoas);
 document.querySelector('.gelo-quantidade').textContent = calcularQuantidadeGelo(dadosPessoas);
 document.querySelector('.refrigerante-quantidade').textContent = calcularQuantidadeRefrigerante(dadosPessoas);
 document.querySelector('.agua-quantidade').textContent = calcularQuantidadeAgua(dadosPessoas);
 document.querySelector('.frutas-quantidade').textContent = calcularQuantidadeFrutas(dadosPessoas);
}

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

//modo escuro