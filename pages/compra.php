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
      <a href="/eixoauto/eixoautopi/pages/index.php"><img src="/eixoauto/eixoautopi/img//Icons/Logo E branca real.png"
          alt="Logo da empresa `Eixo`"></a>
    </div>
  </header>

  <div id="produto-compra">
    <div class="product-container" id="product-container" ></div>
  </div>

  <div class="comparison">
    <?php
    $conn = new mysqli('localhost', 'root', '', 'db_atvpi');
    if ($conn->connect_error) {
      die("Erro de conexão: " . $conn->connect_error);
    }

    $sql = "SELECT 
          p.Pro_Nome, 
          p.Pro_Preco, 
          p.Pro_LinkProduto, 
          f.For_Nome AS fornecedor, 
          f.For_LinkSite AS logo
        FROM tb_produto p
        JOIN tb_fornecedor f ON p.For_ID = f.For_ID
        LIMIT 10";

    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        echo '<div class="product-section">';
        echo '  <a href="#"><img class="img-product" src="' . htmlspecialchars($row['Pro_LinkProduto']) . '" alt=""></a>';
        echo '  <div class="prize">';
        echo '    <a href="#">' . htmlspecialchars($row['Pro_Nome']) . '</a>';
        echo '    <h1>R$ ' . number_format($row['Pro_Preco'], 2, ',', '.') . '</h1>';
        echo '  </div>';
        echo '  <div class="store-link">';
        echo '    <a href="' . htmlspecialchars($row['logo']) . '" target="_blank">' . htmlspecialchars($row['fornecedor']) . '</a>';
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

  <script src="/eixoauto/eixoautopi/js/favoritos.js"></script>
  <script src="/eixoauto/eixoautopi/js/compras.js"></script>
  <script src="/eixoauto/eixoautopi/js/index.js"></script>
</body>

</html>