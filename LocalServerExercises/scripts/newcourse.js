
"use strict"

const dept = document.getElementById("dept");
const courseNum = document.getElementById("courseNum");
const courseName = document.getElementById("courseName");
const instructor = document.getElementById("instructor");
const startDate = document.getElementById("startDate");
const courseLength = document.getElementById("courseLength");

window.onload = function () {
    document.getElementById("addBtn").onclick = addBtnOnClick;
}

function addBtnOnClick(){
    if(dataValidation()){
        putCourse();
    }
}

function putCourse() {
    let data = {
        dept: dept.value,
        courseNum: courseNum.value,
        courseName: courseName.value,
        instructor: instructor.value,
        startDate: startDate.value,
        numDays: courseLength.value
    };

    fetch("http://localhost:8081/api/courses/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type":
                "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            document.getElementById("msgDiv").innerHTML = "Course Added Successfully.";
        });
}

function dataValidation() {
    if (dept.value != "" && courseName.value != "" && instructor.value != "") {
        if (isNumber(courseNum.value) && isNumber(courseLength.value)) {
            if (isValidDate(startDate.value) == true) {
                //putCourse();
                return true;
            }
            else {
                document.getElementById("msgDiv").innerHTML = "Date is not valid.";
            }
        }
        else {
            document.getElementById("msgDiv").innerHTML = "Incorrect values for Course Number or Course Length.";
        }
    }
    else {
        document.getElementById("msgDiv").innerHTML = "Department, Course Name, and Instructor are required.";
    }
    return false;
}

function isValidDate(value) {
    let dateWrapper = new Date(value);
    return (!isNaN(dateWrapper.getDate()));
}

function isNumber(value){
    if(typeof Number(value) == "number" && !isNaN(value)) return true;
    return false;
}