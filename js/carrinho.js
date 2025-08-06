document.addEventListener('DOMContentLoaded', () => {
  CarrinhodeProdutos();
})

function adicionarNoCarrinho(produto) { //Essa função está funcionando corretamente
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  if (!carrinho.find(p => p.id === produto.id)) {
    carrinho.push(produto); //Push no produto
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  } else {
    alert('Produto já está no carrinho!'); //Caso o produto já esteja no arquivo JSON
  }
};

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
        <button class="btn less"><img src="/eixoauto/eixoautopi/img/Icons/subtracao-Icon.png" alt=""></button>
        <div class="qtd">1</div>
        <button class="btn more"><img src="/eixoauto/eixoautopi/img/Icons/adicao-Icon.png" alt=""></button>
      </div>
      <div class="prize">
        <h1>${produto.preco}</h1>
      </div>
    `;
    container.appendChild(div);
  });
}

//Seleção de produtos

function SelectProducts() {
  const container = document.getElementById('select-menu-container')
  container.innerHTML = '';

  const div = document.createElement('div')
  div.classList.add('select-menu')
  container.appendChild(div)

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

  document.addEventListener('click', (event) => {
    if (event.target.id === 'selectAll') {
      const checkboxes = document.querySelectorAll('.select-product')
      const checkboxesSelected = Array.from(checkboxes).every(cb => cb.checked);
      checkboxes.forEach(cb => cb.checked = !checkboxesSelected);
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.id === 'exclude') {
      let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; //Trazendo os elementos de volta do Arquivo JSON para uma array
      const checkboxesSelected = document.querySelectorAll('.select-product:checked')
      const idsToExclude = Array.from(checkboxesSelected).map(cbs => parseInt(cbs.dataset.id));
      carrinho = carrinho.filter(p => !idsToExclude.includes(p.id));
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      location.reload();
    }

  })
}
SelectProducts()



//Quantidade de Produto + Valor Total
function QtdPreco() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const container = document.getElementById('carrinho');
  let valorTotal = 0;

  // Delegação de eventos para os botões + e -
  container.addEventListener('click', function(event) {
    const btnLess = event.target.closest('.less');
    const btnMore = event.target.closest('.more');
    if (btnLess || btnMore) {
      const itemDiv = event.target.closest('.item-carrinho');
      const qtdDiv = itemDiv.querySelector('.qtd');
      let qtd = parseInt(qtdDiv.textContent);
      if (btnLess && qtd > 1) {
        qtd--;
      }
      if (btnMore) {
        qtd++;
      }
      qtdDiv.textContent = qtd;
      atualizarTotal();
    }
  });

  function atualizarTotal() {
    valorTotal = 0;
    const items = container.querySelectorAll('.item-carrinho');
    items.forEach((item, idx) => {
      const qtd = parseInt(item.querySelector('.qtd').textContent);
      const preco = parseFloat(carrinho[idx].preco);
      valorTotal += qtd * preco;
    });
    const precoTotal = document.querySelector('.preco-total');
    if (precoTotal) {
      precoTotal.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;
    }
  }

  atualizarTotal();
}
QtdPreco();

