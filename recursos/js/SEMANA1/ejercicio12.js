function ejercicio3_12() {
    let arr = prompt("Introduce números separados por comas:").split(',').map(Number);
    let producto = arr.reduce((acc, num) => acc * num, 1);
    alert(`El producto del arreglo es: ${producto}`);
}