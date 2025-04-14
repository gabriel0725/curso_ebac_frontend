"use strict";
// Função SEM arrow function
function multiplicaNumeros(numero1, numero2) {
    let resultado;
    resultado = numero1 * numero2;
    return resultado;
}
function saudacao(nome) {
    let saudacao = "Olá " + nome;
    return saudacao;
}
console.log("FEITO COM FUNÇÃO NORMAL");
console.log(multiplicaNumeros(10, 2)); // Saída: 20
console.log(saudacao("Clark")); // Saída: Olá Clark
// // Função com arrow function
// console.log("FEITO COM ARROW FUNCTION")
// const multiplicaNumerosArrowFunction = (a: number, b: number): number => {
//     return a * b;
// };
// const saudacaoArrowFunction = (nome: string): string => {
//     return "Olá " + nome;
// };
// console.log(multiplicaNumerosArrowFunction(4, 6)); // Saída: 24
// console.log(saudacaoArrowFunction("Thiago")); // Saída: Olá Thiago
// // Função com arrow function ABREVIADA
// const multiplicaNumerosArrowFunctionUmaLinha = (a: number, b: number): number => a * b;
// const saudacaoArrowFunctionUmaLinha = (nome: string): string => "Olá " + nome;
// console.log("FEITO COM ARROW FUNCTION 1 LINHA")
// console.log(multiplicaNumerosArrowFunctionUmaLinha(4, 2)); // Saída: 8
// console.log(saudacaoArrowFunctionUmaLinha("Pedro")); // Saída: Olá Pedro
