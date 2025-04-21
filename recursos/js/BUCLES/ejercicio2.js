function ejercicio2_2() {
    numero = prompt("Ingresa un número para hacer su tabla de multiplicar");

    let contador = 0;
    alert(`TABLA DEL ${numero}`)
    while (contador <= 10) {
        let resultado = (numero * contador)
        alert(`${numero} x ${contador} = ${resultado}`)
        contador = contador + 1; 
    }
}