function ejercicio3_22() {
    let input = prompt("Introduce una lista de números separados por comas:");
        
    let numeros = input.split(",").map(num => parseInt(num.trim()));
    
    let pares = numeros.map((num, index) => num % 2 === 0 ? index : -1).filter(index => index !== -1);
    
    if (pares.length > 0) {
        pares.forEach(pos => alert(`Posición de número par: ${pos + 1} `));
    } else {
        alert("No hay números pares.");
    }
}