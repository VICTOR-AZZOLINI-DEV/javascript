function multiplicar(){
    var numtxt = window.document.getElementById("numtxt")
    var tab = window.document.getElementById(`seltab`)
    var c = 1
    var m = 0
    if (numtxt.value.lenght == 0) {
        window.alert('Digite um número')
    } else{
        var num = Number(numtxt.value)
        tab.innerHTML = ''
        while(c <= 10){
            m = c * num
            var item = document.createElement('option')
            item.text = `${c} X ${num} = ${m} `
            item.value = `tab${c}`
            tab.appendChild(item)
            c++   
        }
    }
    
}