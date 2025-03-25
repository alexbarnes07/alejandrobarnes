function ejercicio3_20 () {
    let str = prompt("Introduce una frase:");
    let resultado = str.toLowerCase().replace(/a/g, '4').replace(/e/g, '3')
        .replace(/i/g, '1').replace(/o/g, '0').replace(/\s/g, '');
    alert(`Contraseña generada: ${resultado}`);
}