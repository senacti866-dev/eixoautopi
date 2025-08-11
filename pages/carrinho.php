<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinho de compras</title>
    <link rel="stylesheet" href="/eixoauto/eixoautopi/css/carrinho.css">
</head>

<body>
    <header>
        <div id="logo">
            <a href="/eixoauto/eixoautopi/pages/index.php"><img src="/eixoauto/eixoautopi/img/Icons/Logo E branca real.png" alt="Logo da empresa Eixo"></a>
        </div>
    </header>

    <div id="select-menu-container">
    </div> 

    <div id="carrinho">
        <!-- <input type="checkbox" name="select-product" id="select-product">
        <img class="products" src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <div class="prize">
            <h1>${produto.preco}</h1>
        </div>
        
        <div class="quantity">
            <button class="btn" id="less"><img src="/eixoauto/eixoautopi/img/Icons/subtracao-Icon.png" alt=""></button>
            <div class="number-qtt"></div>
            <button class="btn" id="more"><img src="/eixoauto/eixoautopi/img/Icons/adicao-Icon.png" alt=""></button>
        </div>
    `; -->
    </div>

    <div class="finalize-shop">
        <div class="prize">
            <p>Valor Total: </p>
            <h1 id="Preco-Final">Preço Total</h1>
        </div>
        <button class="buy">Finalizar Compra</button>
    </div>

    <script src="/eixoauto/eixoautopi/js/carrinho.js"></script>
    <script src="/eixoauto/eixoautopi/js/favoritos.js"></script>
</body>
</html>