<?php 

    include("../php_conecta.php");

    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Consulta para verificar se o email e senha estão corretos
    $comando = $pdo->prepare("SELECT * FROM usuario WHERE email = '$email' and senha = '$senha'");
    $resultado = $comando->execute();

    $n = $comando->rowCount();
    if ($n > 0) {
        // Email e senha corretos
        header("Location: ../filmes/tela_filmes.html");
    } else {
        // Email ou senha incorretos
        header("Location: incorreto.html");
    }

   
?>