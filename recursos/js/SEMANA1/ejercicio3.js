function ejercicio3_3(){
    let altura = prompt("Introduce tu altura en metros");
    altura = Number(altura)
   
    let peso = prompt("Introduce tu peso");
    peso = Number(peso)

    let BMI = peso / (altura * altura)
    BMI = Number(BMI)

    if (BMI < 18.5){
        alert("Bajo de peso")
    } else if (BMI >= 18.5 && BMI <= 24.9){
        alert("Normal")
    } else if (BMI >= 25 && BMI <= 29.9) {
        alert("Sobrepeso")
    } else {
        alert("Obeso")
    } 

}