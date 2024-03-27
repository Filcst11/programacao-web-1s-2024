const A =[  
    [1,2],
    [3,4],
    [5,6]
] 

function transporMatriz(A){
    let i = 0
    //Imprime matriz
    console.log("Matriz:\n")
    while(A[i] !== undefined){
        console.log(A[i])
        i+=1
    }
    
    //Cria matriz transposta
    i = 0  
    let B = [[],[]] 
    //Anda entre as linhas
    while(A[i] !== undefined){
        let j = 0
        
        //Anda entre as colunas
        while(A[i][j] !== undefined){
            B[j][i] = A[i][j]
            j+=1
        }  
        
        i+=1
    }  
    //imprime matriz transposta  
    console.log("\n\nMatriz Transposta:\n")
    i=0
    while(B[i] !== undefined){
        console.log(B[i])
        i+=1
    }
    
}

transporMatriz(A)