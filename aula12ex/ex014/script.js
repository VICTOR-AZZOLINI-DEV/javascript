function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 7
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fe6a02'
        msg.innerHTML += ", tenha um Bom Dia!!"
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#75c5fa'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#5f4668'
    }


}
