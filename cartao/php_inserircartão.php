<?php 
    include("../php_conecta.php");

    $titular = $_POST["titular"];
    $numero = $_POST["num_cartao"];
    $cvv = $_POST["cvv"];
    $valid = $_POST["valid"];
    $cartao = $_POST["cartao"];
    $plano = $_POST["plano"];


    $comando = $pdo->prepare("INSERT INTO cartao(titular,num_cartao,cvv,validade,cartao,plano) VALUES ('$titular', '$numero','$cvv', '$valid', '$cartao', '$plano')");

    $resultado = $comando->execute();
 
    //para voltar no fomulário:
    header("Location: ../aprovacao/aprovacao_pagamento.html");
?>