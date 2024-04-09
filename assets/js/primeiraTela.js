const localStorageNome = "dadosPessoas";
const nome = document.querySelector('.nome');
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');

let values = JSON.parse(localStorage.getItem(localStorageNome) || "[ ]");

values.push({
 nome: nome.value,
 email: email.value,
 senha: senha.value,
})

 // Armazene os valores no localStorage
localStorage.setItem('nome', JSON.stringify(values));
localStorage.setItem('email', JSON.stringify(values));
localStorage.setItem('senha', JSON.stringify(values));

// Função para validar o formato do e-mail
function validarEmail(email) {
 const re = /\S+@\S+\.\S+/;
 return re.test(email);
}

