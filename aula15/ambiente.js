let num = [5, 8, 2, 9, 3]
num[5] = 6 /* adicidona um valor à um determinado índice*/
num.push(7) /* adiciona um valor para um índice adicional do vetor */
console.log(`Nosso vetor é o ${num}, com ${num.length} posições`)
num.sort() /* organiza números do vetor em ordem crescente */
console.log(`${num}`)

for(let pos=0; pos < num.length; pos++){
    console.log(`${num[pos]}`)
}

//simplificando

for(let pos in num){ 
    console.log(`${num[pos]}`)
} 

console.log(`Está na posição: ${num.indexOf(2)}`)/* Procura a posição do valor pesquisado */