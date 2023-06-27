<?php 
    include("../php_conecta.php");

    $titulo = $_POST("titulo");
    $descricao = $_POST("descricao");
    $imagem = file_get_contents($_FILES["imagem"]["tmp_name"]);

    $comando = $pdo->prepare("INSERT INTO filme(TITULO,DESCRICAO,imagem) VALUES ('$titulo', '$descricao', '$imagem')");
    

    $resultado = $comando->execute();
 
    header("Location: adm_filme.html");
?>