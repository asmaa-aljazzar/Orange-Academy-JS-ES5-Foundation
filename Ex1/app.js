"use strict"

try {
    //! ReferenceError: x is not defined
    x = 20;

    //! TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    const person = {};
    Object.defineProperty (person, "name", {
        writable: false
    });
    person.name = "Asmaa";

    //! SyntaxError: Delete of an unqualified identifier in strict mode.
    let x = 10;
    delete x;

} catch (error) {
    if (error.name === "ReferenceError"
       || error.name === "TypeError"
       || error.name === "SyntaxError")
        console.error(error.message);
}

//? Explain the difference between strict and non-strict mode.
//* non-strict | strict.
// Assign to undeclared variable => Creates global variable | ReferenceError.
// Change read-only property => Fails scilently | TypeError.
// Delete non-configurable property | TypeError.
// Dublicate parameters names => Allowed | Not allowed.
// [this] in normal function => Global object ([window] in browser) | Not allowed.
// Some octal syntax => Allowed | Not allowed
// [eval] behaviour => More permissive | More restricted









//? Object.defineProperty()
//* To create or modify a property of an object with precise control over how that property behaves.
// Object.defineProperty(user, "name", {
//     value: "Asmaa",
//     writable: false,
//     enumerable: true,
//     configurable: false
// });