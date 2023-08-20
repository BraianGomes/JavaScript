let resultado = parimpar(99345)

function parimpar(numero){

    if (numero%2 ==0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log(`O Numero eh ${resultado}`)
