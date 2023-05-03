<?php 
    include("../php_conecta.php");

    $titular = $_POST["titular"];
    $numero = $_POST["num_cartao"];
    $cvv = $_POST["cvv"];
    $valid = $_POST["valid"];

    $comando = $pdo->prepare("INSERT INTO cartao(titular,num_cartao,cvv,validade) VALUES ('$titular', '$numero','$cvv', '$valid')");

    $resultado = $comando->execute();
 
    //para voltar no fomulário:
    header("Location: ../endereco/endereco.html");
?>