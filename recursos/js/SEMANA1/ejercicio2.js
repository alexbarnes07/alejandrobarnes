function ejercicio3_2(){
    let edad = prompt("Introduce tu edad");
    edad = Number(edad)
    let ingresos = prompt("Introduce la cantidad ingresos");
    ingresos = Number(ingresos)

     if (edad >= 18 && ingresos >= 1000){
        let devolver = ingresos * 0.40
        alert (`Debe retornar ${devolver}`)
     }else {
        alert ("No debes retornar nada")
     }

     }    