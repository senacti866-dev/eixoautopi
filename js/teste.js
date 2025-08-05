try {
    localStorage.setItem('teste', '123');
    console.log('Teste do localStorage funcionou:', localStorage.getItem('teste'));
} catch (error) {
    console.error('Erro no localStorage:', error);
}