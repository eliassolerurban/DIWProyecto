iniciar = () => {
    audio1 = document.getElementById("audio1");
    audio2 = document.getElementById("audio2");
    audio3 = document.getElementById("audio3");
    audio4 = document.getElementById("audio4");

    boton1 = document.getElementById("boton1");
    boton2 = document.getElementById("boton2");
    boton3 = document.getElementById("boton3");
    boton4 = document.getElementById("boton4");

    boton1.addEventListener("click", function() {
        audio1.play();
    });
    boton2.addEventListener("click", function() {
        audio2.play();
    });
    boton3.addEventListener("click", function() {
        audio3.play();
    });
    boton4.addEventListener("click", function() {
        audio4.play();
    });
}

window.addEventListener("load", iniciar, false);