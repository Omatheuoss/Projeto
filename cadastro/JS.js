const nome = document.getElementById('nome')
const adress = document.getElementById('adress')
const telefone = document.getElementById('telefone')
const nasc = document.getElementById('nasc')
const consulta = document.getElementById('consulta')
const horario = document.getElementById('horario')
const tipo = document.getElementById('tipo')
const profissional = document.getElementById('profissional')
const form = document.getElementById('formulario')
const enviar = document.getElementById('Cadastrar')

Cadastrar.addEventListener('click', (event) =>{

    event.preventDefault();

    if(senha.value == ''){

        alert('senha nao pode ser vazia')
        senha.classList = 'erro'
    }
    if(login.value == ''){
        
        alert('login nao pode ser vazia')
        login.classList = 'erro'
    }


})
