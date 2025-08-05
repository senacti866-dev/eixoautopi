//linear-container
const listaProdutos = [
  {
    id: 1,
    nome: 'Caminhão',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },
  {
    id: 2,
    nome: 'Carro',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },
  {
    id: 3,
    nome: 'Volante',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },
  {
    id: 4,
    nome: 'Freio',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Laranja.png'
  },
  {
    id: 6,
    nome: 'Freio',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Fornecedores/LF.png'
  },
  {
    id: 7,
    nome: 'Freio',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Fornecedores/LF.png'
  }
];

//Fluid Container 1
const fluidContainer1 = [
  {
    id: 10,
    nome: 'guuhgerh',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },
  {
    id: 20,
    nome: 'ioutjoihngj',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },
  {
    id: 30,
    nome: 'guuhgerh',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },

]

//Fluid container 2
const fluidContainer2 = [
  {
    id: 100,
    nome: 'guuhgerh',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },
  {
    id: 200,
    nome: 'ioutjoihngj',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },
  {
    id: 300,
    nome: 'Caminhão',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },
  {
    id: 400,
    nome: 'Caminhão',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },
  {
    id: 500,
    nome: 'Caminhão',
    descricao: 'lorem ipsum',
    preco: ' 40,00',
    imagem: '/eixoautopi/img/Produtos/Cabeçote.webp'
  },
]


//INDEX

renderizarProdutos(listaProdutos, 'linear-container');
renderizarProdutos(fluidContainer1, 'lessfluid-linear-container');
renderizarProdutos(fluidContainer2, 'fluid-linear-container');

function renderizarProdutos(lista, containerClasse) {
  const containers = document.querySelectorAll(`.${containerClasse}`);
  if (!containers.length) return;

  containers.forEach(container => {
    lista.forEach(produto => {
      const div = document.createElement('div');
      div.classList.add('produto');
      div.innerHTML = `
        <img class="fav_heart" src="/eixoautopi/img/Icons/heart.png" alt="Ícone de favoritos" onclick='favoritar(${JSON.stringify(produto)})'>
        <img class="produtos" src="${produto.imagem}" alt="${produto.nome}">
        <a href="#">${produto.nome}</a>
        <h2>${produto.preco}</h2>
      `;

      div.style.cursor = 'pointer';
      div.addEventListener('click', () => {
        apresentar(produto);
        window.location.href = '/eixoautopi/pages/compra.html'; // Redireciona à página de compra
      });

      container.appendChild(div);
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
      <img class="fav_heart" src="/eixoautopi/img/Icons/heart-checked.png" alt= "Ícone de favoritos" onclick="removerFavorito(${produto.id})">
        <div class='produtos'> <img  src='${produto.imagem}' alt='${produto.nome}'></div>
          <h3>${produto.nome}</h3>

          <div class='content'>
            <h2>${produto.preco}</h2>
            <img class="compras" src="/eixoautopi/img/Icons/carrinho-branco.png" alt="Ícone do carrinho" onclick='adicionarNoCarrinho(${JSON.stringify(produto)})'>
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

