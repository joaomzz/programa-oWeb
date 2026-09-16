function situacao(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }
    let media = soma/(notas.length);
    if (media >= 7) {
        console.log(`Aprovado com media ${media}`);

    }
    else if(media >= 4 && media < 7) {
        console.log(`Recuperção. Media: ${media}`);

    }
    else {
        console.log(`Reprovado. Media: ${media}`);

    }

}

situacao([2, 3, 10, 10]);
