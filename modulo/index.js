const matriz = require('./util/matriz')
const calc = require('./util/calculadora')

let B = [
    [1,2],
    [3,4],
    [5,6]
]

matriz.transporMatriz(B)

console.log('PI: ',calc.Pi)
console.log('2 + 3 = ',calc.calculaSoma(2,3))
console.log('2 - 3 = ',calc.calculaSubtracao(2,3))