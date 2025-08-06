<?php
session_start(); 

// Conexão com o banco de dados
include_once('config.php');

if (isset($_POST['submit'])) {
    $cnpj = $_POST['Ins_CNPJ'];
    $senha = $_POST['Cli_senha'];  

    // Prepara a consulta para verificar se o usuário existe no banco de dados
    $consulta_login = "SELECT Cli_ID, Ins_CNPJ, Cli_Senha FROM tb_cliente where Ins_CNPJ =?";
    $login = $conexao->prepare($consulta_login);
    $login->bind_param("s", $cnpj);
    $login->execute();
    $login->store_result();
    $login->bind_result($id, $db_cnpj, $db_senha);

    if ($login->num_rows > 0) {
      
        $login->fetch();

        if (password_verify($senha, $db_senha)) { 
            // Login bem-sucedido
            $_SESSION['Cli_id'] = $id; 
            $_SESSION['Ins_CNPJ'] = $db_cnpj; 
            header("Location: home.php"); 
            exit;
        } else {
            // Senha incorreta
            $_SESSION['erro'] = "Senha incorreta!";
            header("Location: verificar_login.php");
            exit;
        }
    } else {
        // Usuário não encontrado
        $_SESSION['erro'] = "Usuário não encontrado!";
        header("Location: verificar_login.php");
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="/eixoauto/eixoautopi/css/login.css">
</head>
<body>
    <header>
        <div>
            <img id="logo" src ="/eixoauto/eixoautopi/img/Icons/Logo E branca real.png" alt="">
        </div>
    </header>
    
    <div class="container">
        <form action="#" method="POST">
            <h2>Login</h2>
            <ul class="input-group">
                <label for="username">CNPJ:</label>
                <input type="text" id="username" name="username" required>
            <ul>
            <ul class="input-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" name="password" required>
            <ul>
            <button type="submit">Entrar</button>

            <nav id="signup-link">
             <p>Ainda não tem uma conta? <a href="/eixoauto/eixoautopi/pages/cadastro.php">Cadastre-se</a></p>
            </nav>
        </form>
    </div>
</body>
</html>