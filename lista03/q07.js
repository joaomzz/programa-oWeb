
/* let nota = 0;
if (nota >= 0 && nota <= 10) {
    switch(true){
        case (nota <= 4.9 && nota > 0):
            console.log("reprovado");
            break;
        case (nota <= 6.9 && nota >= 4.9 ):
            console.log("recuperação");
            break;
        case (nota >= 7):
            console.log("aprovado");
    }
}
else{
    console.log("nota invalida")
}
*/


let nota = 0;
if (nota >= 0 && nota <= 10) {
    switch (true) {
        case (nota <= 4.9 && nota >= 0):
            console.log("reprovado");
            break;
        case (nota <= 6.9 && nota > 4.9):
            console.log("recuperação");
            break;
        case (nota >= 7):
            console.log("aprovado");
            break;
    }
} else {
    console.log("nota invalida");
}
