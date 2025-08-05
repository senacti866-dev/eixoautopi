function cartaoInfo() {
    const div = document.createElement('div')
    div.add.classList('cartao-info')
    div.innerHTML = `
                <label for="numero-cartao">Número do Cartão:</label>
                <input type="text" id="numero-cartao" placeholder="0000 0000 0000 0000">
                <label for="validade">Validade:</label>
                <input type="text" id="validade" placeholder="MM/AA">
                <label for="cvv">CVV:</label>
                <input type="text" id="cvv" placeholder="123">
            `
};

// Produtos fictícios
const produtos = [
    { nome: 'Produto A', preco: 59.90 },
    { nome: 'Produto B', preco: 89.00 },
    { nome: 'Produto C', preco: 120.00 }
];

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

document.getElementById('pagamento').addEventListener('change', function () {
    const tipo = this.value;
    document.getElementById('cartao-info').style.display = (tipo === 'cartao') ? 'block' : 'none';
});

atualizarResumo();