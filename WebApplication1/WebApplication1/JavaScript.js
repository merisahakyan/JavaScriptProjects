var turn = 1;
function Step(id) {
    var b = document.getElementById(id);

    if (b.value == "") {
        if (turn == 1) {
            b.value = "X";
            turn = 0;
        }
        else if (turn == 0) {
            b.value = "O";
            turn = 1;
        }
    }
    else
        alert("Choose another button");

    if (Control() == true) {
        if (turn == 1)
            alert("Winner is O");
        else
            alert("Winner is X");
        
    }
    

}
function Control() {
    var b11 = document.getElementById("b11");
    var b12 = document.getElementById("b12");
    var b13 = document.getElementById("b13");
    var b21 = document.getElementById("b21");
    var b22 = document.getElementById("b22");
    var b23 = document.getElementById("b23");
    var b31 = document.getElementById("b31");
    var b32 = document.getElementById("b32");
    var b33 = document.getElementById("b33");
    if ((b11.value == b12.value && b11.value == b13.value && b11.value != "")
        || (b21.value == b22.value && b21.value == b23.value && b21.value != "")
        || (b31.value == b32.value && b32.value == b33.value && b31.value != "")
        || (b11.value == b21.value && b11.value == b31.value && b11.value != "")
        || (b12.value == b22.value && b12.value == b32.value && b12.value != "")
        || (b13.value == b23.value && b13.value == b33.value && b13.value != "")
        || (b11.value == b22.value && b11.value == b33.value && b11.value != "")
        || (b13.value == b22.value && b13.value == b31.value && b13.value != ""))
        return true;
    else return false;
    
}