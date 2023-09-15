let div = document.getElementById("main");
let contador = 1;
let fototroll = document.getElementById("fototroll");
let fotooriginal = document.getElementById("fotooriginal");
let tope = 25;

fototroll.innerHTML = "<img src='./img/JUEGO/" + contador + "/" + contador + ".jpg' alt='' srcset=''>";
fotooriginal.innerHTML = "<img src='./img/JUEGO/" + contador + "/Screenshot_" + contador + ".png' alt='' srcset=''>";

var mostrarBoton = document.getElementById("mostrarBoton");
var codigo = document.getElementById("codigo");
let botoncomenzar = document.getElementById("comenzar-boton");

mostrarBoton.addEventListener("click", function() {
    if (codigo.style.display === "none") {
        botoncomenzar.style.display = "none";
        codigo.classList.toggle("codigo-muestra");
    } else {
        codigo.style.display = "none";
    }
});

function Volver(){
    contador -=1;
    CambiarImagen()
}

function SumarContador(){
 contador+=1;
 CambiarImagen()
}

function CambiarImagen() {
    if (contador < 1 || contador > tope) {
        contador = 1; 
    }
    
    fototroll.innerHTML = "<img src='./img/JUEGO/" + contador + "/" + contador + ".jpg' alt='' srcset=''>";
    fotooriginal.innerHTML = "<img src='./img/JUEGO/" + contador + "/Screenshot_" + contador + ".png' alt='' srcset=''>";
}


function RevelarImagen(){
    var imagen = fotooriginal.querySelector("img");
    imagen.style.transition = "filter 0.5s ease-in-out";
    imagen.style.filter = "blur(0px)";
   
}


const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode'); 
};


const darkModeToggleBtn = document.getElementById('dark-mode-toggle-btn');
if (darkModeToggleBtn) {
    darkModeToggleBtn.addEventListener('click', toggleDarkMode);
}
