let i;
let num = 10;
let operacao = "/";
switch(operacao) {
    case '*':
        for(i = 0; i <= 10; i++) {
            console.log(`${num} X ${i} = ${num*i}`);
        }
    break;
    case '/':
        for(i = 0; i <= 10; i++) {
            console.log(`${num} / ${i} = ${num/i}`);
        }
    break;
    case '+':
        for(i = 0; i <= 10; i++) {
            console.log(`${num} + ${i} = ${num+i}`);
        }
    break;
    case "-":
        for(i = 0; i <= 10; i++) {
            console.log(`${num} - ${i} = ${num-i}`);
        }
    break;
    default:
        console.log("operação invalida");


}