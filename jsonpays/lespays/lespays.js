var xhr = new XMLHttpRequest();

function but() {
    xhr.onload = function() {
        var name = JSON.parse(xhr.responseText).pays.continent;
        var liste = document.createElement("li");
        var mot1 = document.getElementById("cont1");
        var mot2 = document.getElementById("cont2");
        var mot3 = document.getElementById("cont3");

        if (name == "EU") {
            mot1.appendChild(liste);
            liste.innerHTML = JSON.parse(xhr.responseText).pays.nom;
        } else if (name == "AS") {
            mot2.appendChild(liste);
            liste.innerHTML = JSON.parse(xhr.responseText).pays.nom;
        } else {
            mot3.appendChild(liste);
            liste.innerHTML = JSON.parse(xhr.responseText).pays.nom;
        }

    }
    xhr.open('GET', 'http://jihane.fr/ajax/jpays.php');
    xhr.send();
}