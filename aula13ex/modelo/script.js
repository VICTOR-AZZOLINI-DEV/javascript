function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value >= ano) {
        window.alert('ERRO Tente Novamente')
    } else {
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        
        if (fsex[0].checked){
            genero = `Homem`
            if (idade > 0 && idade < 10) {
                // Crianca
                img.setAttribute(`src`, `criancamasc.png` )
            } else if (idade < 21) {
                // Jovem
                img.setAttribute(`src`, `jovemmasc.png`)
            } else if (idade < 50) {
                // Adulto
                img.setAttribute(`src`, `adultomasc.png`)

            } else {
                // Idoso
                img.setAttribute(`src`, `idosomasc.png`)
  
            }
        
        }else if (fsex[1].checked){
            genero = `Mulher`
            if (idade > 0 && idade < 10) {
                // Crianca
                img.setAttribute(`src`, `criancafem.png`)
               
            } else if (idade < 21) {
                // Jovem
                img.setAttribute(`src`, `jovemfem.png`)
                
            } else if (idade < 50) {
                // Adulto
                img.setAttribute(`src`, `adultofem.png`)
                
            } else {
                // Idoso
                img.setAttribute(`src`, `idosofem.png`)
                
            }
        }   
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


        	
}