const localStorageNome = "calculoItens";

const isClarobtn = document.querySelector(".isClaro");

const homemBtn = document.querySelector(".homem");
const menosbtn = document.querySelector(".menosH");
const maisbtn = document.querySelector(".maisH");
const telaH = document.querySelector(" .pHomem");

const mulherBtn = document.querySelector(".mulher");
const menosM = document.querySelector(".menosM");
const maisM = document.querySelector(".maisM");
const telaM = document.querySelector(" .pMulher");


const criancaBtn = document.querySelector(".crianca");
const menosC = document.querySelector(".menosC");
const maisC = document.querySelector(".maisC");
const telaC = document.querySelector(" .pCrianca");


const body = document.querySelector("body");

//trocar de tema
let trocacor = () => {
    // Recuperar o valor do localStorage e converter para booleano
    const isClaroString = localStorage.getItem('isClaro');
    const isClaro = isClaroString === 'true';

    // Verificar se o valor é true ou false antes de aplicar o tema
    if (isClaro) {
        console.log("entrou no if")
        
    } else {
        console.log("entrou no else")
    }
}


//
let countH = 0;
let countM = 0;
let countC = 0;

//Atualizar tela
let atualizarH = () => {
    telaH.innerHTML = countH;
    localStorage.setItem('qntHomem', countH.toString());
};

//incremento
maisbtn.addEventListener('click', () =>{
        countH += 1;
        atualizarH();
})

//decremento
menosbtn.addEventListener('click', () =>{
    if(countH > 0){
        countH -= 1;
        atualizarH();
    }
})



let atualizarM = () => {
    telaM.innerHTML = countM;
    localStorage.setItem('qntMulher', countM.toString());
};

maisM.addEventListener('click', () =>{
        countM += 1;
        atualizarM();
})

menosM.addEventListener('click', () =>{
    if(countM > 0){
        countM -= 1;
        atualizarM();
    }
})


let atualizarC = () => {
    telaC.innerHTML = countC;
    localStorage.setItem('qntCrianca', countC.toString());
};

maisC.addEventListener('click', () =>{
        countC += 1;
        atualizarC();
})

menosC.addEventListener('click', () =>{
    if(countC > 0){
        countC -= 1;
        atualizarC();
    }
})


// Adicionar um evento de clique ao botão de alternância de tema
isClarobtn.addEventListener("click", () => {
    console.log("apertou o botão")
    // Inverter o valor de isClaro e salvá-lo no localStorage
    const isClaroString = localStorage.getItem('isClaro');
    const isClaro = isClaroString === 'true';
    localStorage.setItem('isClaro', (!isClaro).toString());

    trocacor();
}, false);

// Chamar a função trocacor ao carregar a página para aplicar o tema salvo
document.addEventListener("DOMContentLoaded", trocacor);
