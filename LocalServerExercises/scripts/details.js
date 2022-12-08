
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
}

function displayResults (x) {
    const table = document.getElementById("table");

    // {
    //     "id": 1,
    //     "dept": "CompSci",
    //     "courseNum": 101,
    //     "courseName": "HTML5 and CSS3",
    //     "instructor": "Rob",
    //     "startDate": "July 8",
    //     "numDays": 10
    // }

    // <tr>
    //     <th>Firstname</th>
    //     <td>Jill</td>
    //     <td>Eve</td>
    // </tr>

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