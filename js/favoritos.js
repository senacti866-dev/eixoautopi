// Busca produtos do banco de dados e renderiza nos containers
async function carregarProdutosDoBanco() {
  try {
   
    const resp1 = await fetch('/eixoauto/eixoautopi/pages/get_produtos.php?limit=3&offset=0');
    const produtos1 = await resp1.json();
    renderizarProdutos(produtos1, 'linear-container');

  
    const resp2 = await fetch('/eixoauto/eixoautopi/pages/get_produtos.php?limit=5&offset=3');
    const produtos2 = await resp2.json();
    renderizarProdutos(produtos2, 'lessfluid-linear-container');

   
    const resp3 = await fetch('/eixoauto/eixoautopi/pages/get_produtos.php?limit=7&offset=8');
    const produtos3 = await resp3.json();
    renderizarProdutos(produtos3, 'fluid-linear-container');
  } catch (e) {
    console.error('Erro ao carregar produtos do banco:', e);
  }
}

carregarProdutosDoBanco();

function renderizarProdutos(lista, containerClasse) {
  const containers = document.querySelectorAll(`.${containerClasse}`);
  if (!containers.length) return;

  containers.forEach(container => {
    lista.forEach(produto => {
      const div = document.createElement('div');
      div.classList.add('produto');
      div.innerHTML = `
        <img class="fav_heart" src="/eixoauto/eixoautopi/img/Icons/heart.png" alt="Ícone de favoritos" onclick='favoritar(${JSON.stringify(produto)})'>
        <img class="produtos" src="${produto.imagem}" alt="${produto.nome}">
        <a href="#">${produto.nome}</a>
        <h2>${produto.preco}</h2>
      `;

      div.style.cursor = 'pointer';
      div.addEventListener('click', () => {
        apresentar(produto);
        window.location.href = '/eixoauto/eixoautopi/pages/compra.php'; 
      })

      container.appendChild(div);
    });
  });
}


//Introdução do produto ao arquivo JSON
function favoritar(produto) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  if (!favoritos.find(p => p.id === produto.id)) {
    favoritos.push(produto); 
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  } else {
    alert('Produto já favoritado!'); 
  }
};


//FAVORITOS

function ProdutosFavoritados() {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []; 
  const container = document.getElementById('favoritos-container');
  container.innerHTML = ''

  if (favoritos.length === 0) {
    container.innerHTML = "<p>Nenhum produto favoritado.</p>";
    return;
  }

  favoritos.forEach((produto) => { 
    const div = document.createElement('div');
    div.classList.add('produto'); 
    div.innerHTML =
      `
      <img class="fav_heart" src="/eixoauto/eixoautopi/img/Icons/heart-checked.png" alt= "Ícone de favoritos" onclick="removerFavorito(${produto.id})">
        <div class='produtos'> <img  src='${produto.imagem}' alt='${produto.nome}'></div>
          <h3>${produto.nome}</h3>

          <div class='content'>
            <h2>${produto.preco}</h2>
            <img class="compras" src="/eixoauto/eixoautopi/img/Icons/carrinho-branco.png" alt="Ícone do carrinho" onclick='adicionarNoCarrinho(${JSON.stringify(produto)})'>
          </div>   
    `; //Criando os elementos html do produto na página de favoritos
    container.appendChild(div);

    const iconCarrinho = div.querySelector('.compras')
    iconCarrinho.addEventListener('click', () => {
      const produto = JSON.parse(iconCarrinho.getAttribute('produto-carrinho'))
      adicionarNoCarrinho(produto)
      iconCarrinho.src = '/eixoauto/eixoautopi/img/Icons/carrinho-preenchido.png'
    })
  });
};

//DELETE

function removerFavorito(id) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []; 
  favoritos = favoritos.filter(p => p.id !== id); 
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  ProdutosFavoritados();
}

ProdutosFavoritados();

