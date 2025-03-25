function ejercicio3_17(){
    let str = prompt("Introduce una frase:");
    let resultado = str.split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
    alert(`Frase capitalizada: ${resultado}`);
}