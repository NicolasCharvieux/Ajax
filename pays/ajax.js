var xhr = new XMLHttpRequest();

function but() {
    xhr.onload = function() {
        var nouv = document.createElement("li");
        var text = document.getElementsByTagName("ul");
        nouv.innerHTML = xhr.responseText;
        text[0].appendChild(nouv);
    }
    xhr.open('GET', 'ajax.php');
    xhr.send();
}