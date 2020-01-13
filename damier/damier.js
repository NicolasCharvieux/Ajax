var xhr = new XMLHttpRequest();
var nomb = document.getElementById("sec");

function but() {
    document.getElementById("sec").innerHTML = "";
    xhr.onload = function() {
        for (var i = 0; i < xhr.responseText; i++) {
            var f = document.createElement("div");
            nomb.appendChild(f);

            //!     Alternance de couleur sur le damier.

            if (i % 2 == 0) {
                f.classList.add("rouge");
            } else {
                f.classList.add("jaune");
            }


            // if (i % 3 == 0) {
            //     f.classList.add("bleu");
            // } else if (i % 3 == 1) {
            //     f.classList.add("jaune");
            // } else {
            //     f.classList.add("rouge");
            // }

            //!     Fin de l'alternance.

            //todo  Changement des couleurs sur le damier.

            f.setAttribute("onclick", "cli(" + i + ")");
            f.setAttribute("id", i);

            //todo  Fin de programme du changement des couleurs.
        }
    }
    xhr.open('GET', 'http://jihane.fr/ajax/nombre.php');
    xhr.send();
}

function cli(id) {
    var dic = document.getElementById(id)
    dic.classList.add("bleu")
}