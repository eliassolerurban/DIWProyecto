reproducir = () => {
    //replantear cómo acceder al elemento que desencadena el evento
    switch (boton.id) {
        case "audio1":
            alert("Primer botón");
            break;
        case "audio2":
            alert("Segundo botón");
            break;
        case "audio3":
            alert("Tercer botón");
            break;
        case "audio4":
            alert("Cuarto botón");
        default:
            break;
    }
}

iniciar = () => {
    boton1 = document.getElementById("audio1");
    boton2 = document.getElementById("audio2");
    boton3 = document.getElementById("audio3");
    boton4 = document.getElementById("audio4");

    botones = [boton1, boton2, boton3, boton4];

    console.log(botones);

    botones.forEach(boton => {
        boton.addEventListener("click", reproducir);
    });
}

window.addEventListener("load", iniciar, false);