function ejercicio3_28(){
    let arr = prompt("Introduce palabras numéricas separadas por comas (ej: uno, dos, tres):").split(',');
    const diccionario = { 'cero': 0, 'uno': 1, 'dos': 2, 'tres': 3, 'cuatro': 4, 'cinco': 5, 'seis': 6, 'siete': 7, 'ocho': 8, 'nueve': 9 };
    alert(`Traducción: ${arr.map(palabra => diccionario[palabra] ?? -1)}`);
}