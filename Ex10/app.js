const enrolledStudents1 = [
    { id: 101, name: "Asmaa" },
    { id: 102, name: "Omar" },
    { id: 103, name: "Lina" },
    { id: 104, name: "Yazan" }
];

const enrolledStudents2 = [
    { id: 103, name: "Lina" },
    { id: 104, name: "Yazan" },
    { id: 105, name: "Sara" },
    { id: 106, name: "Adam" }
];

//* Use the spread operator to combine two arrays of enrolled students.
const allEnrolledStudents = [...enrolledStudents1, ...enrolledStudents2];

//* Use the rest parameter to create a function that accepts any number of grades
//* and calculates their average.
const calcAvg = (...grades) => {
    const sum = grades.reduce((acc, curr) => acc += curr, 0);
    return sum / grades.length;
}

//* Use Set to remove duplicate student IDs.
const studentsIds = allEnrolledStudents.map((student) => student.id);

const uniqIds = new Set(studentsIds)

const uniqIdArray = [...uniqIds];


//* Use Map to associate student IDs with their grades.
const studentsGrades = new Map();

studentsGrades.set(uniqIdArray[0], 99);
studentsGrades.set(uniqIdArray[1], 98);
studentsGrades.set(uniqIdArray[2], 88);
studentsGrades.set(uniqIdArray[3], 98);
studentsGrades.set(uniqIdArray[4], 78);
studentsGrades.set(uniqIdArray[5], 94);

//* Add, update, retrieve and delete entries in the Map.
// This is a map obj not an array
studentsGrades.set(107, 79);
studentsGrades.set(uniqIdArray[0], 66);
studentsGrades.delete(107);
// console.log(studentsGrades);

//* Convert the final student data into a regular array for display.

const finalStudent = allEnrolledStudents.map((student) => (
    {
        ...student,
        grade: studentsGrades.get(student.id)

    }
));
console.log(finalStudent);