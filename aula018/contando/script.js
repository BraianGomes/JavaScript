function contar(){

    let inicio = document.querySelector('input#textinicio')
    let fim = document.querySelector('input#textfim')
    let passo = document.querySelector('input#textpasso')

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('Erro Faltam Dados')
    } else {
        window.alert('Tudo OK')
    } 
}