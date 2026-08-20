let valor = 30;

if (valor % 10 != 0) {
    console.log("Valor inválido");
} else {

    while (valor >= 100) {
        console.log("Nota de R$ 100");
        valor = valor - 100;
    }

    while (valor >= 50) {
        console.log("Nota de R$ 50");
        valor = valor - 50;
    }

    while (valor >= 20) {
        console.log("Nota de R$ 20");
        valor = valor - 20;
    }

    while (valor >= 10) {
        console.log("Nota de R$ 10");
        valor = valor - 10;
    }
}