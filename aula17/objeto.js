let amigo = {nome: "José",
sexo: "M",
peso: 85.3,
engordar(p){
    console.log(`Engorodou`)
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)