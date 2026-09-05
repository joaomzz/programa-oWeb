let pares = 0;
let impares = 0;
for(let i = 0; i <= 20; i++){
    switch(i % 2) {
        case 0:
            console.log(`${i} é par`);
            pares++;
            break;
        case 1:
            console.log(`${i} é impar`);
            impares++;
            break;

    }
}
console.log(`Numero de pares: ${pares} | Numero de impares: ${impares}`);

