const students = [
    {
        id: 1,
        name: "Asmaa",
        grades: [90, 85, 95]
    },
    {
        id: 2,
        name: "Omar",
        grades: [75, 80, 70]
    },
    {
        id: 3,
        name: "Lina",
        grades: [95, 92, 88]
    }
];

export function getStudents() {
    return students;
}

export function getStudentById(id) {
    return students.find(student => student.id === id);
}

export function addStudent(name, grades) {
    students.push({
        id: students.length + 1,
        name,
        grades
    });
}

export default students;