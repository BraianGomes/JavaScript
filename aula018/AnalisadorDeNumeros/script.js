let num = document.querySelector('input#fnum')
let flista = document.querySelector('select#flista')
let resultado = document.querySelector('div#resultado')
let valores = []

function analisarNumero(n) {
    if (Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}


function adicionar(){
    if (analisarNumero(num.value) && !inLista(num.value,valores)){

    } else {
        window.alert('Valor invalido ou ja encontrado na lista!')
    }
}
