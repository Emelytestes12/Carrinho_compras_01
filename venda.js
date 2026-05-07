function calcularVenda(preco, quantidade, formaPagamento) {
    if (preco <= 0 || quantidade <= 0) {
        return "Erro: Valores inválidos";
    }

    let totalOriginal = preco * quantidade;
    let desconto = 0;
    let juros = 0;

    if (formaPagamento === "PIX" || formaPagamento === "Dinheiro") {
        desconto = totalOriginal * 0.05; // 5% desconto
    } else if (formaPagamento === "Cartão") {
        juros = totalOriginal * 0.05; // 5% juros
    }

    let valorFinal = totalOriginal - desconto + juros;

    return {
        totalOriginal,
        desconto,
        juros,
        valorFinal
    };
}

module.exports = calcularVenda;
