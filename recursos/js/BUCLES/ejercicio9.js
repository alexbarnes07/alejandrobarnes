function ejercicio2_9(){
    
    function contar(frase) {
        let palabras = frase.split(/\s+/);
        return palabras.length;
    }
    
    let frase = prompt("Introduce una frase:");
    if (frase) {
        alert("Número de palabras: " + contar(frase));
    } else {
        alert("No ingresaste ninguna frase.");
    }
    
}
