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

module.exports = {
    verificarNumeroPrimo
}