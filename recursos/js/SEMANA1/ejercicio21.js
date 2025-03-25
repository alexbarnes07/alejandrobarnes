function ejercicio3_21() {
    let input = prompt("Introduce una lista de números separados por comas:");
    
    let numeros = input.split(",").map(num => parseInt(num.trim()));
    
    let pares = numeros.filter(num => num % 2 === 0);
    
    if (pares.length > 0) {
        pares.forEach(par => alert(`Número par: ${par}`));
    } else {
        alert("No hay números pares.");
    }
}
