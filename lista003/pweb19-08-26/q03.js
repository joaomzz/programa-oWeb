const a = 20;
const b = 5;
const operacao = "/"
switch(operacao) {
    case '*':
        console.log(`${a} X ${b} = ${a*b}`);
    break;
    case '/':
        console.log(` ${a} / ${b} = ${a/b}`);
    break;
    case '+':
        console.log(`${a} + ${b} = ${a+b}`);
    break;
    case "-":
        console.log(`${a} - ${b} = ${a-b}`);
    break;
    default:
        console.log("operação invalida");


}