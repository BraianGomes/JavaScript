let numero = [5,7,2,9,11,66]
numero[6] = 112
numero.push(33)
numero.sort()

console.log(`Nosso vetor tem ${numero.length} posicoes`)
console.log(numero.sort())
console.log(`O primeiro valor de vetor eh ${numero[0]}`)

let pos = numero.indexOf(0)
if (pos ==-1){
    console.log('O valor nao foi encontado')
} else {
    console.log(`O valor 11 esta na posicao ${pos}`)
}
