
"use strict"

const tBody = document.getElementById("tBody");

window.onload = function () {
    fetch("http://localhost:8081/api/courses")
        .then(response => response.json())
        .then(x => {
            for(let i = 0; i < x.length; i++){
                let row = tBody.insertRow();
                let c1 = row.insertCell(0);
                c1.innerHTML = x[i].dept;

                let c2 = row.insertCell(1);
                c2.innerHTML = x[i].courseNum;

                let c3 = row.insertCell(2);
                let a = document.createElement("a");
                a.href = `http://127.0.0.1:5500/details.html?courseid=${x[i].id}`;
                a.textContent = x[i].courseName;
                c3.appendChild(a);

                let c4 = row.insertCell(3);
                let a2 = document.createElement("a");
                a2.href = `http://127.0.0.1:5500/confirm-delete.html?courseid=${x[i].id}`;
                a2.textContent = "Delete Course";
                a2.className = "btn btn-danger";
                c4.appendChild(a2);
            }
        });
}