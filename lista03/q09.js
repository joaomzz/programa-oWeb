let i = 3;
let senha = 333;
while(i > 0){
    if(senha === 789 ) {
        console.log("Acesso permitido!");
        
    }
    else {
        console.log("Senha incorreta!");
        console.log(`tentativas restantes ${i}`);
        
    }

    i--;
}
console.log("conta bloqeuada");