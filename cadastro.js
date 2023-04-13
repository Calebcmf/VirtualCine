function ValidacaoSenha()
    {
        var regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
        texto= senha.value;
        resposta= regex.test(texto);
        if(resposta==false)
        {
            senha.classList.remove('certo');
            senha.classList.add('errado');
            document.getElementById("erro").style.display = "flex";
        }
        if(resposta==true)
        {
            document.getElementById("erro").style.display = "none";
            senha.classList.remove('errado');
            senha.classList.add('certo');
        }
    }
    function ValidacaoEmail() 
    {
        var regex = /^\S+@\S+\.\S+$/;
        texto= email.value;
        resposta= regex.test(texto);
        if(resposta==false)
        {
            email.classList.remove('certo');
            email.classList.add('errado');
        }
        if(resposta==true)
        {
            email.classList.remove('errado');
            email.classList.add('certo');
        }
    }
    function ValidacaoCPF()
    {
        var regex = /^[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{2}$/g;
        texto= cpf.value;
        resposta= regex.test(texto);
        if(resposta==false)
        {
            cpf.classList.remove('certo');
            cpf.classList.add('errado');
        }
        if(resposta==true)
        {
            cpf.classList.remove('errado');
            cpf.classList.add('certo');
        }
    }