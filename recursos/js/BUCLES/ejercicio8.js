function ejercicio2_8(){
    function invertirTexto() {
        let texto = prompt("Introduce una palabra:");
        let textoInvertido = "";
        
        for (let i = texto.length - 1; i >= 0; i--) {
            textoInvertido += texto[i];
        }
        
        alert("Palabra invertida: " + textoInvertido);
    }

    invertirTexto();
}