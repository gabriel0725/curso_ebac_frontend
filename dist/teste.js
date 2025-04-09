"use strict";

var alunos = [{
  nome: 'Clark',
  nota: 8
}, {
  nome: 'Thiago',
  nota: 5
}, {
  nome: 'Jhow',
  nota: 7
}, {
  nome: 'Guilherme',
  nota: 4
}, {
  nome: 'Robert',
  nota: 6
}, {
  nome: 'Queiroz',
  nota: 5
}];
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(alunos);
console.log(aprovados);