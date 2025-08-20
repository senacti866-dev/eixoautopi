document.addEventListener('DOMContentLoaded', () => {
  CarrinhodeProdutos();
  SelectProducts();
  QtdPreco();
  FinalizacaoCompra();
});

async function carregarProdutosDoBanco() {
  try {
    const response = await fetch('/eixoauto/eixoautopi/pages/get_produtos.php');
    const produtos = await response.json();
  } catch (e) {
    console.error('Erro ao carregar produtos do banco:', e);
  }
}
carregarProdutosDoBanco();

function adicionarNoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  if (!carrinho.find(p => p.id === produto.id)) {
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  } else {
    alert('Produto já está no carrinho!');
  }
}

function CarrinhodeProdutos() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const container = document.getElementById('carrinho');
  container.innerHTML = '';

  if (carrinho.length === 0) {
    container.innerHTML = "<p>Seu carrinho está vazio.</p>";
    return;
  }

  carrinho.forEach(produto => {
    const div = document.createElement('div');
    div.classList.add('item-carrinho');
    div.innerHTML = `
      <input type="checkbox" name="select-product" class="select-product" data-id="${produto.id}">
      <img class="products" src="${produto.imagem}" alt="${produto.nome}">
      <h2>${produto.nome}</h2>
      <div class="quantity">
        <button class="btn"><img class="less" src="/eixoauto/eixoautopi/img/Icons/subtracao-Icon.png" alt=""></button>
        <div class="qtd">1</div>
        <button class="btn"><img class="more" src="/eixoauto/eixoautopi/img/Icons/adicao-Icon.png" alt=""></button>
      </div>
      <div class="prize">
        <h1>${produto.preco}</h1>
      </div>
    `;

    div.style.cursor = 'pointer';

    // Evita redirecionamento ao clicar na checkbox
    div.addEventListener('click', (event) => {
      if (event.target.classList.contains('select-product')) return;
      apresentar(produto);
      window.location.href = '/eixoauto/eixoautopi/pages/compra.php';
    });

    container.appendChild(div);
  });
}

function SelectProducts() {
  const container = document.getElementById('select-menu-container');
  container.innerHTML = '';

  const div = document.createElement('div');
  div.classList.add('select-menu');
  container.appendChild(div);

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('select-product')) {
      div.innerHTML = `
        <ul>
          <li id="selectAll">Selecionar todos</li>
          <li id="exclude">Excluir</li>
        </ul>
      `;
    }
  });

  function VisibildadeMenu() {
    const checkboxes = document.querySelectorAll('.select-product');
    const algumMarcado = Array.from(checkboxes).some(cb => cb.checked);
    const selectMenu = document.querySelector('.select-menu');
    if (selectMenu) {
      selectMenu.style.display = algumMarcado ? 'block' : 'none';
    }
  }

  document.addEventListener('click', (event) => {
    if (event.target.id === 'selectAll') {
      const checkboxes = document.querySelectorAll('.select-product');
      const checkboxesSelected = Array.from(checkboxes).every(cb => cb.checked);
      checkboxes.forEach(cb => cb.checked = !checkboxesSelected);
      FinalizacaoCompra();
      VisibildadeMenu();
    }
  });

  document.addEventListener('change', (event) => {
    if (event.target.classList.contains('select-product')) {
      FinalizacaoCompra();
      VisibildadeMenu();
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.id === 'exclude') {
      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      const checkboxesSelected = document.querySelectorAll('.select-product:checked');
      const idsToExclude = Array.from(checkboxesSelected).map(cb => parseInt(cb.dataset.id));
      carrinho = carrinho.filter(p => !idsToExclude.includes(p.id));
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      location.reload();
    }
  });
}

function QtdPreco() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  document.getElementById('carrinho').addEventListener('click', (event) => {
    const more = event.target.classList.contains('more');
    const less = event.target.classList.contains('less');

    if (more || less) {
      const item = event.target.closest('.item-carrinho');
      if (!item) return;

      const qtd = item.querySelector('.qtd');
      const preco = item.querySelector('.prize h1');
      const nome = item.querySelector('h2').textContent;

      const produto = carrinho.find(p => p.nome === nome);
      if (!produto) return;

      const precoInicial = typeof produto.preco === 'string'
        ? parseFloat(produto.preco.replace(',', '.'))
        : parseFloat(produto.preco);

      let quantidadeAtual = parseInt(qtd.textContent);

      if (more) {
        quantidadeAtual++;
      } else if (less && quantidadeAtual > 1) {
        quantidadeAtual--;
      }

      qtd.textContent = quantidadeAtual;
      const total = quantidadeAtual * precoInicial;
      preco.textContent = total.toFixed(2).replace('.', ',');

      FinalizacaoCompra();
    }
  });
}

function FinalizacaoCompra() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const checkboxes = document.querySelectorAll('.select-product:checked');
  let valorTotalCompra = 0;

  checkboxes.forEach(cb => {
    const id = parseInt(cb.dataset.id);
    const produto = carrinho.find(p => p.id === id);
    if (produto) {
      const container = cb.closest('.item-carrinho');
      const qtd = container.querySelector('.qtd');
      const quantidade = parseInt(qtd.textContent);

      const precoUnitario = typeof produto.preco === 'string'
        ? parseFloat(produto.preco.replace(',', '.'))
        : parseFloat(produto.preco);

      valorTotalCompra += quantidade * precoUnitario;
    }
  });

  const PrecoFinal = document.getElementById('Preco-Final');
  if (PrecoFinal) {
    PrecoFinal.textContent = valorTotalCompra.toFixed(2).replace('.', ',');
  }

  localStorage.setItem('totalCompra', valorTotalCompra.toFixed(2));
  return valorTotalCompra;
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('buy')) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let total = FinalizacaoCompra();

    const produtosAcomprar = Array.from(document.querySelectorAll('.select-product:checked'))
      .map(cb => {
        const id = parseInt(cb.dataset.id);
        return carrinho.find(p => p.id === id);
      });

    localStorage.setItem('produtos-compra', JSON.stringify(produtosAcomprar));

    if (total > 0) {
      window.location.href = '/eixoauto/eixoautopi/pages/finalizacaoC.html';
    } else {
      alert('Nenhum produto foi selecionado. Selecione no mínimo um produto para finalizar a compra.');
    }
  }
});
