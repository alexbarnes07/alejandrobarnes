function ejercicio3_6() {
    
    let numero = prompt ("Introduce un numero")

    if (numero % 3 === 0 && numero % 5 === 0){
        alert ("fizzbuzz")
    } else if (numero % 3 === 0 ){
        alert ("fizz")
    } else if (numero % 5 === 0 ){
        alert ("buzz")
    } else {
        alert ("No has introducido un número")
    }
}