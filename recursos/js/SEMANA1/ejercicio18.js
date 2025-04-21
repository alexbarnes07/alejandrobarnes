function ejercicio3_18 () {
    let input = prompt("Introduce una lista de numeros separados por comas:");

    let numeros = input.split(",").map(numeros => numeros.trim());

    let max = Math.max(...numeros);

    alert (`El número más grande es ${max}`)
}