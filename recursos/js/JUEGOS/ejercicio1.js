function ejercicio1() {
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
}

document.getElementById("cambiarColor").addEventListener("click", ejercicio1);