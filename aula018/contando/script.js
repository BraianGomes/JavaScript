function contar(){

    let inicio = document.querySelector('input#textinicio')
    let fim = document.querySelector('input#textfim')
    let passo = document.querySelector('input#textpasso')
    let resultado = document.querySelector('div#resultado')

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        
        resultado.innerHTML = 'Impossivel Contar!'

    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <=0){
            window.alert('Passo invalido! Considerando passo 1')
            p=1
        }

        if (i < f){

            // Contagem Crescente
        for(let contador = i; contador <= f; contador += p){
            resultado.innerHTML += `${contador} \u{1F600}`

            /* Codigo do Site U+1F600 */
        }
        resultado.innerHTML += `\u{1F3C1}`
    } else {

           //Contagem refressiva
        for (let contador = i; contador >= f; contador -=p){
            resultado.innerHTML += `${contador} \u{1F600}`
        }
    }
    resultado.innerHTML += `\u{1F3C1}`
}
}