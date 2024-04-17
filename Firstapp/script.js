anoNasc = prompt("insira ano de nascimento:")

hoje = new Date();
anoAtual = hoje.getFullYear();
idade = anoAtual - anoNasc 

nome = prompt("insira seu nome:")
mensagem = "Sou " + nome + " e tenho " + idade + " anos"

alert(mensagem)

