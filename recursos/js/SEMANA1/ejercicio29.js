function ejercicio3_29(){
    let arr = prompt("Introduce caracteres separados por comas:").split(',');
    alert(`Cantidad de '*': ${arr.filter(char => char === '*').length}`);
}