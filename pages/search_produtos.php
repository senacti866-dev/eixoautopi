<?php
include 'config.php';
header('Content-Type: application/json; charset=utf-8');

$termo = isset($_GET['q']) ? $conexao->real_escape_string($_GET['q']) : '';

$sql = "SELECT Pro_ID as id, Pro_Nome as nome, Pro_Descricao as descricao, Pro_Preco as preco, Pro_LinkProduto as imagem, Pro_CodigoOriginal as codigo FROM tb_produto WHERE Pro_Nome LIKE '%$termo%' OR Pro_Descricao LIKE '%$termo%' OR Pro_CodigoOriginal LIKE '%$termo%'";
$result = $conexao->query($sql);
$produtos = [];

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $produtos[] = $row;
    }
    echo json_encode($produtos, JSON_UNESCAPED_UNICODE);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Erro na consulta SQL',
        'sql' => $sql,
        'db_error' => $conexao->error
    ], JSON_UNESCAPED_UNICODE);
}
?>
