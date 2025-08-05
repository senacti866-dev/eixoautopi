function apresentar(produto) {
  if (!produto) return;
  
  localStorage.setItem('compra', JSON.stringify([produto]));
  console.log('Produto salvo com sucesso no localStorage');
  window.location.href = '/eixoautopi/pages/compra.html';
}

// Página de Compras
function PaginaDeProdutos() {
  const compra = JSON.parse(localStorage.getItem('compra')) || [];
  const container = document.getElementById('produto-compra');
  container.innerHTML = '';

  if (!compra.length) {
    container.innerHTML = '<p>Produto não encontrado.</p>';
    return;
  }

  const produto = compra[0];
  const div = document.createElement('div');
  div.classList.add('product-container');
  div.innerHTML = `
    <button class="btn" id="prev">&#10094;</button>
    <div class="img-box">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2 class="product-prize">${produto.preco}</h2>
    </div>
    <button class="btn" id="next">&#10095;</button>
    <h3 class="rank">4.0</h3>
    <div class="info-section">
      <div class="top-row">
        <img class="logo" src="" alt="">
        <h2 class="name">${produto.nome}</h2>
      </div>
      <div class="desc">
        <h3>Descrição</h3>
        <p>${produto.descricao}</p>
      </div>
    </div> 
  `;
  container.appendChild(div);
}

// INICIALIZAÇÃO 

document.addEventListener('DOMContentLoaded', () => {
  PaginaDeProdutos();
});



