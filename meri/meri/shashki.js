var t, q, b, w;

alert("դասավորեք քարերը")
var n = 0;
var m = 0;

function h1(a) {

    if (t == true && n < 12) {
        var b = document.getElementById('img3').src;
        document.getElementById(a).innerHTML = "<img src=' " + b + "' alt='error' width='80px' height='80px'/>";
        n = n + 1;

    };
    if (t == false && m < 12) {
        var b = document.getElementById('img2').src;
        document.getElementById(a).innerHTML = "<img src=' " + b + "' alt='error' width='80px' height='80px'/>"
        m = m + 1;
    };

}

function h2() {
    w = false
}

function h3() {
    t = true
}

function h4() {
    t = false
}

function h5(k) {
    if (w == true && t == true) {
        var b = document.getElementById('img3').src;
        document.getElementById(k).innerHTML = "<img src=' " + b + "' alt='error' width='80px' height='80px'/>"
    };
}