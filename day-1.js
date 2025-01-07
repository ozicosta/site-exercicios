// //ex1: Verificação de Par ou Ímpar: Crie um programa que peça um número ao usuário e informe se ele é par ou ímpar.
function imparOupar(){
let valorUsuario = document.getElementById('valor').value

if((valorUsuario % 2) == 0){
    alert("It's even (é par)") //par
}else 
    alert("It's odd (é impar)") //impar
}
// //************************************************************************************************************************************/

// //ex2: Criar um programa para solicitar a idade do usuário e informar se maior de idade

// const age = parseInt(prompt("Enter your age: "))

// if(age >= 12 && age < 18){
//     alert("you are a minor age")//menor de idade
// }else if(ge >= 18 && age < 65){
//     alert("you are of legal age")//maior de idade
// }else if(age > 64){
//     alert("you are elderly")//idoso
// }else{
//     alert("you are a child")//criança
// }

// //usando operador ternário

function seMaiorIdade(){
const idadeUsuario = document.getElementById('ageUser').value
const result = (idadeUsuario > 18) ? "legal age  (maior de idade)" : "minor age (menor de idade"
alert(result)
}
// //************************************************************************************************************************************/

// ex3: Escreva um programa que permita inserir a velocidade de dois veiculos e exiba na tela uma mensagem dizendo qual dos dois é mais rádido(se iguais informar)
function verificarVelocidade(){
let car1 = parseFloat(document.getElementById('vel1').value)
 let car2 = parseFloat(document.getElementById('vel2').value)

    if(car1 > car2){
        alert("1° veiculo mais rapido")
    }else if(car1 < car2){
        alert("2° veículo mais rapido")
    }else{
        alert("mesma velocidade")
    }
}
// //************************************************************************************************************************************/


// //ex4: jogo

// const nomePersonagem1 = prompt("Informe o nome do personagem 1")
// const poderDeAtaquePers1 = parseFloat(prompt("Informe o poder de ataque do personagem 1: "))

// const nomePersonagem2 = prompt("Informe o nome do personagem 2: ")
// const qtdDePontosPers2 = parseFloat(prompt("Informe a quantidade de pontos de vida do personagem: "))
// const poderDeDefesaPers2  = parseFloat(prompt("Informe o poder de defesa do personagem 2: "))
// const possuiEscudo  = confirm("Possui escudo?")

// if((poderDeAtaquePers1 > poderDeDefesaPers2) && (possuiEscudo == false)){
//     const danoCausado = poderDeAtaquePers1 - poderDeDefesaPers2
//     const pontosDeVida = qtdDePontosPers2 - danoCausado
//     alert("Personagem 2: " + nomePersonagem2 + "\nPontos de vida atual: " + pontosDeVida + "\nDano causado: " + danoCausado)

// }else if((poderDeAtaquePers1 > poderDeDefesaPers2) && (possuiEscudo == true)){
//     danoCausado = (poderDeAtaquePers1 - poderDeDefesaPers2 )/2
//     pontosDeVida  = qtdDePontosPers2 -danoCausado
//     alert("Personagem 2: " + nomePersonagem2 + "\nPontos de vida atual: " + pontosDeVida + "\nDano causado: " + danoCausado)

// }else if(poderDeAtaquePers1 <= poderDeDefesaPers2){
//     alert("Personagem 2: " + nomePersonagem2 + "\nPontos de vida atual: " + qtdDePontosPers2 + "\nNENHUM DANO CAUSADO")

// }else alert("INFORMAÇÕES NÃO ENCONTRADA")
// //************************************************************************************************************************************/


// //ex5: Conversor de medidas usando switch case + while

// while(true){
//     const num = prompt("digite um numero\n\npara sair digite: sair")
    
//     if(num == "sair"){
//         break
//     }

//     const medida = prompt("Escolha uma medida\n-mm\n-cm\n-dm\n-dam\n-hm\n-km")

// switch(medida){
//     case "mm":
//         alert("Valor a ser convetido: " + num + " metros\nO valor convertido: " +  (num * 1000) + " mm")
//     break
//     case "cm":
//         alert("Valor a ser convetido: " + num + " metros\nO valor convertido: " +  (num * 100) + " cm")
//     break
//     case "dm":
//         alert("Valor a ser convetido: " + num + " metros\nO valor convertido: " +  (num * 10) + " dm")
//     break
//     case "dam":
//         alert("Valor a ser convetido: " + num + " metros\nO valor convertido: " +  (num / 10) + " dam")
//     break
//     case "hm":
//         alert("Valor a ser convetido: " + num + " metros\nO valor convertido: " +  (num / 100) + " hm")
//     break
//     case "km":
//         alert("Valor a ser convetido: " + num + " metros\nO valor convertido: " +  (num / 1000) + " km")
//     break
   
//     default: 
//     alert("Opção inválida")
//     break
// }
//         }

// alert("saindo...")
// //************************************************************************************************************************************/

// //ex6: turista

// const nameTurista = prompt("Informe o seu nome: ")
// let cidadeVisitadas = "  "
// let contador = 0

// while(true){
// const boleanoVisitou =  prompt(" Visitou alguma cidade? ")

// if(boleanoVisitou === "sim"){
//     const cidade = prompt(" Qual cidade voce visitou: ")
//     cidadeVisitadas  += " - " + cidade + "\n"
//     contador++

// }else if(boleanoVisitou === "não"){
//     break
// }
//         }

//     alert("Prazer em conhecer, " + nameTurista + "\nVoce visitou: "  + contador +  " cidades\n\nSão elas: " + cidadeVisitadas)
// //************************************************************************************************************************************/

