//cria um objeto com os dados sobre a hora
var date = new Date();
//gera uma string com essas informações
let dataHoje = date.toLocaleDateString(
    //a linguagem
    "pt-br", 
    //o formato
    {
        day:"numeric", 
        month:"numeric", 
        year:'numeric'
    }
);
var emocao = '';
var emocaoImg = '';
var valor = '';
//função do jQuery que mostra na página


//define o que acontece ao iniciar a página
