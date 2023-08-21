function check(){
    var data = new Date()
    var year = data.getFullYear()
    var formYear = document.querySelector('div#textyear')
    var resultado = document.querySelector('div#resultado')

    if (formYear.value.lenght == 0 || Number(formYear.value) > year){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        window.alert('Tudo Ok!')
    }

}
