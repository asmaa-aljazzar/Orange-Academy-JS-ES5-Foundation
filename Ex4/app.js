const students = [
    { id: 1, name: "Asmaa", grade: 95 },
    { id: 2, name: "Nour", grade: 88 },
    { id: 3, name: "Osama", grade: 76 },
    { id: 4, name: "Sara", grade: 91 },
    { id: 5, name: "Omar", grade: 84 },
    { id: 6, name: "Lina", grade: 97 },
    { id: 7, name: "Yousef", grade: 73 },
    { id: 8, name: "Maya", grade: 89 },
    { id: 9, name: "Ahmad", grade: 82 },
    { id: 10, name: "Rania", grade: 94 },
    { id: 11, name: "Khaled", grade: 68 },
    { id: 12, name: "Dana", grade: 90 },
    { id: 13, name: "Zaid", grade: 79 },
    { id: 14, name: "Hala", grade: 86 },
    { id: 15, name: "Tareq", grade: 92 },
    { id: 16, name: "Lama", grade: 75 },
    { id: 17, name: "Sami", grade: 81 },
    { id: 18, name: "Jana", grade: 98 },
    { id: 19, name: "Laith", grade: 70 },
    { id: 20, name: "Reem", grade: 87 },
    { id: 21, name: "Adam", grade: 93 },
    { id: 22, name: "Salma", grade: 77 },
    { id: 23, name: "Yazan", grade: 85 },
    { id: 24, name: "Aya", grade: 96 },
    { id: 25, name: "Faris", grade: 74 },
    { id: 26, name: "Leen", grade: 88 },
    { id: 27, name: "Karim", grade: 80 },
    { id: 28, name: "Dina", grade: 91 },
    { id: 29, name: "Majd", grade: 69 },
    { id: 30, name: "Sahar", grade: 83 },
    { id: 31, name: "Ali", grade: 95 },
    { id: 32, name: "Farah", grade: 89 },
    { id: 33, name: "Hassan", grade: 78 },
    { id: 34, name: "Mira", grade: 92 },
    { id: 35, name: "Bilal", grade: 71 },
    { id: 36, name: "Rama", grade: 86 },
    { id: 37, name: "Hamza", grade: 99 },
    { id: 38, name: "Malak", grade: 84 },
    { id: 39, name: "Ibrahim", grade: 73 },
    { id: 40, name: "Nada", grade: 90 },
    { id: 41, name: "Mahmoud", grade: 67 },
    { id: 42, name: "Joud", grade: 93 },
    { id: 43, name: "Anas", grade: 81 },
    { id: 44, name: "Tasneem", grade: 97 },
    { id: 45, name: "Saeed", grade: 76 },
    { id: 46, name: "Marah", grade: 87 },
    { id: 47, name: "Baraa", grade: 79 },
    { id: 48, name: "Nouran", grade: 94 },
    { id: 49, name: "Wael", grade: 72 },
    { id: 50, name: "Abeer", grade: 85 }
];

students.splice (3, 0, {
    id: 51,
    name: "Asmaa",
    grade: 99
});
console.log(students);

students.splice (4, 46);
console.log(students);

students.splice (2, 2, {
    id: 70,
    name: "Asia",
    grade: 88
});
console.log(students);

const copyStudents = students.slice (1);
console.log(copyStudents);

students.sort ((a, b) => b.grade - a.grade)
console.log(students);

students.forEach((student) => {
    console.log(student);
});

