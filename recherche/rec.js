// var etudiants = {
//     "etudiants": [{ "prenom": "Karim", "id": "28" },
//         { "prenom": "NicolasC", "id": "31" }, { "prenom": "Gabriel", "id": "32" },
//         { "prenom": "Charles", "id": "33" }
//     ]
// }

// for (i = 0; i < etudiants.etudiants.length; i++) {
//     console.log(etudiants.etudiants[i].prenom)
// }


var xhr = new XMLHttpRequest();

function rechercher() {
    xhr.onload = function() {
        var name = JSON.parse(xhr.responseText).etudiants;

        for (i = 0; i < name.length; i++) {
            var liste = document.createElement("p");
            var sec = document.getElementById("sec");
            // console.log(name[i].prenom);
            sec.insertBefore(liste, sec.firstChild);
            liste.innerHTML = name[i].prenom;

        }
    }
    sec.innerHTML = " ";
    var inp = document.getElementById("rec").value;
    xhr.open('GET', 'http://jihane.fr/ajax/dwmg2.php?query=' + inp);
    xhr.send();
}