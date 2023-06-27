<?php 
    include("../php_conecta.php");

    $titulo = $_POST["titulo"];
    $descricao = $_POST["descricao"];
    $imagem = file_get_contents($_FILES["imagem"]["tmp_name"]);

    $comando = $pdo->prepare("INSERT INTO filme(titulo,descricao,imagem) VALUES (:titulo, :descricao, :imagem)");
    $comando->bindParam(":titulo", $titulo);
    $comando->bindParam(":descricao", $descricao);
    $comando->bindParam(":imagem", $imagem, PDO::PARAM_LOB);

    $resultado = $comando->execute();
 
    header("Location: adm_filme.html");
?>