<?php 
    include("../php_conecta.php");

    $nome = $_POST["nome"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $comando = $pdo->prepare("INSERT INTO usuario(nome,cpf,email,senha) VALUES ('$nome', '$cpf','$email', '$senha')");

    $resultado = $comando->execute();
 
    //para voltar no fomulário:
    header("Location: ../cartao/cartão.html");
?>