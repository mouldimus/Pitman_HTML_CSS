alert("Hello, World!");

function My_First_Function() {        // A function that applies a green font color to the text "Kiss me, I'm Irish!"
    var String = "Kiss me, I'm Irish!";
    var result = String.fontcolor("green");
    document.getElementById("Irish").innerHTML = result;
}