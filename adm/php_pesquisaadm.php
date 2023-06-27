<?php 
    include("../php_conecta.php");

    $id = $_POST("id")
    $nome = $_POST["nome"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];
    $id = $_POST("num_cartao")
    $id = $_POST("titular")
    $id = $_POST("cvv")
    $id = $_POST("data_valid")
    $id = $_POST("forma_pag")

    $comando = $pdo->prepare("SELECT id,nome,cpf,email,senha,foto,id_cartao FROM `usuario` WHERE nome = '$nome'");
    

    $resultado = $comando->execute();
?>