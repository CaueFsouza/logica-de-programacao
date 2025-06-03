let respostaCorreta = 0
let respostaIncorreta = 0


//perguntas 1
console.log("\r")
console.log("Em que ano foi criado?")
console.log("\r")
console.log("A: 2050")
console.log("B: 2009")
console.log("C: 2030")
console.log("D: 2050")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "B" || pergunta1 == "2009"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}
//pergunta 2
console.log("\r")
console.log("Qual o mob do minecraft com mais vida?")
console.log("\r")
console.log("A: WARDEN")
console.log("B: PORCO")
console.log("C: IRON GOLEM")
console.log("D: ESQUELETO")
let pergunta2 = prompt("Digite a alternativa correta: ")
if(pergunta2 == "A" || pergunta2 == "WARDEN"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
        respostaIncorreta ++
}
//pergunta 3
console.log("\r")
console.log("Qual dessas comidas enche mais a fome?")
console.log("\r")
console.log("A: BIFE COZIDO")
console.log("B: COSTELA DE PORCO ASSADA")
console.log("C: CENOURA DOURADA")
console.log("D: BATATA")
let pergunta3 = prompt("Digite a alternativa correta: ")
if (pergunta3 == "C" || pergunta3 == "CENOURA DOURADA"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
        respostaIncorreta ++
   
}
//pergunta 4
console.log("\r")
console.log("Qual a armadura mais forte?")
console.log("\r")
console.log("A: OURO")
console.log("B: DIAMANTE")
console.log("C: COURO")
console.log("D: NETHERITE")
let pergunta4 = prompt("Digite a alternativa correta: ")
if (pergunta4 == "D" || pergunta4 == "NETHERITE"){
    console.log("alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}
//pergunta 5
console.log("\r")
console.log("Qual bloco é usado para colar e copiar estruturas?")
console.log("\r")
console.log("A: STRUCTURE_BLOCK")
console.log("B: COMMAND_BLOCK")
console.log("C: BARRIER")
console.log("D: BLOCO DE FERRO")
let pergunta5 = prompt("Digite a alternativa correta: ")
if (pergunta5 == "A" || pergunta5 == "STRUCTURE_BLOCK"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}
//pergunta 6
console.log("\r")
console.log("Qual minerio mais raro do minecraft?")
console.log("\r")
console.log("A: ESMERALDA")
console.log("B: DIAMANTE")
console.log("C: FERRO")
console.log("D: CARVÂO")
let pergunta6 = prompt("Digite a alternativa correta: ")
if (pergunta6 == "A" || pergunta6 == "ESMERALDA"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}
//pergunta 7
console.log("\r")
console.log("Como se chama o bioma novo?")
console.log("\r")
console.log("A: DESERTO")
console.log("B: FLORESTA DE CEREJEIRAS")
console.log("C: SAVANA")
console.log("D: JARDIM PALIDO")
let pergunta7 = prompt("digite a alternativa correta: ")
if (pergunta7 == "D" || pergunta7 == "JARDIM PALIDO"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}
//pergunta 8
console.log("\r")
console.log("Qual o nome original do game antes de minecraft?")
console.log("\r")
console.log("A: CAVE GAME")
console.log("B: CASA DOS 3 PORQUINHOS")
console.log("C: BLOCK CRAFT")
console.log("D: CUBE WORLD")
let pergunta8 = prompt("Digite a alternativa correta: ")
if (pergunta8 == "A" || pergunta8 == "CAVE GAME"){
    console.log("Alternativa correta!")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}
//pergunta 9
console.log("\r")
console.log("Qual mob te deixa com fome ao encostar?")
console.log("\r")
console.log("A: ZUMBI DO DESERTO")
console.log("B: ARANHA")
console.log("C: BRUXA")
console.log("D: GUARDIAN")
let pergunta9 = prompt("Digite a alternativa correta: ")
if (pergunta9 == "A" || pergunta9 == "ZUMBI DO DESERTO"){
    console.log("Alternativa correta!")
    respostaCorreta ++

}else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}
//pergunta 10
console.log("\r")
console.log("Quem é o criador do minecraft?")
console.log("\r")
console.log("A: NOTCH")
console.log("B: MOJANG")
console.log("C: MICROSOFT")
console.log("D: BILL GATES")
let pergunta10 = prompt("Digite a alternativa correta: ")
if (pergunta10 == "A" || pergunta10 == "NOTCH"){
    console.log("Alternativa correta!")
    respostaCorreta ++

}else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}
    
//resultado final
console.log("\r")
console.log("\r Resumo final")
console.log("Respostas Corrretas: " + respostaCorreta)
console.log("Respostas Incorretas: " + respostaIncorreta)