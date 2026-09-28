const students = [
    { id: 101, name: "Asmaa", grade: 95 },
    { id: 102, name: "Omar", grade: 82 },
    { id: 103, name: "Lina", grade: 74 },
    { id: 104, name: "Yazan", grade: 58 },
    { id: 105, name: "Sara", grade: 43 }
];

for (let student of students)
{
    const body = document.querySelector ("body");
    const h2 = document.createElement ("h2");
    const status = student.grade >= 50? "Pass": "Fail";
    const text = `Student ID: ${student.id} | Student Name: ${student.name} | Student Grade: ${student.grade} Student ${status}`;
    h2.textContent = text;
    body.appendChild (h2);
}
