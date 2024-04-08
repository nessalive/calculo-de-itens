document.addEventListener('DOMContentLoaded', function() {
 const form = document.getElementById('cadastroForm');

 form.addEventListener('submit', function(event) {
     // Captura os valores dos campos
     const nome = document.getElementById('nome').value.trim();
     const email = document.getElementById('email').value.trim();
     const senha = document.getElementById('senha').value.trim();

     // Validação dos campos
     if (nome === '') {
         alert('Por favor, insira seu nome.');
         return;
     }

     if (!validarEmail(email)) {
         alert('Por favor, insira um e-mail válido.');
         return;
     }

     if (senha === '') {
         alert('Por favor, insira sua senha.');
         return;
     }

     // Salva os dados no localStorage
     const dadosUsuario = {
         nome: nome,
         email: email,
         senha: senha
     };

     localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));

     // Redireciona para a próxima página
     window.location.href = '../segundaTela.html'; 
 });
});

// Função para validar o formato do e-mail
function validarEmail(email) {
 const re = /\S+@\S+\.\S+/;
 return re.test(email);
}
