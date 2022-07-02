function contar(){
    var initxt = window.document.getElementById('initxt')
    var fimtxt = window.document.getElementById('fimtxt')
    var pastxt = window.document.getElementById('pastxt')
    var res = window.document.querySelector("div#res")
    var ini = Number(initxt.value)
    var fim = Number(fimtxt.value)
    var pas = Number(pastxt.value)
    if (ini == 0 || fim == 0 || pas == 0){
        window.alert(`Erro digite o passo novamente`)
    }else if (ini < fim){
        for (var ini; ini <= fim; ini += pas){
            res.innerHTML += ` ${ini} &#x1F449 `
            }
    }else if (ini > fim){
        for (var ini; ini >= fim; ini = ini - pas){
            res.innerHTML += ` ${ini} &#x1F449 `
        }
    } res.innerHTML += `&#x1F3C1 `
    

   
}