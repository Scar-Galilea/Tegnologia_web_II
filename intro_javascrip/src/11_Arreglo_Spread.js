const fruits = ["Manzana", "Platabo", "Pera"];
//fruits.push("Durazno", "Naranja");
const fruits2 = fruits.concat("Durazno", "Naranja");

//console.log(fruits);
//console.log(fruits2);

const products = ["Mesa", "Silla", "Sofa"];
const clothes = ["Camisa", "Camiseta", "Playera"];

//const market = [...fruits, ...products];
const market = [
    ...fruits, 
    ...products, 
    ...clothes,
    "Tv",
    "Computadora",
    "Telefono",
];

const market2 = fruits2.concat(clothes).concat("Tv", "Computadora", "Telefono");

console.log(fruits2);
console.log(market);
console.log(market2);


