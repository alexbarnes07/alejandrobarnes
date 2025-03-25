function ejercicio2_10() {
    let aleatorio = Math.floor(Math.random() * 50) + 1;
    let numero = null;

    while (numero !== aleatorio) {
        numero = prompt("Ingresa un número entre 1 y 50:");
        numero = Number(numero);

        if (numero == "") {
            break;
        }
        
        if (isNaN(numero) || numero < 1 || numero > 50) {
            alert("Por favor, ingresa un número válido entre 1 y 100.");
            continue;
        }

        if (numero > aleatorio) {
            alert("El número secreto es más pequeño.");
        } else if (numero < aleatorio) {
            alert("El número secreto es más grande.");
        } else {
            alert(`¡HAS GANADO! El número era ${aleatorio}`);
            return;
        }
    }
}