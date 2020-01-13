// function but() {
//     var ligne = document.createElement("tr");
//     var ligne2 = document.createElement("tr");
//     var ligne3 = document.createElement("tr");
//     var ligne4 = document.createElement("tr");
//     var ligne5 = document.createElement("tr");
//     var ligne6 = document.createElement("tr");
//     var ligne7 = document.createElement("tr");
//     var ligne8 = document.createElement("tr");
//     var ligne9 = document.createElement("tr");
//     var ta = document.getElementById("ta");
//     var cellule = document.createElement("td");
//     var cellule2 = document.createElement("td");
//     var cellule3 = document.createElement("td");
//     var cellule4 = document.createElement("td");
//     var cellule5 = document.createElement("td");
//     var cellule6 = document.createElement("td");
//     var cellule7 = document.createElement("td");
//     var cellule8 = document.createElement("td");
//     var cellule9 = document.createElement("td");
//     var cellule10 = document.createElement("td");
//     var cellule11 = document.createElement("td");
//     var cellule12 = document.createElement("td");
//     var cellule13 = document.createElement("td");
//     var cellule14 = document.createElement("td");
//     var cellule15 = document.createElement("td");
//     var cellule16 = document.createElement("td");
//     var cellule17 = document.createElement("td");
//     var cellule18 = document.createElement("td");
//     var exemple = {
//         "debug": "on",
//         "title": "Sample Konfabulator",
//         "name": "main_window",
//         "width": 500,
//         "height": 500,
//         "src": "Images/Sun.png",
//         "hOffset": 250,
//         "vOffset": 250,
//         "alignment": "center"
//     }

//     cellule.innerHTML = "debug";
//     cellule2.innerHTML = "on";

//     ligne.appendChild(cellule);
//     ligne.appendChild(cellule2);
//     ta.appendChild(ligne);

//     cellule3.innerHTML = "title";
//     cellule4.innerHTML = "Sample Konfabulator";

//     ligne2.appendChild(cellule3);
//     ligne2.appendChild(cellule4);
//     ta.appendChild(ligne2);

//     cellule5.innerHTML = "name";
//     cellule6.innerHTML = "main_window";

//     ligne3.appendChild(cellule5);
//     ligne3.appendChild(cellule6);
//     ta.appendChild(ligne3);

//     cellule7.innerHTML = "width";
//     cellule8.innerHTML = 500;

//     ligne4.appendChild(cellule7);
//     ligne4.appendChild(cellule8);
//     ta.appendChild(ligne4);

//     cellule9.innerHTML = "height";
//     cellule10.innerHTML = 500;

//     ligne5.appendChild(cellule9);
//     ligne5.appendChild(cellule10);
//     ta.appendChild(ligne5);

//     cellule11.innerHTML = "src";
//     cellule12.innerHTML = "Images/Sun.png";

//     ligne6.appendChild(cellule11);
//     ligne6.appendChild(cellule12);
//     ta.appendChild(ligne6);

//     cellule13.innerHTML = "hOffset";
//     cellule14.innerHTML = 250;

//     ligne7.appendChild(cellule13);
//     ligne7.appendChild(cellule14);
//     ta.appendChild(ligne7);

//     cellule15.innerHTML = "vOffset";
//     cellule16.innerHTML = 250;

//     ligne8.appendChild(cellule15);
//     ligne8.appendChild(cellule16);
//     ta.appendChild(ligne8);

//     cellule17.innerHTML = "alignment";
//     cellule18.innerHTML = "center";

//     ligne9.appendChild(cellule17);
//     ligne9.appendChild(cellule18);
//     ta.appendChild(ligne9);

// }

//! VERSION RACCOURCIE !!!!!

var exemple = {
    "debug": "on",
    "title": "Sample Konfabulator",
    "name": "main_window",
    "width": 500,
    "height": 500,
    "src": "Images/Sun.png",
    "hOffset": 250,
    "vOffset": 250,
    "alignment": "center"
}

function but() {
    for (key in data) {
        create_function(document.getElementById("ta"), key, data[key]);
    }
}

function create_function(parent, key, value) {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var td2 = document.createElement("td");
    td.innerText = key;
    td2.innerText = value;
    tr.appendChild(td);
    tr.appendChild(td2);
    parent.appendChild(tr);
}