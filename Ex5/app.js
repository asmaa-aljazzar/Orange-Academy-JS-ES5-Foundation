const product = {
    id: 1234,
    name: "Iphon",
    price: 70,
    category: "Phones",
    avilable: true,
}

// const p = JSON.stringify (product);
// console.log(p);
try {
    // const backToObj = JSON.parse (p);
    const l = JSON.parse ("dfdsfdsfds");
    console.log (l);
    // console.log(backToObj);

}catch (error){
    console.error (error.message);
}

// console.log(product);