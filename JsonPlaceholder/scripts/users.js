
"use strict"

window.onload = function () {
    const table = document.getElementById("table");

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(x => x.json())
        .then(y => {
            for (let i = 0; i < y.length; i++) {
                let row = table.insertRow(-1);
                let c1 = row.insertCell(0);
                c1.innerHTML = y[i].id;

                let c2 = row.insertCell(1);
                c2.innerHTML = y[i].name;

                let c3 = row.insertCell(2);
                c3.innerHTML = y[i].username;

                let c4 = row.insertCell(3);
                c4.innerHTML = y[i].email;

                let c5 = row.insertCell(4);
                c5.innerHTML = y[i].phone;

                let c6 = row.insertCell(5);
                c6.innerHTML = y[i].company.name;
            }
        });
}
