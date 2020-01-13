var xhr = new XMLHttpRequest();

function but() {
    xhr.onload = function() {
        var err = document.getElementById("err");
        var ok = document.getElementById("ok");
        var text = xhr.responseText;

        if (text == "erreur") {
            err.className = "visible";
            ok.className = "invisible";
        } else {
            ok.className = "visible";
            err.className = "invisible";
        }
    }
    xhr.open('POST', 'http://jihane.fr/ajax/form.php');
    var f = document.getElementById("formulaire");
    var fd = new FormData(f);
    xhr.send(fd);
}