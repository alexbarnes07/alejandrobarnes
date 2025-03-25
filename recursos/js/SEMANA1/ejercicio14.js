function ejercicio3_14(){
    let arr = prompt("Introduce números separados por comas:").split(',').map(Number);
    let inicio = Number(prompt("Introduce la posición inicial:"));
    let fin = Number(prompt("Introduce la posición final:"));
    let suma = arr.slice(inicio, fin + 1).reduce((acc, num) => acc + num, 0);
    alert(`La suma del rango es: ${suma}`);
}