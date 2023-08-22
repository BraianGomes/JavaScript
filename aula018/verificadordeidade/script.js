

function check(){
    var data = new Date()
    var year = data.getFullYear()
    var formYear = document.querySelector('input#textyear')
    var resultado = document.querySelector('div#resultado')
    

    if (formYear.value == 0 || Number(formYear.value) > year){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = year - Number(formYear.value)
       var genre = ''

       /* Adicionando foto pelo JavaScript*/
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')


///////////////////////  Male ////////////////////////
       if (fsex[0].checked){
        genre = 'Male'
        if (year>= 0 || year <= 10){
            //crianca
            img.src = ('images/malechild.jpg')

        } else if ( year > 10 && idade < 18 ){
            //Jovem
            img.src = ('images/maleteen.jpg')

        } else if ( idade > 18 && idade < 50 ){
            //adulto 
            img.src = ('images/maleadult.jpg')
        }

        else {
            //idoso
            img.src = ('images/maleold.jpg')
        }

///////////////////////    Female ///////////////////////
       } else if (fsex[1].checked) {
        genre = 'Female'
       }
       if (year>= 0 || year <= 10){
        //crianca
        img.src = ('images/femalechild.jpg')
        

    } else if ( year > 10 && idade < 18 ){
        //Jovem
        img.src = ('images/femaleteen.jpg')

    } else if ( idade > 18 && idade < 50 ){
        //adulto 
        img.src = ('images/femaleadult.jpg')
    }

    else {
        //idoso
        img.src = ('images/femaleold.jpg')
    }

       resultado.innerHTML = `Detectamos ${genre} com ${idade} anos`
       resultado.appendChild(img)
    }

}
