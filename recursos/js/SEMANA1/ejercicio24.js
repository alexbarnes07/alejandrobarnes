function ejercicio3_24(){
    let arr = prompt("Introduce palabras separadas por comas:").split(',');
    alert(`Palabras que empiezan con 'a': ${arr.filter(palabra => palabra.toLowerCase().startsWith('a'))}`);
}
