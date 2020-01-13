var xhr = new XMLHttpRequest();
var nomb = document.getElementById("nb");

function but() {
    document.getElementById("nb").innerHTML = "";
    xhr.onload = function() {
        nomb.innerHTML = xhr.responseText + " ";
        for (var i = 0; i < xhr.responseText; i++) {
            document.getElementById("nb").innerHTML += i + " "
        }
    }
    xhr.open('GET', 'http://jihane.fr/ajax/nombre.php');
    xhr.send();
}