// Exercício 1
let usuario = prompt("Digite seu nome: ")

while(usuario === ""){
    console.log("Escreva seu nome!")
    usuario = prompt("Digite seu nome: ")
}
console.log("Seu nome é:", usuario)

// Exercício 2
console.log("Bem-vindo")
let senha = Number(prompt("Digite sua senha: "))

while(senha !== 1234){
    console.log("Senha inválida!")
    senha = Number(prompt("Digite sua senha: "))
}
console.log("Senha correta, seja bem-vindo(a)!")

// Exercício 3
console.log("Olá!")
let senhaP = prompt("Digite sua senha: ")
let confirmar = prompt("Confirmar senha: ")

while(senhaP !== confirmar){
    console.log("As senhas não se coincidem")
    confirmar = prompt("Confirmar senha: ")
}
console.log("Seja bem-vindo")

// Exercício 4
let nome = prompt("Digite seu usuário: ")
let senha = Number(prompt("Digite sua senha: "))

while(nome !== "admin" || senha !== 1234){
    console.log("\nLogin inválido! Tente novamente.")
    nome = prompt("Digite seu usuário: ")
    senha = Number(prompt("Digite sua senha: "))
}
console.log("\nLogin efetuado com sucesso")

// Exercício 5
console.log()
let nome2 = prompt("Digite seu usuário: ")
let senha2 = Number(prompt("Digite sua senha: "))

while(nome2 !== "admin" || senha2 !== 1234){
    console.log("\nUsuário ou senha incorretos.")
    nome2 = prompt("Digite seu usuário: ")
    senha2 = Number(prompt("Digite sua senha: "))
}
console.log("\nLogin efetuado com sucesso")

// Exercício 6
let tentativa = 1

while (tentativa <= 3){
    let nome3 = prompt("Digite seu nome: ")
    let senha3 = Number(prompt("Digite sua senha: "))
    
    if(nome3 === "admin" && senha3 === 1234){
        console.log("Login efetuado")
        break;
    }else{
        console.log("Senha incorreta")
        tentativa ++
    }
}
if (tentativa > 3){
    console.log("Acesso negado")
}

// Exercício 7
// cadastro
let nomeCadastro = prompt("Digite seu usuário: ")
let senhaCadastro = prompt("Digite sua senha: ")

// login
let nomeLogin = prompt("Digite seu usuário: ")
let senhaLogin = prompt("Digite sua senha: ")

// sistema de verificação
while(nomeLogin !== nomeCadastro || senhaLogin !== senhaCadastro){
    console.log("\nLogin incorreto, tente novamente!")
    nomeLogin = prompt("Digite seu nome para login:")
    senhaLogin = prompt("Digite sua senha para login:")
}

console.log("\nLogin efetuado")

// 8. Login com "Esqueci minha senha"
let usuario8 = "user1";
let senha8 = "senha123";

while (true) {
  let login8 = prompt("Login:");
  let senhaLogin8 = prompt("Senha:");
  if (login8 === usuario8 && senhaLogin8 === senha8) {
    console.log("Login realizado com sucesso!");
    break;
  } else {
    console.log("Usuário ou senha incorretos.");
    let esqueceu = prompt("Esqueceu a senha? (sim/não)").toLowerCase();
    if (esqueceu === "sim") {
      console.log("Sua senha é: " + senha8);
    }
  }
}

// 9. Sistema com login e logout
let user9 = "admin";
let pass9 = "1234";

while (true) {
  let login9 = prompt("Login:");
  let senha9 = prompt("Senha:");
  if (login9 === user9 && senha9 === pass9) {
    console.log("Você está logado!");
    let comando = "";
    while (comando !== "sair") {
      comando = prompt("Digite 'sair' para fazer logout:");
    }
    console.log("Logout realizado.");
    break;
  } else {
    console.log("Usuário ou senha incorretos.");
  }
}