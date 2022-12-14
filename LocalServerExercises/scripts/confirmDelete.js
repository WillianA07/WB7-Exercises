
"use strict"

window.onload = function () {
    const urlParams = new URLSearchParams(location.search);

    let id = -1;
    if (urlParams.has("courseid") === true) {
        id = urlParams.get("courseid");
        fetch("http://localhost:8081/api/courses/" + id)
            .then(response => response.json())
            .then(x => {
                displayResults(x);
            });
    }

    document.getElementById("deleteBtn").onclick = onDeleteBtnClicked;
}

function displayResults(x) {
    const table = document.getElementById("table");

    document.getElementById('table').innerHTML = `
    <tr>
        <th>Course Number</th>
        <td>${x.courseNum}</td>
    </tr>
    <tr>
        <th>Department</th>
        <td>${x.dept}</td>
    </tr>
    <tr>
        <th>Course Name</th>
        <td>${x.courseName}</td>
    </tr>
    <tr>
        <th>Instructor</th>
        <td>${x.instructor}</td>
    </tr>
    <tr>
        <th>Start Date</th>
        <td>${x.startDate}</td>
    </tr>
    <tr>
        <th>Course Length</th>
        <td>${x.numDays}</td>
    </tr>`;
}

function onDeleteBtnClicked() {
    const urlParams = new URLSearchParams(location.search);

    let id = -1;
    if (urlParams.has("courseid") === true) {
        id = urlParams.get("courseid");
        fetch(`http://localhost:8081/api/courses/${id}`, {
            method: "DELETE"
        })
            // .then(response => response.json())
            // .then(x => {
            //     document.getElementById("confirmation").innerHTML = "Course deleted successfully."
            // });
    }
}