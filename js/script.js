function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'foto.jpg'
        document.body.style.background = '#e2cd9f'
        alert('Bom dia')
    } else if (hora >= 12 && hora <=18 ) {
        img.src = 'tarde.jpg'
        alert('Boa tarde')
    }else {
        img.src = 'noite.jpg'
        alert('Boa noite')
    }
}