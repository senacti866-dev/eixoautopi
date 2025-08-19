// Função para renderizar resultados de busca
function renderizarBusca(produtos) {
  const container = document.querySelector('.linear-container');
  if (!container) return;
  container.innerHTML = '';
  if (!produtos.length) {
    container.innerHTML = '<p>Nenhum produto encontrado.</p>';
    return;
  }
  produtos.forEach(produto => {
    const div = document.createElement('div');
    div.classList.add('produto');
    div.innerHTML = `
      <img class="produtos" src="${produto.imagem}" alt="${produto.nome}">
      <a href="#">${produto.nome}</a>
      <h2>${produto.preco}</h2>
    `;
    container.appendChild(div);
  });
}

// Evento de busca
const inputBusca = document.getElementById('input-busca');
const btnBusca = document.getElementById('btn-busca');

function buscarProdutos() {
  const termo = inputBusca.value.trim();
  if (termo.length > 0) {
    fetch(`/eixoauto/eixoautopi/pages/search_produtos.php?q=${encodeURIComponent(termo)}`)
      .then(res => res.json())
      .then(produtos => {
        console.log('Resultado da busca:', produtos);
        if (produtos.error) {
          const container = document.querySelector('.linear-container');
          if (container) {
            container.innerHTML = `<p style='color:red;'>Erro: ${produtos.error}<br>SQL: ${produtos.sql}<br>DB: ${produtos.db_error}</p>`;
          }
        } else {
          renderizarBusca(produtos);
        }
      })
      .catch(err => {
        const container = document.querySelector('.linear-container');
        if (container) {
          container.innerHTML = `<p style='color:red;'>Erro de conexão: ${err}</p>`;
        }
      });
  }
}

if (inputBusca) {
  inputBusca.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      buscarProdutos();
    }
  });
}
if (btnBusca) {
  btnBusca.addEventListener('click', buscarProdutos);
}

const carrossels = document.querySelectorAll('.container-slide');
carrossels.forEach(container => {
    const slide = container.querySelector('.carousel-slide');
    const images = slide.querySelectorAll('.img-slides');
    const totalImages = images.length; //Não está reconhecendo o totalImages
    let i = 0;


    function updateSlide() {
        slide.style.transform = `translateX(-${i * 100}%)`;
    }

    document.addEventListener("click", (event) => {
        if (event.target.id === "next") {
            i = (i + 1) % totalImages;
            updateSlide();
        }
    });

    document.addEventListener("click", (event) => {
        if (event.target.id === "prev") {
            i = (i - 1 + totalImages) % totalImages;
            updateSlide();
        }
    });

    // Auto avançar a cada 3 segundos dos slides

    setInterval(() => {
        if (i == totalImages - 1) {
            i = 0;
        } else {
            i++;
        }
        updateSlide()
    }, 5000);
});


// Auto avançar a cada 3 segundos do banner
const banner = document.getElementById("banner");
const img = banner.querySelectorAll(".img-banner");
const banner_img = img.length;
let j = 0;

function Banner() {
    banner.style.transform = `translateX(-${j * 100}%)`;
}

setInterval(() => {
    if (j == banner_img - 1) {
        j = 0;
    } else {
        j++;
    }
    Banner()
}, 3000);