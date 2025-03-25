function ejercicio3_4(){
    let input = prompt("Introduce una lista de palabras separadas por comas:");

    let palabras = input.split(",").map(palabra => palabra.trim());

    palabras.forEach(palabra => {
        alert(palabra);
});
}