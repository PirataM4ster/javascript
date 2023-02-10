function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        //Bom dia
        img.src = 'Foto-de-Manhã.png'
        document.body.style.background = '#fedaa1'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'Foto-de-Tarde.png'
        document.body.style.background = '#c6d9e5'
    } else {
        //Boa noite
        img.src = 'Foto-de-Noite.png'
        document.body.style.background = '#0d1922'
    }

}