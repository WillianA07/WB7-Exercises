
"use strict"

window.onload = init;

function init () {
    document.getElementById("btn").onclick = btnOnClicked;
}

function btnOnClicked() {
    const msgDiv = document.getElementById("msgDiv");
    let inputId = document.getElementById("inpToDo").value;

    fetch("https://jsonplaceholder.typicode.com/todos/" + inputId)
        .then(x => x.json())
        .then(y => {
                msgDiv.innerHTML = y.title;
        });
}