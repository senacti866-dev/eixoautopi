<!DOCTYPE php>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/eixoauto/eixoautopi/css/index.css">
    <link rel="shortcut icon" href="Imagem da LOGO" type="image/x-icon">
    <title>eixoautopipeças</title>
</head>

<body>

    <!-- Header (Logo, Icons, Input) -->
    <header>
        <nav>
            <div id="logo">
                <img src="/eixoauto/eixoautopi/img/Icons/Logo E branca real.png" alt="Logo EixoAuto">
            </div>

            <div id="header-content"> <!-- Container do input e âncoras da página -->
                <div id="pesquisa">
                    <input placeholder="Buscar..." type="text">
                </div>

                <ul>
                    <li><a href="_blank">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="/eixoauto/eixoautopi/pages/login.php">Login</a></li> <!--Link à página de Login-->
                    <li><a href="/eixoauto/eixoautopi/pages/cadastro.php">Cadastro</a></li> <!--Link à página de Cadastro-->
                </ul>
            </div>

            <div class="icon"> <!-- Icones da página de favoritos e carrinho de compras -->
                <ul>
                    <li>
                        <a href="/eixoauto/eixoautopi/pages/carrinho.php">
                            <img class="icons" src="/eixoauto/eixoautopi/img/Icons/carrinho-branco.png" alt="Carrinho">
                        </a>
                    </li>
                    <li>
                        <a href="/eixoauto/eixoautopi/pages/favoritos.php">
                            <img class="icons" src="/eixoauto/eixoautopi/img/Icons/heart.png" alt="Favoritos">
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>

    <div class="banner-slide"> <!-- Banner de propagandas e ofertas -->
        <div class="carousel-slide" id="banner">
            <img class="img-banner" src="/eixoauto/eixoautopi/img/Propagandas/banner-1.png" alt="">
            <img class="img-banner" src="/eixoauto/eixoautopi/img/Propagandas/banner-2.png" alt="">
            <img class="img-banner" src="/eixoauto/eixoautopi/img/Propagandas/banner-3.png" alt="">
        </div>
    </div>

    <div class="container"> <!-- Pai de todos os elementos, delimitador do width da página -->


        <div class="cards"> <!-- Cards de categorias-->
            <a href="#motor-category" class="category">
                <img src="/eixoauto/eixoautopi/img/Icons/Motor.png" alt="categoria">
                <h1>Motor</h1>
            </a>
            <a href="#transmission-category" class="category">
                <img src="/eixoauto/eixoautopi/img/Icons/Embreagem.png" alt="categoria">
                <h1>Transmissão</h1>
            </a>
            <a href="#suspension-category" class="category">
                <img src="/eixoauto/eixoautopi/img/Icons/Amortecedor.png" alt="categoria">
                <h1>Suspensão</h1>
            </a>
            <a href="#freio-category" class="category">
                <img src="/eixoauto/eixoautopi/img/Icons/Freio.png" alt="categoria">
                <h1>Freio</h1>
            </a>
        </div>


        <div class="container-slide"> <!-- Slide -->
            <div class="carousel-slide" id="slider">
                <img class="img-slides" src="/eixoauto/eixoautopi/img/Propagandas/prop-FG.png" alt="">
                <img class="img-slides" src="/eixoauto/eixoautopi/img/Propagandas/propaganda4.svg" alt="">
                <img class="img-slides" src="/eixoauto/eixoautopi/img/Propagandas/propaganda-LongPage.png" alt="">
            </div>
            <button class="btn" id="prev">&#10094;</button>
            <button class="btn" id="next">&#10095;</button>
        </div>

        <div class="collum">
            <div class="lessfluid-linear-container"></div> <!-- Rede de propagandas linear -->
            <div class="fluid-linear-container" id="freio-category">
            </div>
        </div>

        <div class="collum">
            <div class="fluid-linear-container" id="transmission-category">
            </div>
            <div class="lessfluid-linear-container"></div>
        </div>

        <div class="collum">
            <div class="linear-container" id="motor-category">
                <div class="linear-products" id="produto">
                </div>
            </div>
        </div>


        <div class="cards"> <!-- Cards de categorias-->
            <img class="prop" src="/eixoauto/eixoautopi/img/Propagandas/propaganda1.svg" alt="propaganda">
            <img class="prop" src="/eixoauto/eixoautopi/img/Propagandas/propaganda2.svg" alt="propaganda">
            <img class="prop" src="/eixoauto/eixoautopi/img/Propagandas/propaganda3.svg" alt="propaganda">
            <img class="prop" src="/eixoauto/eixoautopi/img/Propagandas/propaganda4.svg" alt="propaganda">
        </div>

        <div class="collum">
            <div class="linear-container" id="suspension-category">
                <div class="linear-products" id="produto">
                </div>
            </div>
        </div>
        
        <div class="container-slide"> <!-- Slide -->
            <div class="carousel-slide" id="slider">
                <img class="img-slides" src="/eixoauto/eixoautopi/img/Propagandas/prop-FG.png" alt="">
                <img class="img-slides" src="/eixoauto/eixoautopi/img/Propagandas/propaganda4.svg" alt="">
                <img class="img-slides" src="/eixoauto/eixoautopi/img/Propagandas/propaganda-LongPage.png" alt="">
            </div>
            <button class="btn" id="prev">&#10094;</button>
            <button class="btn" id="next">&#10095;</button>
        </div>


        <div class="collum"> <!-- Logo dos Fornecedores/Parceiros principais -->
            <img class="suppliers" src="/eixoauto/eixoautopi/img/Fornecedores/LF.png" alt="logo de empresa fornecedora">
            <img class="suppliers" src="/eixoauto/eixoautopi/img/Fornecedores/MX Turbo.png" alt="logo de empresa fornecedora">
            <img class="suppliers" src="/eixoauto/eixoautopi/img/Fornecedores/TruxMecanina.png" alt="logo de empresa fornecedora">
            <img class="suppliers" src="/eixoauto/eixoautopi/img/Fornecedores/TruckFIX.png" alt="logo de empresa fornecedora">
            <img class="suppliers" src="/eixoauto/eixoautopi/img/Fornecedores/Laranja.png" alt="logo de empresa fornecedora">
            <img class="suppliers" src="/eixoauto/eixoautopi/img/Fornecedores/Laranja.png" alt="logo de empresa fornecedora">
        </div>

    </div>

    <script src="/eixoauto/eixoautopi/js/favoritos.js"></script>
    <script src="/eixoauto/eixoautopi/js/index.js"></script>
    <script src="/eixoauto/eixoautopi/js/compras.js"></script>
</body>

</html>