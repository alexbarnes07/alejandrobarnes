function ejercicio3_19 () {
    let input = prompt("Introduce una lista de numeros separados por comas:");

    let numeros = input.split(",").map(numeros => numeros.trim());

    let min = Math.min(...numeros);

    alert (`El número más pequeño es ${min}`)
}