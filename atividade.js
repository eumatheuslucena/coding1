const { callbackify } = require("util")

let nome = 'Matheus'
idade = 17
let frase = ('Olá, meu nome é'+' '+ nome + ' '+'e tenho'+ ' '+idade + ' '+'anos.')
console.log(frase)

const cidade = 'Recife'
console.log(nome +' '+ 'é de'+ ' ' + cidade)

num1 = 12
num2 = 6
console.log(num1 + num2, num1 - num2, num1*num2, num1/num2)
base = 5
altura = 10
console.log('A área do trinângulo é'+' ' + base*altura/2+ ' '+ 'metros')

nota1 = 6
nota2 = 10
nota3 = 8
alunoNota = (nota1+nota2+nota3)
console.log('o resultado da média é'+' '+alunoNota)

produtoPreço = 200
desconto = 30
calculo = produtoPreço*desconto/100
preçoFinal = produtoPreço - calculo
console.log(
    'O preço final foi'+' '+preçoFinal+ ' '+ 'com o desconto de '+' '+ desconto +' '+'sobre o preço de '+' '+produtoPreço)

dolár = 5.50
Real = 12
conversão = Real/dolár
conversãoFinal = conversão.toFixed(1)
console.log(('A conversão de 12 reais para dolár fica'+' '+conversãoFinal+' '+'dolares'))

celsius = 30
fahrenheit = (celsius*9/5) + 32
console.log(celsius +' '+ 'graus celsius igual a:'+' '+fahrenheit+' '+'graus fahrenheit')

peso = 80
altura = 1.90
calculo = peso / (altura*altura)
IMC = calculo.toFixed(1)
console.log('O IMC do paciente é igaul a:'+' '+IMC+' '+'kg/m2')

texto = '12'
console.log(parseFloat(texto))


