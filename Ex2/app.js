function Person (name, age) {
   this.name = name;
   this.age = age; 
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.name}!`);
}

// Inherit Person's propertis.
// Without it we can't inherit.
// Make this in Person refers to this in Employee.
function Employee (name, age, employeeId, position) {
    Person.call (this, name, age); 

    this.employeeId = employeeId;
    this.position  = position;
}

// Inherit Person Prototype
Employee.prototype = Object.create (Person.prototype);

// Now the new Employee.prototype doesn't have its own constructor pointing to Employee.
// Fix:
Employee.prototype.constructor = Employee;

// Override greet()
Employee.prototype.greet = function () {
    console.log (`Welcome ${this.name}
        ID: ${this.employeeId}
        Position: ${this.position}`);
};

// Create 3 employees
const employee1 = new Employee ("Asmaa",26, '123', "Full Stack Web Developer");
const employee2 = new Employee ("Nour",22, '456', "Backend Engineer");
const employee3 = new Employee ("Osama",21, '789', "Cipher Security");

// Demonstrate Inheritance
employee1.greet ();
employee2.greet ();
employee3.greet ();

console.log(employee1 instanceof Employee); // Is employee1 an object created from Employee
console.log(employee1 instanceof Person); // Is employee1 an object created from Person