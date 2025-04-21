function ejercicio3_27(){
    let arr = prompt("Introduce números del 0 al 9 separados por comas:").split(',').map(Number);
    const diccionario = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    alert(`Traducción: ${arr.map(num => diccionario[num])}`);
}