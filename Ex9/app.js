const user = {
    name: "Asmaa",
    email: "e@example.com",
    age: 26,
    address: "Amman"
}


// Should be the same name that exist inside the array
// Property Name: New Name
const {name: username, email: emailAddress, age, address} = user;

function createUser (name = "username", email = "e@example.com", age = 0, address = "Country") {
    console.log(name);
    console.log(email);
    console.log(age);
    console.log(address);
}

// When one parameter is omitted it will assign in order and give the last one the default value
createUser ("Asmaa","email", "Amman")