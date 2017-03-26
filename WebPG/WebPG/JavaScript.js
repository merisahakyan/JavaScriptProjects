function MenuButtonOver() {
    var count = 3;
    for (var i = 1; i <= count; i++) {
        var btn = document.createElement("button");
        btn.style.position = "absolute";
        btn.style.backgroundColor = "purple";
        btn.style.borderColor = "purple";
        btn.style.left = "20px";
        btn.style.top = 200 + 40 * i + "px";
        btn.style.width = "120px";
        btn.style.height = "40px";
        btn.value = "Pizza";
        btn.id = "newbutton" + i;
        
       

        document.body.appendChild(btn);
    }
}


function ProductsButtonOver(count) {
    var count = 4;
    for (var i = 1; i <= count; i++) {
        var btn = document.createElement("button");
        btn.style.position = "absolute";
        btn.style.backgroundColor = "purple";
        btn.style.borderColor = "purple";
        btn.style.left = "140px";
        btn.style.top = 200 + 40 * i + "px";
        btn.style.width = "120px";
        btn.style.height = "40px";
        btn.value = "Pizza";
        btn.id = "newbutton" + i;

        document.body.appendChild(btn);
    }
}

function CursorOut() {
    var i = 1;
    var btn;
    var e = window.event;
    var x = e.clientX;
    var y = e.clientY;

    if (x < 20 || x > 140 || y < 200 || y > 240) {

        while (document.getElementById("newbutton" + i) != null) {
            btn = document.getElementById("newbutton" + i);
            document.body.removeChild(btn);
            i++;
        }

    }

}

