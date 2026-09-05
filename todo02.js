    const prompt = require("prompt-sync")();

let tarefas = [];

function adicionarTarefa() {
    let nome = prompt(`Adicione a tarefa: `);
    if (nome === "") {
        console.log(`Invalido!(Não pode estar vazio)`);

    }
    else {
        let tarefa = {
            nome: nome,
            concluida: false
        };

        tarefas.push(tarefa);
        console.log(`Tarefa adicionada!`);

    }
}

function listarTarefas() {
    if (tarefas.length === 0) {
        console.log(`Sem tarefas!`);

    }

    console.log(`==========--TAREFAS--==========`);
    
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].concluida === true) {
            console.log(`${i + 1} -- ${tarefas[i].nome} ==> Concluida!`);

        }
        else {
            console.log(`${i + 1} -- ${tarefas[i].nome} ==> Pendente!`);

        }  
    }    
}

function concluirTarefa() {
   listarTarefas();
   if (tarefas.length === 0){
    return;

   }
   
   let num = Number(prompt(`Digite o numero da tarefa que deseja concluir: `));

   if (num <= tarefas.length && num > 0) {
    tarefas[num - 1].concluida = true;
    console.log(`Tarefa concluida!`);
    
   }
   else {
    console.log(`Tarefa inexistente.`);

   }

}

function removerTarefa() {
    listarTarefas();
    if (tarefas.length === 0) {
        return;
    }

    let num = Number(prompt("Diigite o numero da tarefa que deseja remover: "));

    if (num <= tarefas.length && num > 0){
        tarefas.splice(num -1, 1);
        console.log(`Tarefa removida!`);

    }
    else {
        console.log(`Tarefa inexistente.`);

    }
}

function Menu() {
    console.log("\n==========-To Do-===========");
    console.log("1 - Listar tarefas");
    console.log("2 - Adicionar tarefa");
    console.log("3 - Concluir tarefa");
    console.log("4 - Remover tarefa");
    console.log("0 - sair");


}

function main() {
    let opcao;

    do {
        Menu();

        opcao = prompt(`Escolha uma opção: `).trim();
        
            
        switch(opcao) {
            case `1`:
                listarTarefas();
                break;

            case `2`:
                adicionarTarefa();
                break;

            case `3`:
                concluirTarefa();
                break;

            case `4`:
                removerTarefa();
                break;
                
            case `0`:
                console.log(`\n Encerrado`);
                break;

            default:
                console.log(`Opção invalida`);
                break;

        }

    } while (opcao !== `0`);
}

main();




