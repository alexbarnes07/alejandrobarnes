function ejercicio3_11(){
    let arr = prompt("Introduce números separados por comas:").split(',').map(Number);
    let producto = arr.reduce((acc, num) => acc + num, 0);
    alert(`El producto del arreglo es: ${producto}`);
}

