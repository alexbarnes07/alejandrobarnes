function ejercicio3_31(){
    let str1 = prompt("Introduce la primera cadena:");
    let str2 = prompt("Introduce la segunda cadena:");
    let dif = Math.abs(str1.length - str2.length);
    let minLength = Math.min(str1.length, str2.length);
    for (let i = 0; i < minLength; i++) {
        if (str1[i] !== str2[i]) dif++;
    }
    alert(`Distancia entre cadenas: ${dif}`)
}