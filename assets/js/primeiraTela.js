const localStorageNome = "dadosPessoas";
const nome = document.querySelector('.nome');
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const form = document.querySelector('.formulario-inicio');

 // Armazene os valores no localStorage
form.addEventListener('submit', (event) => {
event.preventDefault()
localStorage.setItem('nome', JSON.stringify(nome.value));
localStorage.setItem('email', JSON.stringify(email.value));
localStorage.setItem('senha', JSON.stringify(senha.value));
window.location.href = '/segundaTela.html'
})
// Função para validar o formato do e-mail
function validarEmail(email) {
 const re = /\S+@\S+\.\S+/;
 return re.test(email);
}

