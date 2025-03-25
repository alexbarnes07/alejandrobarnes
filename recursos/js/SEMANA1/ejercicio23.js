function ejercicio3_23(){
    let arr = prompt("Introduce números separados por comas:").split(',').map(Number);
    alert(`Arreglo duplicado: ${arr.map(num => num * 2)}`);
}