let numero1 = Number(prompt("Digite um número: "));
let numero2 = Number(prompt("Digite outro número: "));

function soma() {
    return numero1 + numero2;
}

function dividir() {
    return numero1 / numero2;
}

function subtrair() {
    return numero1 - numero2;
}

function multiplicar() {
    return numero1 * numero2;
}

console.log("Estes são seus números:", numero1, numero2, "\nComo deseja calcular?\n");
console.log("1 - Somar\n2 - Dividir\n3 - Subtrair\n4 - Multiplicar\n");

let opcao = Number(prompt("Digite a opção: "));
let resultado;

if (opcao === 1) {
    resultado = soma();
} else if (opcao === 2) {
    resultado = dividir();
} else if (opcao === 3) {
    resultado = subtrair();
} else if (opcao === 4) {
    resultado = multiplicar();
} else {
    console.log("Opção inválida");
}

if (resultado !== undefined) {
    console.log("Resultado:", resultado);
}
