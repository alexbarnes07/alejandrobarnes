function ejercicio3_30(){
    let matriz = prompt("Introduce caracteres separados por comas, usa ';' para separar filas:")
    .split(';').map(fila => fila.split(','));
    alert(`Cantidad de '*': ${matriz.flat().filter(char => char === '*').length}`);
}