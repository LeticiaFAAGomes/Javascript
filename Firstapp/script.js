//constantes
const salario_ate_20 = 1000
const salario_acima_20 = 2000

//input
anoNasc = parseInt(prompt("Insira seu ano de nascimento:"))
nome = prompt("Insira seu nome:")
salarioBase = parseFloat(prompt("Insira seu salário bruto:"))

gratificacao = 500
bonus = 200
desconto = 300

salarioLiquido = 0
adicional = 0

//processamento
hoje = new Date();
anoAtual = hoje.getFullYear();
idade = anoAtual - anoNasc 

adicional = salario_ate_20

salarioLiquido = salarioBase + gratificacao + bonus - desconto


//output

mensagem = "Sou " + nome + ", tenho " + idade + " anos e ganho R$" + salarioLiquido
alert(mensagem)

//salário liquido = salário base + gratificação + bônus - desconto

