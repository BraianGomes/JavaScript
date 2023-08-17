var idade = 21
console.log(`voce tem ${idade} anos.`)
if (idade < 16) {
    console.log('nao pode votar')
} else if (idade < 18 || idade >=65){
    console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}
