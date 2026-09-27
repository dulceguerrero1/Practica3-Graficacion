var lienzo = document.getElementById("miLienzo");
var pincel = lienzo.getContext("2d");

var ojoX = 200; // Posición en X
var ojoY= 85; // posición en Y 

//función principal
function dibujar(mouseX, mouseY){
    pincel.clearRect(0,0, lienzo.width, lienzo.height); //borrar
    pincel.fillStyle =  "rgb(255,255,255)"; //modelo RGB

    //dibujar un circulo
    pincel.beginPath();
    pincel.arc(ojoX, ojoY, 50, 0, Math.PI *2);
    pincel.fill();

    //mover el cursor
    var angulo = Math.atan2(mouseY - ojoY, mouseX - ojoX);
    var pupilaX = ojoX + Math.cos(angulo) * 20;
    var pupilaY = ojoY + Math.sin(angulo) * 20;

    //dibujar el iris
    pincel.fillStyle = "rgb(0,255,100)";
    pincel.beginPath();
    pincel.arc(pupilaX, pupilaY, 22, 0, Math.PI*2);
    pincel.fill();

    //dibujar en centro del ojito 
    pincel.fillStyle = "rgb(0,0,0)";
    pincel.beginPath();
    pincel.arc(pupilaX, pupilaY, 10, 0, Math.PI*2);
    pincel.fill();
}

//interacción y eventos
lienzo.onmousemove = function(evento){
    //ajuste de coordenadas 
    var rect=lienzo.getBoundingClientRect();
    var mouseX = evento.clientX - rect.left;
    var mouseY=evento.clientY - rect.top;

    //nuevas posiciones al cursor 
    dibujar(mouseX, mouseY);

};

//Activar la funcion al recargar la pagina
dibujar(200,85);
