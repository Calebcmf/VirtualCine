function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisarCep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="";
        document.getElementById('bairro').value="";
        document.getElementById('cidade').value="";
        document.getElementById('uf').value="";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};


/* A função limpa_formulário_cep() é responsável por limpar os valores dos campos de endereço quando o usuário digitar um novo CEP.

A função meu_callback(conteudo) é o callback que será chamado pelo webservice quando ele retornar os dados do 
endereço correspondente ao CEP digitado pelo usuário. 

Se o CEP existir, essa função atualiza os campos de endereço com os valores obtidos. 
Se o CEP não existir, a função limpa_formulário_cep() é chamada para limpar os campos de endereço e um alerta é exibido na tela.

A função pesquisacep(valor) é a principal função do código, responsável por fazer a pesquisa do CEP e chamar as outras funções quando necessário. Ela recebe o valor digitado pelo usuário e segue os seguintes passos:

Primeiro, ela remove todos os caracteres não numéricos do valor digitado pelo usuário, para garantir que apenas números sejam enviados para a API do webservice.
Em seguida, ela verifica se o campo CEP está preenchido. Se estiver, ela segue para a próxima etapa, senão ela chama a função limpa_formulário_cep() para limpar os campos de endereço e encerra a execução.
Depois, ela utiliza uma expressão regular para validar o formato do CEP. A expressão regular exige que o CEP tenha exatamente 8 dígitos. Se o CEP digitado passar na validação, a função segue para a próxima etapa, senão ela chama a função limpa_formulário_cep() para limpar os campos de endereço e exibe um alerta informando que o formato do CEP é inválido.
Em seguida, a função pesquisacep() limpa os campos de endereço (rua, bairro, cidade e UF) e cria um elemento script com a URL da API do webservice, passando o CEP digitado e o nome da função callback como parâmetros. O elemento script é adicionado ao corpo do documento HTML, fazendo com que a API seja chamada e o retorno seja processado pela função meu_callback(conteudo).

*/