var xhr = new XMLHttpRequest();

function but() {
    xhr.onload = function() {
        var text = document.getElementsByTagName("span");
        var nomb = document.getElementById("nb");
        nomb.innerHTML = xhr.responseText;
    }
    xhr.open('GET', 'http://jihane.fr/ajax/nombre.php');
    xhr.send();
}