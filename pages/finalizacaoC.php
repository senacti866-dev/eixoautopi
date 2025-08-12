<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/eixoauto/eixoautopi/css/finalizacaoC.css">
    <title>Finalização de Compra</title>
</head>
<body>
    <div class="checkout-container">

        <!-- Endereço -->
        <div class="section">
            <h3>Endereço de Entrega</h3>
            <div id="endereco-exibicao">
                <p id="texto-endereco">Rua Exemplo, 123 - Bairro - Cidade/UF</p>
                <button class="btn-alterar" onclick="mostrarFormularioEndereco()">Alterar Endereço</button>
            </div>

            <div id="form-endereco" style="display: none;">
                <label for="endereco">Novo Endereço:</label>
                <textarea id="endereco" rows="3"></textarea>
                <button class="btn-alterar" onclick="salvarNovoEndereco()">Salvar Endereço</button>
            </div>
        </div>

        <div class="section">
            <h3>Produtos</h3>
            <div class="produtos">
                
            </div>
            <!-- Colocar os produtos que foram comprados -->
        </div>

        <!-- Forma de Pagamento -->
        <div class="section">
            <h3>Forma de Pagamento</h3>
            <img class="forma-de-pagamento" src="/eixoauto/eixoautopi/img/Icons/Card-Icon.png" alt="Ícone Cartão de Crédito" onclick="cartaoInfo()">
            <img class="forma-de-pagamento" src="/eixoauto/eixoautopi/img/Icons/Pix-Icon.png" alt="Ícone Pix">
            <img class="forma-de-pagamento" src="/eixoauto/eixoautopi/img/Icons/Ticket-Icon.png" alt="Ícone Boleto">
        </div>

        <div class="section">
            <h3>Cupom</h3>
            <input id="Cupom-input" type="text" placeholder="Insira o cupom">
            <button id="search-cupom"></button>

        </div>
        <!-- Produtos -->
        <div class="section">
            <h3>Valor dos Produtos</h3>
            <div class="products" id="lista-produtos"></div>
            <div class="total" id="valor-total">Total: R$ 0,00</div>
        </div>

        <!-- Botão de Finalizar -->
        <button onclick="finalizarCompra()">Finalizar Compra</button>
    </div>

    <script src="/eixoauto/eixoautopi/js/finalizacaoC.js"></script>
</body>

</html>