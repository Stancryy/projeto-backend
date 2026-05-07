function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
function lerValor(id) {
  return parseFloat(document.getElementById(id).value);
}
function exibir(id, html) {
  document.getElementById(id).innerHTML = html;
}
function calcularEx1() {
  const qtd = lerValor('qtdCadernos');
  if (isNaN(qtd) || qtd <= 0) {
    exibir('res1', '⚠️ Informe uma quantidade válida.');
    return;
  }

  const precoUnitario = 12.50;
  const total = qtd * precoUnitario;

  exibir('res1',
    `📦 Quantidade: <strong>${qtd}</strong> caderno(s)<br>` +
    `💵 Preço unitário: <strong>${formatarMoeda(precoUnitario)}</strong><br>` +
    `🧾 <strong>Total a pagar: ${formatarMoeda(total)}</strong>`
  );
}
function calcularEx2() {
  const qtd = lerValor('qtdCamisetas');
  if (isNaN(qtd) || qtd <= 0) {
    exibir('res2', '⚠️ Informe uma quantidade válida.');
    return;
  }

  const precoCompra = 25.00;
  const precoVenda = 40.00;
  const lucroPorUnidade = precoVenda - precoCompra;
  const lucroTotal = lucroPorUnidade * qtd;
  const totalArrecadado = precoVenda * qtd;

  exibir('res2',
    `👕 Camisetas vendidas: <strong>${qtd}</strong><br>` +
    `📈 Lucro por unidade: <strong>${formatarMoeda(lucroPorUnidade)}</strong><br>` +
    `💰 <strong>Lucro total: ${formatarMoeda(lucroTotal)}</strong><br>` +
    `🏷️ Total arrecadado: <strong>${formatarMoeda(totalArrecadado)}</strong>`
  );
}
function calcularEx3() {
  const preco = lerValor('precoOriginal');
  if (isNaN(preco) || preco <= 0) {
    exibir('res3', '⚠️ Informe um preço válido.');
    return;
  }

  const desconto = preco * 0.10;
  const precoFinal = preco - desconto;

  exibir('res3',
    `🏷️ Preço original: <strong>${formatarMoeda(preco)}</strong><br>` +
    `🔻 Desconto (10%): <strong>-${formatarMoeda(desconto)}</strong><br>` +
    `✅ <strong>Preço final: ${formatarMoeda(precoFinal)}</strong><br>` +
    `💡 Você economizou <strong>${formatarMoeda(desconto)}</strong>!`
  );
}
function calcularEx4() {
  const meses = lerValor('mesesJS');
  if (isNaN(meses) || meses <= 0) {
    exibir('res4', '⚠️ Informe um número de meses válido.');
    return;
  }

  const capital = 1000.00;
  const taxa = 0.05;
  const jurosMensal = capital * taxa;
  const jurosTotal = capital * taxa * meses;
  const valorTotal = capital + jurosTotal;
  let detalhes = '<br><strong>📋 Detalhamento mensal:</strong><br>';
  for (let m = 1; m <= meses; m++) {
    const acumulado = capital + (jurosMensal * m);
    detalhes += `&nbsp;&nbsp;Mês ${m}: juros ${formatarMoeda(jurosMensal)} → acumulado ${formatarMoeda(acumulado)}<br>`;
  }

  exibir('res4',
    ` Capital: <strong>${formatarMoeda(capital)}</strong><br>` +
    `Taxa: <strong>5% ao mês</strong><br>` +
    `Período: <strong>${meses} mês(es)</strong><br>` +
    `Juros mensal: <strong>${formatarMoeda(jurosMensal)}</strong><br>` +
    `Juros total: <strong>${formatarMoeda(jurosTotal)}</strong><br>` +
    `<strong>Valor a pagar: ${formatarMoeda(valorTotal)}</strong>` +
    detalhes
  );
}
function calcularEx5() {
  const totalVendas = lerValor('totalVendas');
  if (isNaN(totalVendas) || totalVendas <= 0) {
    exibir('res5', '⚠️ Informe o total de vendas válido.');
    return;
  }

  const comissao = totalVendas * 0.05;
  const salarioFixo = 1500.00;
  const totalReceber = salarioFixo + comissao;

  exibir('res5',
    `🛒 Total vendido: <strong>${formatarMoeda(totalVendas)}</strong><br>` +
    `📈 Comissão (5%): <strong>${formatarMoeda(comissao)}</strong><br>` +
    `💼 Salário fixo: <strong>${formatarMoeda(salarioFixo)}</strong><br>` +
    `💰 <strong>Total a receber: ${formatarMoeda(totalReceber)}</strong>`
  );
}
function calcularEx6() {
  const dias = [];
  for (let i = 1; i <= 7; i++) {
    const v = lerValor('dia' + i);
    if (isNaN(v) || v < 0) {
      exibir('res6', `⚠️ Informe um valor válido para o Dia ${i}.`);
      return;
    }
    dias.push(v);
  }

  const totalSemana = dias.reduce((soma, d) => soma + d, 0);
  const media = totalSemana / 7;
  const maiorVenda = Math.max(...dias);
  const diaMaior = dias.indexOf(maiorVenda) + 1;

  exibir('res6',
    `📊 Total da semana: <strong>${formatarMoeda(totalSemana)}</strong><br>` +
    `📈 Média diária: <strong>${formatarMoeda(media)}</strong><br>` +
    `🏆 Maior venda: <strong>${formatarMoeda(maiorVenda)}</strong> (Dia ${diaMaior})`
  );
}
function calcularEx7() {
  const vendidos = lerValor('qtdVendidaEstoque');
  if (isNaN(vendidos) || vendidos < 0) {
    exibir('res7', '⚠️ Informe uma quantidade válida.');
    return;
  }

  const estoqueInicial = 120;

  if (vendidos > estoqueInicial) {
    exibir('res7',
      `❌ <strong>Erro:</strong> Não há produtos suficientes no estoque!<br>` +
      `📦 Estoque disponível: <strong>${estoqueInicial}</strong> unidades.<br>` +
      `🛒 Tentativa de venda: <strong>${vendidos}</strong> unidades.`
    );
    return;
  }

  const restante = estoqueInicial - vendidos;

  exibir('res7',
    `📦 Estoque inicial: <strong>${estoqueInicial}</strong> unidades<br>` +
    `🛒 Vendidos: <strong>${vendidos}</strong> unidades<br>` +
    `✅ <strong>Estoque restante: ${restante} unidades</strong>`
  );
}
function calcularEx8() {
  const preco = lerValor('precoAtual');
  if (isNaN(preco) || preco <= 0) {
    exibir('res8', '⚠️ Informe um preço válido.');
    return;
  }

  const aumento = preco * 0.15;
  const novoPreco = preco + aumento;

  exibir('res8',
    `🏷️ Preço original: <strong>${formatarMoeda(preco)}</strong><br>` +
    `📈 Aumento (15%): <strong>+${formatarMoeda(aumento)}</strong><br>` +
    `✅ <strong>Novo preço: ${formatarMoeda(novoPreco)}</strong><br>` +
    `💡 Diferença: <strong>${formatarMoeda(aumento)}</strong>`
  );
}
function calcularEx9() {
  const valorCompra = lerValor('valorCompraTotal');
  const parcelas = parseInt(document.getElementById('qtdParcelas').value);

  if (isNaN(valorCompra) || valorCompra <= 0) {
    exibir('res9', '⚠️ Informe o valor da compra.');
    return;
  }

  const valorParcela = valorCompra / parcelas;

  exibir('res9',
    `🛍️ Valor total: <strong>${formatarMoeda(valorCompra)}</strong><br>` +
    `🔢 Parcelas: <strong>${parcelas}x</strong><br>` +
    `💳 <strong>Valor de cada parcela: ${formatarMoeda(valorParcela)}</strong>`
  );
}
function calcularEx10() {
  const capital = lerValor('valorInicialJC');
  const meses = lerValor('mesesJC');

  if (isNaN(capital) || capital <= 0) {
    exibir('res10', '⚠️ Informe o valor inicial do investimento.');
    return;
  }
  if (isNaN(meses) || meses <= 0) {
    exibir('res10', '⚠️ Informe o número de meses.');
    return;
  }

  const taxa = 0.02;
  const montante = capital * Math.pow((1 + taxa), meses);
  const jurosGanhos = montante - capital;

  exibir('res10',
    `💰 Valor inicial: <strong>${formatarMoeda(capital)}</strong><br>` +
    `📊 Taxa: <strong>2% ao mês (juros compostos)</strong><br>` +
    `📅 Período: <strong>${meses} mês(es)</strong><br>` +
    `📈 Juros ganhos: <strong>${formatarMoeda(jurosGanhos)}</strong><br>` +
    `🏦 <strong>Valor final: ${formatarMoeda(montante)}</strong>`
  );
}
