// FORMULÁRIO DE CADASTRO

// Localiza o formulário pelo ID
const formulario = document.getElementById("formCadastro");

// Executa quando o usuário tenta enviar o formulário
formulario.addEventListener("submit", function(event) {

    // Impede o comportamento padrão do formulário
    event.preventDefault();

    // Exibe uma mensagem para o usuário
    alert("Agendamento realizado com sucesso!");

});