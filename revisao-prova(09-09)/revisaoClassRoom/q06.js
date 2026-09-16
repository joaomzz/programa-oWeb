function inverter(normal) {
    let invertida = ``;

    for(let i = normal.length - 1; i >= 0; i--) {
        invertida = invertida + normal[i];

    }

    return invertida;

}

console.log(inverter(`Joao`))