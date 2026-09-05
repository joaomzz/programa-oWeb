let quant = 0;
let soma = 0;

for (let i = 1; numero <= 50; i++) {

    if (i % 3 !== 0) {
        continue;
    }

    console.log(i);
    quant++;
    soma += i;
}

console.log(`Quantidade de múltiplos: ${quant}`);
console.log(`Soma dos múltiplos: ${soma}`);