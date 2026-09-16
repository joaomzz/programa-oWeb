/*
function maiorDeTres(a, b, c) {
    if (a > b && a > c) {
        console.log(`${a} Maior que ${b} e ${c}`);

    }
    else if(b > a && b > c) {
        console.log(`${b} Maior que ${a} e ${c}`);
    }
    else {
        console.log(`${c} Maior que ${a} e ${b}`);
    
    }
}


maiorDeTres(3,7,4);
*/

function maiorDeTres(a, b, c) {
    if (a > b && a > c) {
        return (`${a} Maior que ${b} e ${c}`);

    }
    else if(b > a && b > c) {
        return (`${b} Maior que ${a} e ${c}`);
    }
    else {
        return (`${c} Maior que ${a} e ${b}`);
    
    }
}


console.log(maiorDeTres(3,7,4));
