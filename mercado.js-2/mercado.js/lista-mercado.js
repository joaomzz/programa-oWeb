const prompt = require(`prompt-sync`)({ sigint: true});


const lista = [];

function Menu() {
    console.log("\n==========-Menu-===========");
    console.log("1 - Listar itens");
    console.log("1 - Adicionar item");
    console.log("3 - Editar item");
    console.log("4 - Excluir item");
    console.log("5 - Marcar/desmarcar");
    console.log("0 - sair");


}

function main() {
    let opcao;

    do {
        Menu();

        opcao = prompt(`Escolha uma opção: `).trim();
        
            
        switch(opcao) {
            case `1`:
                listItens();
                break;

            case `2`:
                addItem();
                break;

            case `3`:
                editarItem();
                break;

            case `4`:
                excluirItem();
                break;

            case `5`:
                marcarComprado();
                break;
                
            case `0`:
                console.log(`\n Encerrado`);
                break;

            default:
                console.log(`Opção invalida`);
                break;

        }

    } while (opcao !== 0);
}

main();

function listItens() {

    if (lista.length == 0){
        console.log(`Lista Vazia!`);
        return;

    }
    
    console.log(`\n =========-LISTA-========`);

    for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        const marcar = item.comprado ? `[X]` : `[ ]`;

        console.log(`${i + 1} - ${marcar} ${item.nome} (qtd: ${item.quantidade})`);
       
        
    }

    const comprados = lista.filter((item) => item.comprado).length;
    console.log(`\n Total ${lista.length} item(ns) | Comprados: ${comprados}`);


    }







