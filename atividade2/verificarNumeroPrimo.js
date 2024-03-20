//O aluno deve criar uma função que verifica se o número recebido é primo ou não
function verificarNumeroPrimo(n){
    if (n === 2){
        return true
    }
    let a = n/2
    a = Math.round(a)
    if(n % a === 0){
        return false
    } 
    a = Math.round(a)

    while(n % a !== 0){
        
        a = a - 1
        if(a == 1){
            return true
        }
    } 
    return false
    
}

console.log('0',verificarNumeroPrimo(0))
console.log('1',verificarNumeroPrimo(1))
console.log('2',verificarNumeroPrimo(2))
console.log('3',verificarNumeroPrimo(3))
console.log('7',verificarNumeroPrimo(7))
console.log('83',verificarNumeroPrimo(83))
console.log('100',verificarNumeroPrimo(100))
console.log('991',verificarNumeroPrimo(991))
console.log('104729',verificarNumeroPrimo(104729))
console.log('14348907',verificarNumeroPrimo(14348907))




verificarNumeroPrimo(0); //false
verificarNumeroPrimo(1); //false
verificarNumeroPrimo(2); //true
verificarNumeroPrimo(3); //true
verificarNumeroPrimo(7); //true
verificarNumeroPrimo(83); //true
verificarNumeroPrimo(100); //false
verificarNumeroPrimo(991); //true
verificarNumeroPrimo(104729); //true
verificarNumeroPrimo(14348907); //false