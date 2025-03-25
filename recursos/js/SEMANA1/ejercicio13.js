function ejercicio3_13(){
    let arr = prompt("Introduce números separados por comas:").split(',').map(Number);
    let resultado = arr.filter(num => num !== 0);
    alert(`Arreglo sin ceros: ${resultado}`);
}