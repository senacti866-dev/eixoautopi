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