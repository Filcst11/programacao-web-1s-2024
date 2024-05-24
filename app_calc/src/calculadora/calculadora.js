function calcular(v1,v2,op){
    let resultado
    switch(op){
        case '+':
            resultado = v1 + v2
        break
        case '-':
            resultado = v1 - v2         
        break
        case '*':
            resultado = v1 * v2
        break
        case '/':
            resultado = v1 / v2
        break                        
    }
    return resultado
}

module.exports = {
    calcular
}