const prompt = require("prompt-sync")();
let notas = [];
function adioionarNotas() {
    let nota = Number(prompt(`Digite a sua nota: `));

    if (nota < 0 || nota > 10 || isNaN(nota)) {
        console.log(`Nota Invalida`);

    }
    else {
        notas.push(nota);
        console.log(`Nota adicionada!`);

    }
}

function mostrarNotas() {
    console.log(`=====--NOTAS--=====`);
    for (let i = 0; i < notas.length; i++) {
        console.log(`${notas[i]}`);
        
    }
}

function Media() {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }

    let media = soma / notas.length;
    console.log(`Sua Media: ${media}`);

    if (media >= 6) {
        console.log(`SITUAÇÃO: Aprovado!`);

    }
    else if(media > 3 && media < 6) {
        console.log(`SITUAÇÃO: Recuperação!`);

    }
    else {
        console.log(`SITUAÇÃO: Reprovado!`);
    
    }
}

function Menu() {
    console.log(`=====--CALCULADOR ESTUDANTIL--=====`);
    console.log(`1 - Adicionar Nota`);
    console.log(`2 - Mostrar Notas`);
    console.log(`3 - Calcular Media`);
    console.log(`4 - Encerrar`);

}

function Main() {
    let opcao;
    do {
        Menu();
        opcao = Number(prompt(`Digite o numero da opção: `));

        switch(opcao) {
            case 1:
                adioionarNotas();
                break;
            
            case 2:
                mostrarNotas();
                break;
            
            case 3:
                Media();
                break;
            
            case 4:
                console.log(`ENCERRADO.`);
                break;
            
            default:
                console.log(`OPÇÃO INVALIDA`);
                break;
        }   
    } while(opcao != 4);
}

Main();

