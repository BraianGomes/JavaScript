

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
       var img = window.document.getElementById('image')

       /* Adicionando foto pelo JavaScript*/


///////////////////////  Male ////////////////////////
       if (fsex[0].checked){
        genre = 'Male'
        if (year>= 0 || year <= 10){
            //crianca
            img.src = ('images/malechild.jpg')
        document.body.style.background = '#472A21'

        } else if ( year > 10 && idade < 18 ){
            //Jovem
            img.src = ('images/maleteen.jpg')
            document.body.style.background = '#4F453B'

        } else if ( idade > 18 && idade < 50 ){
            //adulto 
            img.src = ('images/maleadult.jpg')
            document.body.style.background = '#C7765B'
        }

        else {
            //idoso
            img.src = ('images/maleold.jpg')
            document.body.style.background = '#E05D31'

        }

///////////////////////    Female ///////////////////////
       } else if (fsex[1].checked) {
        genre = 'Female'
       }
       if (year>= 0 || year <= 10){
        //crianca
        img.src = ('images/malechild.jpg')
        document.body.style.background = '#FF30EE'
        

    } else if ( year > 10 && idade < 18 ){
        //Jovem
        img.src = ('images/femaleteen.jpg')
        document.body.style.background = '#EA6CDF'

    } else if ( idade > 18 && idade < 50 ){
        //adulto 
        img.src = ('images/femaleadult.jpg')
        document.body.style.background = '#C13CE6'
    }

    else {
        //idoso
        img.src = ('images/femaleold.jpg')
        document.body.style.background = '#66135F'
    }

       resultado.innerHTML = `Detectamos ${genre} com ${idade} anos`
       resultado.appendChild(img)
    }

}
