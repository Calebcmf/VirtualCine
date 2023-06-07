<?php
        // ATENÇÃO: o tipo da coluna na tabela deve ser MEDIUMBLOB
        include("../php_conecta.php");

        $cpf = $_POST["cpf"];
        $senha = $_POST["senha"];

        // Lê o conteúdo do arquivo de imagem e armazena na variável $imagem
		$imagem = file_get_contents($_FILES["imagem"]["tmp_name"]);
		
		$comando = $pdo->prepare("UPDATE usuario SET foto = :foto WHERE cpf = :cpf and senha = :senha");
        $comando->bindParam(":cpf", $cpf);
        $comando->bindParam(":senha", $senha);
        $comando->bindParam(":foto", $imagem, PDO::PARAM_LOB);
		$resultado = $comando->execute();

        header("Location: ../usuario/usuario.html");

        
        // As linhas abaixo você usará sempre que quiser mostrar a imagem

        //$comando = $pdo->prepare("SELECT * FROM alunos");
		//$resultado = $comando->execute();
        // while( $linhas = $comando->fetch() )
        //{
        //    $dados_imagem = $linhas["foto"];
        //    $i = base64_encode($dados_imagem);
        //
        //    $login =  $linhas["cpf"];
        //    $senha =  $linhas["senha"];
        //}
		
?>
