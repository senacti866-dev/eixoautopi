<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Compra</title>
  <link rel="stylesheet" href="/eixoauto/eixoautopi/css/compra.css">
</head>

<body>
  <header>
    <div id="logo">
      <a href="/eixoauto/eixoautopi/pages/index.php"><img src="/eixoauto/eixoautopi/img//Icons/Logo E branca real.png" alt="Logo da empresa `Eixo`"></a>
    </div>
  </header>

  <div id="produto-compra">
    <div class="product-container" id="product-container"></div>
  </div>

  <div class="comparison">
    <?php
    // Inclua o arquivo de conexão com o banco, se necessário
    // include('../config.php');

    // Exemplo de conexão (ajuste conforme seu config.php)
    $conn = new mysqli('localhost', 'root', '', 'db_atvpi');
    if ($conn->connect_error) {
      die("Erro de conexão: " . $conn->connect_error);
    }

    // Busque as ofertas (ajuste a query conforme sua tabela)
    $sql = "SELECT p.nome, p.preco, p.imagem, f.nome AS fornecedor, f.logo
            FROM tb_produto p
            JOIN tb_fornecedor f ON p.fornecedor_id = f.id
            LIMIT 10";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        echo '<div class="product-section">';
        echo '  <a href="#"><img class="img-product" src="' . htmlspecialchars($row['imagem']) . '" alt=""></a>';
        echo '  <div class="prize">';
        echo '    <a href="#">' . htmlspecialchars($row['nome']) . '</a>';
        echo '    <h1>R$ ' . number_format($row['preco'], 2, ',', '.') . '</h1>';
        echo '  </div>';
        echo '  <div class="store-link">';
        echo '    <a href="#">' . htmlspecialchars($row['fornecedor']) . '<img class="suppliers" src="' . htmlspecialchars($row['logo']) . '" alt="Logo do fornecedor"></a>';
        echo '    <a href="#"><button>Comprar na Loja</button></a>';
        echo '  </div>';
        echo '</div>';
      }
    } else {
      echo '<p>Nenhuma oferta encontrada.</p>';
    }
    $conn->close();
    ?>
  </div>

  <!-- FOOTER -->
  <footer>
    <div class="footer-container">
      <div class="footer-info">
        <img src="/" alt="" sizes="" srcset="">
        <p>Seu destino para peças e acessórios automotivos de qualidade.</p>
        <a href="https://maps.app.goo.gl/QA6DMvPYJy8GbAQF7">Endereço: Rua Paineiras, 1300 - Contagem, Minas Gerais</a>
      </div>
      <div class="footer-links">
        <h3>Links Rápidos</h3>
        <ul>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Termos e Condições</a></li>
        </ul>
      </div>
      <div class="footer-social">
        <h3>Redes Sociais</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 Loja de Autopeças - Todos os direitos reservados.</p>
    </div>
  </footer>

  <script src="/eixoauto/eixoautopi/js/favoritos.js"></script>
  <script src="/eixoauto/eixoautopi/js/compras.js"></script>
  <script src="/eixoauto/eixoautopi/js/index.js"></script>
</body>

</html>