const notas = [8, 6.5, 9, 7.5];
let soma = 0;
let media;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

media = soma / notas.length;
console.log(`media: ${media}`);
if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}