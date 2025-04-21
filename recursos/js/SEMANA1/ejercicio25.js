function ejercicio3_25(){
    let arr = prompt("Introduce palabras separadas por comas:").split(',');
    alert(`Palabras que terminan en 's': ${arr.filter(palabra => palabra.toLowerCase().endsWith('s'))}`);
}