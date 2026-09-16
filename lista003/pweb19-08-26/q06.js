let num = 10;
let soma = 0;
let quant = 0;

if(num > 0) {
    for(let i = 1; i <= num; i++){
        if (i % 2==0){
            console.log(i);
            soma = soma + i;
            quant++;


        }
    }
}
console.log(`quantidade de pares ${quant}`);
console.log(`soma dos pares ${soma}`);
