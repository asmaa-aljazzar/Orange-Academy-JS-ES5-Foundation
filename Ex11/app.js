class Person {

    constructor (name, email){
        this.name = name;
        this.email = email;
    }

    getInfo () {
        return `Name: ${this.name} Email: ${this.email}`
    }
    
}

class Student extends Person {
    constructor (name, email, grade){
        super (name, email);
        grade = this.grade;
    }
    getInfo (){
        return `${this.name} is a Student`;
    }
}

class Instructor extends Person {
    constructor(name, email, ID) {
        super (name, email);
        this.ID = ID;
    }
}

const student1 = new Student ("Asmaa", "a@example.com", 99);
console.log(student1.getInfo ()); 
console.log(`Does student1 an instance? ${student1 instanceof Person}`);

const instructor1 = new Instructor ("Malak", "m@example.com", "1234sdsfad312");
console.log(instructor1.getInfo ()); 
console.log(`Does Instructor1 an instance? ${instructor1 instanceof Person}`);