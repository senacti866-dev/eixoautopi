<?php
include 'config.php';
header('Content-Type: application/json; charset=utf-8');

$sql = "SELECT Pro_ID as id, Pro_Nome as nome, Pro_Descricao as descricao, Pro_Preco as preco, Pro_LinkProduto as imagem FROM tb_produto";
$result = $conexao->query($sql);
$produtos = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $produtos[] = $row;
    }
}
echo json_encode($produtos, JSON_UNESCAPED_UNICODE);
?>
