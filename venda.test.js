const calcularVenda = require('./venda');

describe('Testes Parametrizados de Vendas', () => {
    test.each([
        // preco, qtd, formaPagamento, valorFinalEsperado
        [100, 1, "PIX", 95],      // 1. Pix com desconto
        [200, 2, "Dinheiro", 380], // 2. Dinheiro com desconto
        [100, 2, "Cartão", 210],   // 3. Cartão com juros
        [10, 5, "PIX", 47.5],      // 4. Venda pequena Pix
        [1000, 1, "Cartão", 1050], // 5. Venda grande Cartão
        [50, 4, "Dinheiro", 190],  // 6. Quantidade múltipla
        [100, 10, "Cartão", 1050], // 7. Quantidade alta
        [0, 5, "PIX", "Erro: Valores inválidos"],   // 8. Teste preço zero
        [100, -1, "PIX", "Erro: Valores inválidos"], // 9. Teste qtd negativa
        [100, 1, "Boleto", 100],   // 10. Forma sem juros/desconto
    ])('Venda de Preço %p, Qtd %p no %p deve resultar em %p', (preco, qtd, forma, esperado) => {
        const resultado = calcularVenda(preco, qtd, forma);
        
        if (typeof esperado === "string") {
            expect(resultado).toBe(esperado);
        } else {
            expect(resultado.valorFinal).toBe(esperado);
        }
    });
});