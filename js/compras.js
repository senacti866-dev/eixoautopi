function apresentar(produto) {
  if (!produto) return;
  
  // Garante que o campo 'codigo' (Pro_CodigoOriginal) esteja presente
  if (!produto.codigo && produto.Pro_CodigoOriginal) {
    produto.codigo = produto.Pro_CodigoOriginal;
  }
  localStorage.setItem('compra', JSON.stringify([produto]));
  console.log('Produto salvo com sucesso no localStorage');
  window.location.href = '/eixoauto/eixoautopi/pages/compra.php';
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

  // Buscar ofertas do mesmo produto em outros fornecedores
  if (produto && produto.codigo) {
    fetch(`/eixoauto/eixoautopi/pages/get_ofertas_produto.php?codigo=${encodeURIComponent(produto.codigo)}`)
      .then(res => res.json())
      .then(ofertas => {
        const section = document.getElementById('product-section');
        if (!section) return;
        if (ofertas.length > 1) {
          let html = '<h3>Ofertas de outros fornecedores:</h3>';
          ofertas.forEach(oferta => {
            if (oferta.id != produto.id) {
              html += `
                <div class="oferta-item" style="margin-bottom:10px;">
                  <span><b>${oferta.fornecedor}</b></span> - 
                  <span>R$ ${oferta.preco}</span>
                  <a href="${oferta.link_fornecedor}" target="_blank" style="margin-left:10px;">Ver na loja</a>
                </div>
              `;
            }
          });
          section.innerHTML += html;
        }
      });
  }
}

// INICIALIZAÇÃO 

document.addEventListener('DOMContentLoaded', () => {
  PaginaDeProdutos();
});



