const inventory = {
    product1: {
        id: 1,
        name: "Laptop",
        price: 800,
        category: "Electronics",
        quantity: 10
    },

    product2: {
        id: 2,
        name: "Keyboard",
        price: 50,
        category: "Electronics",
        quantity: 25
    },

    product3: {
        id: 3,
        name: "Mouse",
        price: 30,
        category: "Electronics",
        quantity: 40,
    },

    product4: {
        id: 4,
        name: "Monitor",
        price: 250,
        category: "Electronics",
        quantity: 15
    },

    product5: {
        id: 5,
        name: "Headphones",
        price: 75,
        category: "Accessories",
        quantity: 20
    },

    product6: {
        id: 6,
        name: "Backpack",
        price: 45,
        category: "Bags",
        quantity: 30
    },

    product7: {
        id: 7,
        name: "Notebook",
        price: 5,
        category: "Stationery",
        quantity: 100,
    },

    product8: {
        id: 8,
        name: "Desk Lamp",
        price: 35,
        category: "Home",
        quantity: 18
    },

    product9: {
        id: 9,
        name: "USB Cable",
        price: 10,
        category: "Accessories",
        quantity: 50
    },

    product10: {
        id: 10,
        name: "Webcam",
        price: 60,
        category: "Electronics",
        quantity: 12
    }
};


//? To use sort we should convert it to Array. 
// const products = Object.values(inventory);
// products.sort((a, b) => a.id - b.id);

//? See if a product have an available category 
// const avilableCategories = products.map((product) => product.category);
// console.log(avilableCategories.includes(products[0].category));

//? Use splice() to remove a discontinued product.
// const discounted = products.splice (6, 1);
// console.log("discounted:", discounted);

//? Use slice() to display the first five products.
// const firstFive = products.slice(1, 6);
// console.log("First Five: " + firstFive);

//? Use concat() to merge two inventories
// const newInventory = [
//     {
//         id: 10,
//         name: "cam",
//         price: 60,
//         category: "Electronics",
//         quantity: 12
//     },
//     {
//         id: 10,
//         name: "cam2",
//         price: 60,
//         category: "Electronics",
//         quantity: 12
//     },
// ];

// const allProducts = products.concat(newInventory);
// console.log(allProducts);
