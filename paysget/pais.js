var xhr = new XMLHttpRequest();

function but() {
    xhr.onload = function() {
        var name = JSON.parse(xhr.responseText).pays;
        var mot1 = document.getElementById("cont1");
        var mot2 = document.getElementById("cont2");
        var mot3 = document.getElementById("cont3");

        for (i = 0; i < document.getElementById("choix").value; i++) {
            var liste = document.createElement("li");
            name = JSON.parse(xhr.responseText).pays[i].continent;
            if (name == "EU") {
                mot1.appendChild(liste);
                liste.innerHTML += JSON.parse(xhr.responseText).pays[i].nom;
            } else if (name == "AS") {
                mot2.appendChild(liste);
                liste.innerHTML += JSON.parse(xhr.responseText).pays[i].nom;
            } else {
                mot3.appendChild(liste);
                liste.innerHTML += JSON.parse(xhr.responseText).pays[i].nom;
            }
        }

    }
    var inp = document.getElementById("choix").value;
    xhr.open('GET', 'http://jihane.fr/ajax/jpays.php?nb=' + inp);
    xhr.send();
}