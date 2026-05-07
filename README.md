# projeto-backend

Lista 1 de Exercícios – JavaScript
A programação é uma ferramenta essencial para resolver problemas do mundo real de
forma automatizada. Em diversas áreas, como comércio, finanças, logística e
administração, sistemas computacionais são utilizados para realizar cálculos, controlar
vendas, gerenciar estoques, calcular lucros, aplicar descontos e analisar dados de
negócios.
Nesta atividade, você irá utilizar JavaScript na sua forma básica (Vanilla JavaScript) para
desenvolver pequenos programas capazes de resolver problemas matemáticos
relacionados a situações do cotidiano, especialmente envolvendo operações comerciais e
financeiras, como cálculo de preços, lucro, juros, descontos, parcelas e controle de estoque.
Os exercícios apresentados simulam situações comuns enfrentadas por empresas, lojas e
profissionais que precisam tomar decisões com base em cálculos simples. O objetivo é
praticar conceitos fundamentais de programação, tais como:
● Declaração de variáveis;
● Entrada e saída de dados;
● Operações matemáticas;
● Uso de operadores aritméticos;
● Organização lógica do código.
Ao resolver os problemas propostos, você desenvolverá habilidades importantes para a
construção de sistemas maiores, além de compreender como a programação pode ser
aplicada para resolver problemas práticos do cotidiano.
Utilize JavaScript puro (Vanilla JS) para implementar as soluções, buscando escrever
códigos claros, organizados e bem estruturados.
Resolva os exercícios que se pedem e crie um código de teste unitário em Jest para testar a
implementação (testes são opcionais).
1. Cálculo do valor total de uma compra
Em uma pequena papelaria de bairro, os alunos costumam comprar materiais escolares no
início de cada semestre. Um dos produtos mais vendidos é o caderno universitário, utilizado
para anotações em diferentes disciplinas. Para agilizar o atendimento no caixa, o
proprietário da loja decidiu criar um pequeno sistema que ajude a calcular automaticamente
o valor das compras realizadas pelos clientes.
Cada caderno custa R$ 12,50 e os clientes podem comprar qualquer quantidade de
unidades. O sistema deverá receber a quantidade de cadernos escolhida pelo cliente e
calcular o valor total que deverá ser pago.
Problema:
Crie um programa em JavaScript (utilizando apenas JavaScript puro – Vanilla JS) que:
● Receba como entrada a quantidade de cadernos comprados pelo cliente.
● Calcule o valor total da compra com base no preço unitário de R$ 12,50.
● Exiba na tela o valor total a ser pago, formatado em reais.
Desafio adicional (opcional):
Mostre também uma mensagem indicando quantos cadernos foram comprados e o preço
unitário do produto. Desenvolva a interface gráfica com HTML e CSS para apresentar os
resultados.
2. Cálculo de lucro em venda de produtos
Uma pequena loja de roupas realiza a venda de camisetas básicas muito procuradas pelos
clientes. Para manter o controle financeiro do negócio, o proprietário precisa calcular o lucro
obtido nas vendas realizadas ao longo do dia.
Cada camiseta é comprada pelo fornecedor por R$ 25,00 (custo do produto) e vendida
aos clientes por R$ 40,00. Assim, a cada unidade vendida, a loja obtém um lucro
correspondente à diferença entre o preço de venda e o custo de compra.
Para facilitar esse cálculo, o dono da loja deseja criar um pequeno programa que permita
informar quantas camisetas foram vendidas e, automaticamente, calcular o lucro total
obtido.
Problema:
Crie um programa em JavaScript (utilizando JavaScript puro – Vanilla JS) que:
● Receba como entrada a quantidade de camisetas vendidas.
● Calcule o lucro por unidade (diferença entre o preço de venda e o preço de compra).
● Calcule o lucro total obtido pela loja com base na quantidade vendida.
● Exiba o valor total do lucro na tela.
Desafio adicional (opcional):
Exiba também o valor total arrecadado com as vendas (preço de venda × quantidade
vendida). Desenvolva a interface gráfica com HTML e CSS para apresentar os resultados.
3. Desconto em produto
Uma loja de eletrônicos está realizando uma promoção especial para atrair mais clientes.
Durante essa campanha, alguns produtos selecionados estão com 10% de desconto sobre
o preço original. Para facilitar o trabalho dos vendedores e tornar o atendimento mais
rápido, a loja deseja utilizar um pequeno programa que calcule automaticamente o valor
final do produto após a aplicação do desconto.
Quando um cliente escolhe um produto, o vendedor informa o preço original, e o sistema
calcula o valor do desconto e o preço final que deverá ser pago.
Problema:
Crie um programa em JavaScript (utilizando JavaScript puro – Vanilla JS) que:
● Receba como entrada o preço original do produto.
● Calcule o valor do desconto de 10%.
● Calcule o preço final do produto após o desconto.
● Exiba na tela o valor do desconto e o valor final a ser pago.
Desafio adicional (opcional):
Permita que o programa mostre também quanto o cliente economizou ao comprar o
produto com desconto. Desenvolva a interface gráfica com HTML e CSS para apresentar os
resultados.
4. Juros simples em empréstimo
Um cliente procurou uma pequena instituição financeira para solicitar um empréstimo de
R$ 1.000,00. A instituição informou que o valor do empréstimo possui juros simples de 5%
ao mês, ou seja, a cada mês é acrescentado ao valor inicial um percentual fixo de juros.
Para ajudar no controle dos pagamentos, a empresa deseja desenvolver um pequeno
programa que permita calcular quanto o cliente deverá pagar ao final do período, de
acordo com o número de meses definidos para o pagamento do empréstimo.
Nesse tipo de cálculo, os juros simples são aplicados sempre sobre o valor inicial do
empréstimo, e não sobre o valor acumulado.
Problema:
Crie um programa em JavaScript (utilizando JavaScript puro – Vanilla JS) que:
● Considere que o valor inicial do empréstimo é R$ 1.000,00.
● Considere uma taxa de juros simples de 5% ao mês.
● Receba como entrada o número de meses do empréstimo;
● Calcule o valor total de juros acumulados no período.
● Calcule o valor total que deverá ser pago ao final do prazo.
Desafio adicional (opcional):
Mostre também o valor do juro mensal e o valor acumulado a cada mês do período
informado. Desenvolva a interface gráfica com HTML e CSS para apresentar os resultados.
Nota: J = C . i . t, onde C = Capital (Valor investido), i = Taxa e t = Tempo.
5. Comissão de vendedor
Uma loja de eletrodomésticos utiliza um sistema de comissão para incentivar seus
vendedores a aumentarem as vendas mensais. Nesse sistema, além do salário fixo,
cada vendedor recebe uma comissão de 5% sobre o valor total das vendas realizadas
durante o mês.
Para facilitar o cálculo dessa comissão e evitar erros manuais, a empresa deseja
desenvolver um pequeno programa que ajude a calcular automaticamente o valor que o
vendedor deverá receber de comissão ao final do período.
Assim, ao final do mês, o responsável pelo setor informa o valor total das vendas
realizadas pelo vendedor, e o sistema calcula quanto ele receberá de comissão.
Problema:
Crie um programa em JavaScript (utilizando JavaScript puro – Vanilla JS) que:
● Receba como entrada o valor total das vendas realizadas no mês.
● Calcule a comissão do vendedor, considerando 5% sobre o total vendido.
● Exiba na tela o valor total das vendas e o valor da comissão que o vendedor
receberá.
Desafio adicional (opcional):
Mostre também o valor total que o vendedor receberia caso tivesse um salário fixo
adicional, por exemplo, R$ 1.500,00 + comissão. Desenvolva a interface gráfica com
HTML e CSS para apresentar os resultados.
6. Média de vendas semanais
Uma loja deseja analisar o desempenho das vendas ao longo da semana para entender
melhor o comportamento dos clientes e identificar os períodos de maior movimentação.
Esse tipo de análise ajuda o gerente a tomar decisões importantes, como organizar
promoções, ajustar o estoque e planejar melhor o trabalho da equipe.
Para isso, a loja registra o valor total vendido em cada dia da semana, durante um período
de 7 dias consecutivos. Ao final da semana, o gerente deseja calcular a média de vendas
semanais, ou seja, o valor médio vendido por dia durante a semana.
Para facilitar essa tarefa, será desenvolvido um pequeno programa que receba os valores
de vendas diárias e calcule automaticamente a média.
Problema:
Crie um programa em JavaScript (utilizando JavaScript puro – Vanilla JS) que:
● Receba como entrada o valor das vendas de cada um dos 7 dias da semana.
● Calcule o total de vendas da semana;
● Calcule a média de vendas semanais;
● Exiba na tela o total vendido na semana e a média de vendas por dia.
Desafio adicional (opcional):
Mostre também qual foi o maior valor de venda registrado em um dos dias da semana.
Desenvolva a interface gráfica com HTML e CSS para apresentar os resultados.
7. Cálculo de estoque restante
Uma loja de varejo precisa manter um controle diário de seu estoque para garantir que os
produtos não acabem inesperadamente. No início do dia, o sistema da loja registra a
quantidade disponível de um determinado produto no estoque. Ao longo do dia,
diversas vendas são realizadas, diminuindo essa quantidade.
Para facilitar o acompanhamento do estoque, o gerente decidiu desenvolver um pequeno
programa que ajude a calcular automaticamente quantas unidades ainda restam
disponíveis após as vendas realizadas.
Nesse cenário, a loja inicia o dia com 120 unidades de um produto em estoque. Ao final
do dia (ou em determinado momento), o responsável informa quantas unidades foram
vendidas, e o sistema calcula quantos produtos ainda permanecem no estoque.
Problema:
Crie um programa em JavaScript (utilizando JavaScript puro – Vanilla JS) que:
● Considere que o estoque inicial é de 120 unidades.
● Receba como entrada a quantidade de produtos vendidos durante o dia.
● Calcule quantas unidades restaram no estoque.
● Exiba na tela o estoque inicial, a quantidade vendida e o estoque restante.
Desafio adicional (opcional):
Faça o programa verificar se a quantidade vendida é maior que o estoque disponível e,
nesse caso, exibir uma mensagem de erro informando que não há produtos suficientes
no estoque. Desenvolva a interface gráfica com HTML e CSS para apresentar os
resultados.
8. Aumento de preço de produto
Uma loja de varejo percebeu que os custos de produção e transporte de alguns produtos
aumentaram nos últimos meses. Para manter o equilíbrio financeiro do negócio, a empresa
decidiu reajustar o preço de determinados produtos, aplicando um aumento de 15%
sobre o valor atual.
Para facilitar o trabalho do setor administrativo, será desenvolvido um pequeno programa
que permita calcular automaticamente o novo preço do produto após o reajuste. Dessa
forma, basta informar o preço atual e o sistema calculará o valor do aumento e o novo preço
final.
Problema:
Crie um programa em JavaScript (utilizando JavaScript puro – Vanilla JS) que:
● Receba como entrada o preço atual do produto.
● Calcule o valor do aumento de 15%.
● Calcule o novo preço do produto após o reajuste.
● Exiba na tela o preço original, o valor do aumento e o novo preço final.
Desafio adicional (opcional):
Permita que o programa mostre também qual foi o percentual de aumento aplicado e a
diferença entre o preço antigo e o novo preço. Desenvolva a interface gráfica com HTML
e CSS para apresentar os resultados.
9. Cálculo de parcelas
Uma loja de móveis deseja facilitar as compras para seus clientes oferecendo a opção de
parcelamento sem juros. Para isso, a loja permite que o valor total da compra seja dividido
em até 5 parcelas iguais, sem acréscimo no preço final.
Durante o atendimento, o vendedor precisa informar rapidamente ao cliente quanto ficará o
valor de cada parcela, de acordo com o valor total da compra. Para tornar esse processo
mais rápido e evitar erros de cálculo, a loja pretende utilizar um pequeno programa que faça
esse cálculo automaticamente.
Assim, ao informar o valor total da compra, o sistema deverá calcular o valor de cada
parcela, considerando que a compra será dividida em 5 parcelas iguais e sem juros.
Problema:
Crie um programa em JavaScript (utilizando JavaScript puro – Vanilla JS) que:
● Receba como entrada o valor total da compra.
● Considere que a compra será dividida em 5 parcelas iguais.
● Calcule o valor de cada parcela.
● Exiba na tela o valor total da compra, o número de parcelas, e o valor de cada
parcela.
Desafio adicional (opcional):
Permita que o usuário escolha quantas parcelas deseja (de 1 a 5) e faça o cálculo
automaticamente com base nessa escolha. Desenvolva a interface gráfica com HTML e
CSS para apresentar os resultados.
10. Juros compostos
Uma pessoa decidiu investir uma quantia de dinheiro em uma aplicação financeira que
oferece rendimento de 2% ao mês com juros compostos. Nesse tipo de investimento, os
juros são aplicados sobre o valor acumulado ao longo do tempo, ou seja, a cada mês o
rendimento é calculado considerando o valor inicial mais os juros já obtidos nos meses
anteriores.
Esse tipo de cálculo é muito utilizado em aplicações financeiras, poupança, investimentos e
financiamentos. Para ajudar investidores a estimar quanto seu dinheiro pode crescer ao
longo do tempo, será desenvolvido um pequeno programa que realiza esse cálculo
automaticamente.
O usuário deverá informar o valor inicial investido e o número de meses em que o
dinheiro permanecerá aplicado. O programa então calculará o valor final do
investimento após o período informado.
Problema:
Crie um programa em JavaScript (utilizando JavaScript puro – Vanilla JS) que:
● Receba como entrada o valor inicial do investimento.
● Receba também o número de meses da aplicação.
● Considere uma taxa de juros compostos de 2% ao mês.
● Calcule o valor final do investimento após o período informado.
● Exiba na tela o valor inicial, o tempo de investimento e o valor final obtido.
Desafio adicional (opcional):
Mostre também quanto foi o total de juros ganhos durante o período, ou seja, a
diferença entre o valor final e o valor inicial do investimento. Desenvolva a interface gráfica
com HTML e CSS para apresentar os resultados.