function ejercicio2_7(){
    function esPrimo(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function obtenerPrimos(hasta) {
        let primos = [];
        for (let i = 1; i <= hasta; i++) {
            if (esPrimo(i)) {
                primos.push(i);
            }
        }
        return primos;
    }

    let numero = parseInt(prompt("Introduce un número:"));
    if (!isNaN(numero) && numero > 0) {
        alert("Números primos entre 1 y " + numero + ": " + obtenerPrimos(numero).join(", "));
    } else {
        alert("Por favor, introduce un número válido.");
    }
}
