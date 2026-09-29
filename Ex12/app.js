import students, { getStudents, getStudentById, addStudent } from "./students.js";
import { calculateAverage, getGradeStatus, getHighestGrade} from "./grades.js"

const std = getStudents ();

const container = document.getElementById("std");
std.forEach ((student) => {

    const header = document.createElement ("h3");
    header.textContent = `ID: ${student.id}`;
    container.appendChild (header);

    const stdName = document.createElement ("p");
    stdName.textContent = `Name: ${student.name}`;
    container.appendChild (stdName);

    const stdGrades = document.createElement ("p");
    stdGrades.textContent = `Grades: ${student.grades}`;
    container.appendChild (stdGrades);

})
