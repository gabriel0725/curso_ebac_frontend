
const alunos = [
    { nome: 'Clark', nota: 8 },
    { nome: 'Thiago', nota: 5 },
    { nome: 'Jhow', nota: 7 },
    { nome: 'Guilherme', nota: 4 },
    { nome: 'Robert', nota: 9 }
];


function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}


const aprovados = alunosAprovados(alunos);
console.log(aprovados);
