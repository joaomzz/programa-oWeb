const prompt = require("prompt-sync")();


let alunos = [];
let notas = [];

function adicionarAlunos {
    let aluno = prompt(`Cadastre o Aluno(Primeiro nome): `);

    if (aluno.length == ``) {
        console.log(`Campo vazio, Digite o nome do aluno corretamente.`);

    }
    else {
        alunos.push(aluno);
        console.log(`Aluno cadastrado!`);

    }

}

function adicionarNotas {
    let aluno = Number(prompt(`Adicione a nota: `));

    if (nota < 0 || nota > 10 ) {
        console.log(`Incorreto. Tente novamente.`);

    }
    else {
        notas.push(nota);
        console.log(`Nota Adicionada!`);

    }
    
}

