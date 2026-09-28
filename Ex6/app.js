const product = {
    id: 1234,
    name: "Iphon",
    price: 70,
    category: "Phones",
    avilable: true,
}

const p = JSON.stringify (product);
console.log(p);

const backToObj = JSON.parse (p);
console.log(backToObj);