
"use strict"

const userId = document.getElementById("userId");
const title = document.getElementById("title");
const completed = document.getElementById("completed");
const btn = document.getElementById("btn");
const msgDiv = document.getElementById("msgDiv");

window.onload = function () {
    btn.onclick = showResult;
}

function showResult() {
    msgDiv.innerHTML = ""

    let data = {
        userId: userId.value,
        title: title.value,
        completed: completed.value,
    }

    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type":
                "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            msgDiv.innerHTML = `ID ${json.id} was successfully added.`
        });
}