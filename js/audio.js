let reproducir1 = () => {
    audio1.play();
}

let reproducir2 = () => {
    audio2.play();
}

let reproducir3 = () => {
    audio3.play();
}

let reproducir4 = () => {
    audio4.play();
}

iniciar = () => {
    audio1 = document.getElementById("audio1");
    audio2 = document.getElementById("audio2");
    audio3 = document.getElementById("audio3");
    audio4 = document.getElementById("audio4");

    boton1 = document.getElementById("boton1");
    boton2 = document.getElementById("boton2");
    boton3 = document.getElementById("boton3");
    boton4 = document.getElementById("boton4");

    boton1.addEventListener("click", reproducir1);
    boton2.addEventListener("click", reproducir2);
    boton3.addEventListener("click", reproducir3);
    boton4.addEventListener("click", reproducir4);
}

window.addEventListener("load", iniciar, false);