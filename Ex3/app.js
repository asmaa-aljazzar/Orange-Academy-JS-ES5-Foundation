const students = [
    "Asmaa",
    "Nour",
    "Osama",
    "Sara",
    "Omar",
    "Lina",
    "Yousef",
    "Maya",
    "Ahmad",
    "Rania",
    "Khaled",
    "Dana",
    "Zaid",
    "Hala",
    "Tareq",
    "Lama",
    "Sami",
    "Jana",
    "Laith",
    "Reem",
    "Adam",
    "Salma",
    "Yazan",
    "Aya",
    "Faris",
    "Leen",
    "Karim",
    "Dina",
    "Majd",
    "Sahar",
    "Ali",
    "Farah",
    "Hassan",
    "Mira",
    "Bilal",
    "Rama",
    "Hamza",
    "Malak",
    "Ibrahim",
    "Nada",
    "Mahmoud",
    "Joud",
    "Anas",
    "Tasneem",
    "Saeed",
    "Marah",
    "Baraa",
    "Nouran",
    "Wael",
    "Aya"
];

const newStudents = [
    "Aseel",
    "Asmaa",
    "Nour"
]

// Concat arrays
const allStudents = students.concat (newStudents);
console.log(allStudents);

// Sort array
allStudents.sort ();
console.log(allStudents);

// Reverse the order
allStudents.reverse ();
console.log(allStudents);

// Check for Including
console.log(allStudents.includes ("Asmaa")? "Asmaa is a student": "There is no student with name Asmaa");

// Print all Student and their index
allStudents.forEach ((student, index) =>
{
    console.log(`${index}- ${student}`);

});