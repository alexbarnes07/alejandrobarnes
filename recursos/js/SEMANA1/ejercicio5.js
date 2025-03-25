function ejercicio3_5() {
    let numero = prompt("Introduce el número de likes:");
    numero = Number(numero);

    function likes(numero) {
        if (isNaN(numero)) {
            alert("No has introducido un número válido");
        } else if (numero < 1000) {
            alert(numero.toString());
        } else if (numero >= 1000 && numero < 1000000) {
            alert(`${Math.floor(numero / 1000)}K`);
        } else {
            alert(`${Math.floor(numero / 1000000)}M`);
        }
    }
    
    likes(numero);
}
