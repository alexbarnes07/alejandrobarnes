function ejercicio3_26(){
    let matriz = prompt("Introduce números separados por comas, usa ';' para separar filas:")
    .split(';').map(fila => fila.split(',').map(Number));
    alert(`Matriz aplanada: ${matriz.flat()}`);
}