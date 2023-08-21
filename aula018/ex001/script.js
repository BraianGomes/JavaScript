function loading(){
    var message = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora sao ${hora} horas`


    if (hora >= 0 && hora < 12){
        img.src = ('images/morning.jpg')
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <=18){
        img.src = ('images/evening.jpg')
        document.body.style.background = '#b9846f'

    } else {
        img.src = ('images/night.jpg')
        document.body.style.background = '#515154'
    }

    
}
