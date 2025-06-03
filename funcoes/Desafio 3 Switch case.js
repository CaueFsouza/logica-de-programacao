// título
console.log("Aprender os comandos do CMD Linux e Windows\nSelecione o Tutorial que deseja\n");

console.log("1-LINUX\n2-WINDOWS");
let resposta = Number(prompt("Digite o numero: "));

// opções ao selecionar entre Windows e Linux
if (resposta === 1) {
    // Linux
    console.log("Você selecionou LINUX\nQuais comandos você quer aprender?");

    console.log("Comandos disponíveis: pwd\nls\nping\ncd\ncat\ntop\n");

    // respostas
    let resposta2 = prompt("Digite um comando: ").toLowerCase();

    switch (resposta2) {
        case "pwd":
            console.log("Exibe o diretório atual.");
            break;
        case "ls":
            console.log("Lista os arquivos e diretórios no diretório atual");
            break;
        case "ping":
            console.log("Verifica a conectividade com um host");
            break;
        case "cd":
            console.log("Muda o diretório de trabalho");
            break;
        case "cat":
            console.log("Exibe o conteúdo de um arquivo");
            break;
        case "top":
            console.log("Exibe os processos em execução");
            break;
        default:
            console.log("comando inválido");
            break;
    }
} else if (resposta === 2) {
    // Windows
    console.log("Você selecionou WINDOWS(BÁSICO)\n");
    console.log("Comandos disponíveis:\ndir\ncls\ncd..\ncd\nmkdir\necho\nstart\nrmdir");

    let resposta3 = prompt("Digite um comando: ").toLowerCase();

    switch (resposta3) {
        case "dir":
            console.log("\nLista os arquivos e pastas no diretório atual");
            break;
        case "echo":
            console.log("\nExibe uma mensagem no console");
            break;
        case "cls":
            console.log("\nLimpa a tela do CMD");
            break;
        case "ipconfig":
            console.log("\nExibe as configurações de rede");
            break;
        case "cd":
            console.log("\nMuda o diretório de trabalho");
            break;
        case "cd..":
            console.log("\nVolta para um diretório");
            break;
        case "start":
            console.log("\nAbre programas, arquivos, pastas ou URLs");
            break;
        case "mkdir":
            console.log("\nCria pastas/diretórios");
            break;
        default:
            console.log("\nComando inválido");
    }
}
