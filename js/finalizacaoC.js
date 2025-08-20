const cartaoIcon = document.getElementById('cartao')
const container = document.getElementById('payment')

cartaoIcon.addEventListener('click', () => {
    cartaoIcon.classList.toggle('ativo')
    container.innerHTML = '';

    if (cartaoIcon.classList.contains('ativo')) {
        const div = document.createElement('div')
        div.classList.add('cartao-info')
        div.innerHTML = `
            <label for="numero-cartao">Número do Cartão:</label>
            <input type="text" id="numero-cartao" placeholder="0000 0000 0000 0000">
            <label for="validade">Validade:</label>
            <input type="text" id="validade" placeholder="MM/AA">
            <label for="cvv">CVV:</label>
            <input type="text" id="cvv" placeholder="123">
        `
        container.appendChild(div)
    }
});


const pixIcon = document.getElementById('pix')

pixIcon.addEventListener('click', () => {
    pixIcon.classList.toggle('ativo')
    container.innerHTML = '';

    if (pixIcon.classList.contains('ativo')) {
        const div = document.createElement('div')
        div.classList.add('pix-info')

        const randomPixCode = Math.random() *10
        div.innerHTML = `
        <img id="Pix-QR" src="/EixoAuto/img/Icons/QrCode-wts.jpeg" alt="Qr-Code Pix">
        <div class="Code-container">
            <div id="Pix-Code">${randomPixCode}</div>
            <button id="Copy-btn"><img src="/EixoAuto/img/Icons/Copy-icon.png" alt=""></button>
        </div>
        `
        
        container.appendChild(div)
    }
});

document.getElementById('Copy-btn').addEventListener('click', () =>{
    const PixCode = document.getElementById('Pix-Code').textContent
    navigator.clipboard.writeText(PixCode)
})

// Produtos fictícios
function AprsentarProdutos() {
    const produto = JSON.parse(localStorage.getItem('produto-compra')) || [];
    const container = document.getElementById('carrinho');
    container.innerHTML = '';

    if (produto.length === 0) {
        container.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    produto.forEach(produto => {
        const div = document.createElement('div');
        div.classList.add('item-carrinho');
        div.innerHTML = `
      <input type="checkbox" name="select-product" class="select-product" data-id="${produto.id}">
      <img class="products" src="${produto.imagem}" alt="${produto.nome}">
      <h2>${produto.nome}</h2>
      <div class="quantity">
        <button class="btn"><img class="less" src="/EixoAuto/img/Icons/subtracao-Icon.png" alt=""></button>
        <div class="qtd">1</div>
        <button class="btn"><img class="more" src="/EixoAuto/img/Icons/adicao-Icon.png" alt=""></button>
      </div>
      <div class="prize">
        <h1>${produto.preco}</h1>
      </div>
    `;
        container.appendChild(div);
    });
}

function ProdutosValor() {
    let valorTotalCompra = JSON.parseFloat(localStorage.getItem('totalCompra')) || 0;
    const totalEl = document.getElementById('valor-total');
    const cupom = document.getElementById('cupom-input')
    totalEl.textContent = `Total: R$ ${valorTotalCompra.toFixed(2).replace('.', ',')}`;

    if (cupom.value === "10EIXOAUTO") {
        valorTotalCompra = valorTotalCompra - (valorTotalCompra * 0.1)
    } else if (cupom.value === "5EIXOAUTO") {
        valorTotalCompra = valorTotalCompra - (valorTotalCompra * 0.05)
    }

    totalEl.textContent = `Total: R$ ${valorTotalCompra.toFixed(2).replace('.', ',')}`;
}


// Endereço inicial
let enderecoAtual = "Rua Exemplo, 123 - Bairro - Cidade/UF";

function atualizarResumo() {
    const lista = document.getElementById('lista-produtos');
    const totalEl = document.getElementById('valor-total');
    let total = 0;

    lista.innerHTML = '';
    produtos.forEach(prod => {
        total += prod.preco;
        const item = document.createElement('div');
        item.classList.add('product');
        item.innerHTML = `
          <span>${prod.nome}</span>
          <span>R$ ${prod.preco.toFixed(2)}</span>
        `;
        lista.appendChild(item);
    });

    totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function mostrarFormularioEndereco() {
    document.getElementById('form-endereco').style.display = 'block';
    document.getElementById('endereco').value = enderecoAtual;
    document.getElementById('endereco-exibicao').style.display = 'none';
}

function salvarNovoEndereco() {
    const novoEndereco = document.getElementById('endereco').value.trim();
    if (novoEndereco !== "") {
        enderecoAtual = novoEndereco;
        document.getElementById('texto-endereco').textContent = enderecoAtual;
        document.getElementById('form-endereco').style.display = 'none';
        document.getElementById('endereco-exibicao').style.display = 'block';
    } else {
        alert("Por favor, insira um endereço válido.");
    }
}

function finalizarCompra() {
    const pagamento = document.getElementById('pagamento').value;
    const total = produtos.reduce((soma, p) => soma + p.preco, 0).toFixed(2);

    alert(`Compra finalizada!\n\nEndereço: ${enderecoAtual}\nPagamento: ${pagamento}\nTotal: R$ ${total}`);
}
/*
document.getElementById('pagamento').addEventListener('change', function () {
    const tipo = this.value;
    document.getElementById('cartao-info').style.display = (tipo === 'cartao') ? 'block' : 'none';
});
*/
atualizarResumo();