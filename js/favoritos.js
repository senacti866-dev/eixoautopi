
// Busca produtos do banco de dados e renderiza nos containers
async function carregarProdutosDoBanco() {
  try {
    const response = await fetch('/eixoauto/eixoautopi/pages/get_produtos.php');
    const produtos = await response.json();
    renderizarProdutos(produtos, 'linear-container');
    renderizarProdutos(produtos, 'lessfluid-linear-container');
    renderizarProdutos(produtos, 'fluid-linear-container');

    selectContainer('linear-container');
    selectContainer('lessfluid-linear-container');
    selectContainer('fluid-linear-container');
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
        <img class="fav_heart" src="/eixoauto/eixoautopi/img/Icons/heart.png" alt="Ícone de favoritos" >
        <img class="produtos" src="${produto.imagem}" alt="${produto.nome}">
        <a href="#">${produto.nome}</a>
        <h2>${produto.preco}</h2>
      `;

      const favBtn = div.querySelector('.fav_heart');
      favBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // evita que o clique suba para o div
        favoritar(produto);
      });


      div.style.cursor = 'pointer';
      div.addEventListener('click', () => {
        apresentar(produto);
      })


      container.appendChild(div);
    });
  });
}

//Icon "Favoritar" ação de click

function selectContainer(containerClasse) {
    const containers = document.querySelectorAll(`.${containerClasse}`);
    if (!containers.length) return;

    containers.forEach(container => {
        const favIcons = container.querySelectorAll('.fav_heart');

        favIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                if (icon.src.includes("/eixoauto/eixoautopi/img/Icons/heart.png")) {
                    icon.src = "/eixoauto/eixoautopi/img/Icons/heart-checked.png";
                } else {
                    icon.src = "/eixoauto/eixoautopi/img/Icons/heart.png";
                }
            });
        });
    });
}


//Introdução do produto ao arquivo JSON
function favoritar(produto) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  if (!favoritos.find(p => p.id === produto.id)) {
    favoritos.push(produto); //Push no produto
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  } else {
    alert('Produto já favoritado!'); //Caso o produto já esteja no arquivo JSON
  }
};


//FAVORITOS

function ProdutosFavoritados() {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []; //Selecionando o produto no arquivo JSON
  const container = document.getElementById('favoritos-container');
  container.innerHTML = ''

  if (favoritos.length === 0) {
    container.innerHTML = "<p>Nenhum produto favoritado.</p>";
    return;
  }

  favoritos.forEach((produto) => { //Percorrendo o arquivo
    const div = document.createElement('div');
    div.classList.add('produto'); //Trazendo os dados para a interface 
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
    })
  });
};

//DELETE

function removerFavorito(id) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || []; //Trazendo os elementos de volta do Arquivo JSON para uma array
  favoritos = favoritos.filter(p => p.id !== id); //Filtrando o id do produto selecionado e excluindo ele
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  ProdutosFavoritados();
}

ProdutosFavoritados();

