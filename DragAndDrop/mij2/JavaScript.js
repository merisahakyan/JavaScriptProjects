var x, y;

var Clicked = false;
var startX, startY;
var Obj;
x = 0;
y = 0;

function MatMax() {
    var x = [];

    for (var i = 0; i < 5; i++) {
        x[i] = [];
        for (var j = 0; j < 5; j++) {
            x[i][j] = Math.floor(Math.random() * 100);
        }
    }
    var max = x[0][0];
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (x[i][j] > max)
                max = x[i][j];
        }
    }
    alert(x);
    alert(max);
}

function Click() {
    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {
            var d = document.createElement("div");
            d.style.position = "absolute";
            d.style.width = "100px";
            d.style.height = "100px";
            d.style.top = i * 100 + "px";
            d.style.left = j * 100 + "px";
            d.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 250) + "," + Math.floor(Math.random() * 250) + "," + Math.floor(Math.random() * 250) + ")";

            d.id = " " + i + "," + j;
            d.onmousedown = function () {
                startX = event.clientX;
                startY = event.clientY;
                Obj = this;
                Clicked = true;
            }
            document.body.onmousemove = function (e) {
                if (Clicked) {
                   
                    var dx = event.clientX - startX;
                    var dy = event.clientY - startY;
                    
                    Obj.style.left = parseInt(Obj.style.left.substr(0,Obj.style.left.length-2)) + dx + "px";
                    Obj.style.top = parseInt(Obj.style.top.substr(0, Obj.style.top.length - 2)) + dy + "px";
                }
                startX = event.clientX;
                startY = event.clientY;
            }
            document.body.onmouseup = function (e) {
                Clicked = false;
            }
            document.body.appendChild(d);
        }

    }
}