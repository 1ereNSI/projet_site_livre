function refresh() {
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()', t)
}

function showDate() {
    var date = new Date()
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    var time = h + ':' + m + ':' + s
    document.getElementById('horloge').innerHTML = time;
    refresh();
}

*
/alert("Bienvenu"); */

function refresh() {
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()', t)
}

var slide = new Array("plaat.jpg", "plat.jpg", "livres.jpg", "livres2.jpg");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
    setInterval("ChangeSlide(1)", 4000);
}