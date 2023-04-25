function ValidacaoNum()
    {
        var regex = /^(\d{4}[- ]){3}\d{4}|\d{16}$/g;
        // (\d{4}[- ]){3}      quatro números seguidos e um espaço ou "-" 
        //                     repetidos 3 vezes.
        texto = num_cartao.value;
        resposta = regex.test(texto);
        if(resposta == false)
        {
            num_cartao.classList.remove('certo');
            num_cartao.classList.add('errado');
        }
        if(resposta == true)
        {
            num_cartao.classList.remove('errado');
            num_cartao.classList.add('certo');
        }
    }

function ValidacaoCVV()
    {
        var regex = /^(\d{3})$/g;
        texto = cvv.value;
        resposta = regex.test(texto);
        if(resposta == false)
        {
            cvv.classList.remove('certo');
            cvv.classList.add('errado');
        }
        if(resposta == true)
        {
            cvv.classList.remove('errado');
            cvv.classList.add('certo');
        }
    }

function ValidarBandeira()
    {
        if(cartao.value == 'credito')
        {
            document.getElementById('bandeira').style.display = 'flex';
        }
        if(cartao.value == 'debito')
        {
            document.getElementById('bandeira').style.display = 'none';
        }
    }