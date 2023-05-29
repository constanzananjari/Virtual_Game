function comprar() {
    var x = Math.floor((Math.random() * (5-1))+1);
    if(x==1){
        alert("En realidad no compras nada pero es un gran detalle")
    }
    if(x==2){
        alert("Aquí verifico la funcionalidad del botón nomás")
    }
    if(x==3){
        alert("Tarjeta o Efectivo? :)")
    }
    if(x==4){
        alert("Envío gratis y te regalamos un sticker de Kratos")
    }
    if(x==5){
        alert("No tenemos productos verdaderos jsjsjs")
    }
}

function Calificar1(){
    document.getElementById("Estrella1").src="Imagenes/Estrella.png";
}
function Calificar2(){
    document.getElementById("Estrella1").src="Imagenes/Estrella.png";
    document.getElementById("Estrella2").src="Imagenes/Estrella.png";
}
function Calificar3(){
    document.getElementById("Estrella1").src="Imagenes/Estrella.png";
    document.getElementById("Estrella2").src="Imagenes/Estrella.png";
    document.getElementById("Estrella3").src="Imagenes/Estrella.png";
}
function Calificar4(){
    document.getElementById("Estrella1").src="Imagenes/Estrella.png";
    document.getElementById("Estrella2").src="Imagenes/Estrella.png";
    document.getElementById("Estrella3").src="Imagenes/Estrella.png";
    document.getElementById("Estrella4").src="Imagenes/Estrella.png";
}
function Calificar5(){
    document.getElementById("Estrella1").src="Imagenes/Estrella.png";
    document.getElementById("Estrella2").src="Imagenes/Estrella.png";
    document.getElementById("Estrella3").src="Imagenes/Estrella.png";
    document.getElementById("Estrella4").src="Imagenes/Estrella.png";
    document.getElementById("Estrella5").src="Imagenes/Estrella.png";
}

function CambiarPuntero(){
    document.body.style.cursor="pointer";
}

function ReiniciarPuntero(){
    document.body.style.cursor="auto";
}