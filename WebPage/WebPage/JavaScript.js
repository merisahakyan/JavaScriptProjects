function CursoreMove() {
    for (var i = 1; i <= 2; i++) {
        var btn = document.createElement("button");

        btn.style.position = "absolute";
        btn.style.backgroundColor = "purple";
        btn.style.borderColor = "purple";
        btn.style.left = "20px";
        btn.style.top = 20 + 40 * i + "px";
        btn.style.width = "120px";
        btn.style.height = "40px";
        btn.value = "Pizza";
        btn.id = "newbutton" + i;
        document.body.appendChild(btn);
    }
}

function CursorOut() {
    var btn = document.getElementById("newbutton1");
    var btn1 = document.getElementById("newbutton2");
    btn.parentNode.removeChild(btn1);
    btn.parentNode.removeChild(btn);
}