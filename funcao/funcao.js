function imprimirSoma(){
    let a = 5
    let b = 10
    console.log(`A soma entre ${a} e ${b} é ${a+b}`)
}

imprimirSoma()
imprimirSoma()

function imprimirSomaV2(a, b){
    
    console.log(`A soma entre ${a} e ${b} é ${a + b}`)
}

imprimirSomaV2(1, 5)
imprimirSomaV2(40, 50)


function imprimirSomaV3(a, b, op){
    switch (op) {
        case '+':
            console.log(`A soma entre ${a} e ${b} é ${a + b}`)
            break;
        
        case '-':
            console.log(`A subtração entre ${a} e ${b} é ${a - b}`)
            break;
            
        case '*':
            console.log(`A multiplicação entre ${a} e ${b} é ${a * b}`)
            break;        
    
        case '/':
            console.log(`A divisão entre ${a} e ${b} é ${a / b}`)
            break;

        default:
            console.log(`A operação ${op} não é uma operação válida.`)
            break;
    }
    
}

imprimirSomaV3(50, 5, "+")
imprimirSomaV3(50, 5, "-")
imprimirSomaV3(50, 5, "*")
imprimirSomaV3(50, 5, "/")
imprimirSomaV3(1, 5, "asa")
