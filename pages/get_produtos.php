<?php
include 'config.php';
header('Content-Type: application/json; charset=utf-8');

$limit = isset($_GET['limit']) ? intval($_GET['limit']) : 0;
$offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;
$sql = "SELECT Pro_ID as id, Pro_Nome as nome, Pro_Descricao as descricao, Pro_Preco as preco, Pro_LinkProduto as imagem, Pro_CodigoOriginal as codigo FROM tb_produto";
if ($limit > 0) {
    $sql .= " LIMIT $limit OFFSET $offset";
}
$result = $conexao->query($sql);
$produtos = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $produtos[] = $row;
    }
}
echo json_encode($produtos, JSON_UNESCAPED_UNICODE);
?>
