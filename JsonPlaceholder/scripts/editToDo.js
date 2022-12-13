
"use strict"

const toDoId = document.getElementById("toDoId");
const userId = document.getElementById("userId");
const title = document.getElementById("title");
const completed = document.getElementById("completed");
const table = document.getElementById("table");

window.onload = function () {
    document.getElementById("changesMade").style.display = "none";
    document.getElementById("showBtn").onclick = populateTable;
    document.getElementById("updateBtn").onclick = onUpdateBtnClicked;
}

function populateTable() {
    document.getElementById("changesMade").style.display = "block";

    fetch(`https://jsonplaceholder.typicode.com/todos/${toDoId.value}`)
        .then(response => response.json())
        .then(data => {
            let row = table.insertRow();
            let c1 = row.insertCell(0);
            let c2 = row.insertCell(1);
            let c3 = row.insertCell(2);
            let c4 = row.insertCell(3);
            c1.innerHTML = data.userId;
            c2.innerHTML = data.id;
            c3.innerHTML = data.title;
            c4.innerHTML = data.completed;
        });
}

function onUpdateBtnClicked() {
    let updates = {
        userId: userId.value,
        title: title.value,
        completed: completed.value,
    };

    fetch(`https://jsonplaceholder.typicode.com/todos/${toDoId.value}`, {
        method: "PUT",
        body: JSON.stringify(updates),
        headers: {
            "Content-type":
                "application/json; charset=UTF-8"
        }
    })
}