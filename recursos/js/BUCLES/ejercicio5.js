function ejercicio2_5() {
    function contarVocales(palabra) {
        let contador = 0;
        let vocales = "aeiouAEIOU";
        
        for (let letra of palabra) {
            if (vocales.includes(letra)) {
                contador++;
            }
        }
        return contador;
    }
    
    let palabraUsuario = prompt("Introduce una palabra:");
    if (palabraUsuario) {
        let cantidadVocales = contarVocales(palabraUsuario);
        alert(`La palabra '${palabraUsuario}' tiene ${cantidadVocales} vocales.`);
    } else {
        alert("No ingresaste ninguna palabra.");
    }
    
}