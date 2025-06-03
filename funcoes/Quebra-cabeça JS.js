1-
let idade = 10
let categoria = ""

//resultado do calculo da idade
if (idade < 12) {
    console.log(categoria = "criança")
}else if(idade >= 12 && idade <= 18){
    console.log(categoria = "adolescente")
}else if(idade > 18 && idade < 60){
    console.log(categoria = "adulto")
}else{
    console.log(categoria = "Idosa")
}
console.log("idade final: " + idade)

2-
idade = 71

if(idade < 16){
    console.log("Não vota.")
}else if(idade >= 16 && idade <= 18){
    console.log("Voto facultativo")
}else if(idade > 18 && idade < 25){
    console.log("Voto obrigatório")
}else if(idade >= 25 && idade <= 70){
    console.log("Voto obrigatório")
}else{
    console.log("Voto facultativo")
}

3-

let numero = 0

if(numero < 0){
    console.log("Negativo")
}else if(numero == 0){
    console.log("Zero")
}else{
    console.log("Positivo")
}

4-

let combustivel = prompt("Digite um forma de combustível:".toLowerCase())

if(combustivel === "gasolina"){
    console.log("você escolheu Gasolina")
}else if(combustivel === "diesel"){
    console.log("você escolheu Diesel")
}else if(combustivel === "alcool"){
    console.log("você escolheu Alcool.")
}else{
    console.log("Opção invalida")
}

5-

let velocidade = 76

if(velocidade < 60){
    console.log("Dentro do limite")
}else if(velocidade >= 60 && velocidade <= 75){
    console.log("Atenção")
}else{
    console.log("Multado")
}
