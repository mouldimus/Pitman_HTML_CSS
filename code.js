// This code snippet defines a function called formatHTML that replaces all occurrences of < and > characters within elements with the class name "code" on the webpage with their HTML entity equivalents '<' and '>'.
function formatHTML() {
    var parentElements = document.getElementsByClassName("code");
    for (var i = 0; i < parentElements.length; i++) {
        parentElements[i].innerHTML = parentElements[i].innerHTML.replaceAll("\<", "&lt;").replaceAll("\>", "&gt;");
    }
}
// Calls the function
formatHTML();