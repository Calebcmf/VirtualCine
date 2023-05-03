<?php 
    include("../php_conecta.php");

    $cep = $_POST["cep"];
    $rua = $_POST["lougadouro"];
    $bairro = $_POST["bairro"];
    $cidade = $_POST["cidade"];
    $uf = $_POST["estado"];
    $numero = $_POST["numero_endereco"];

    $comando = $pdo->prepare("INSERT INTO endereco(cep,lougadouro,bairro,cidade,estado,numero_endereco) VALUES ('$cep', '$rua','$bairro', '$cidade', '$uf', '$numero')");

    $resultado = $comando->execute();
 
    //para voltar no fomulário:
    header("Location: ../filmes/tela_filmes.html");
?>