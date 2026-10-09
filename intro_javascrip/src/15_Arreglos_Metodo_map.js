const invoice = [
        {
        
        id: 1,
        name: "Compras de oficina",
        date: new Date(),
        client: {
            id: 1,
            name: "Jhon",
            lastName: "Doe",
            ago: 20,
        },
        item: [
            {
                product: "Keyboard",
                price: 100,
                quantity: 2,
            },
            {
                product: "Mouse",
                price: 100,
                quantity: 21,
            },
            {
                product: "Papel",
                price: 100,
                quantity: 10
            },
        ],
    },
    {
        id: 2,
        name: "Compras de Computadoras",
        date: new Date(),
        client: {
            id: 1,
            name: "Jorge",
            lastName: "Cruz",
            ago: 20,
        },
        item: [
            {
                product: "Dell",
                price: 299,
                quantity: 2,
            },
            {
                product: "Acer",
                price: 200,
                quantity: 21,
            },
            {
                product: "Lenovo",
                price: 100,
                quantity: 10
            },
        ],
    },
    {
        id: 3,
        name: "Compras de Papelería",
        date: new Date(),
        client: {
            id: 1,
            name: "Samuel",
            lastName: "Gonzalez",
            ago: 20,
        },
        item: [
            {
                product: "Lapiz",
                price: 299,
                quantity: 2,
            },
            {
                product: "Borrador",
                price: 200,
                quantity: 21,
            },
            {
                product: "Cuaderno",
                price: 100,
                quantity: 10
            },
        ],
    },
];

// Metodo map es un metodo que nos permite recorrer un arreglo y crear un nuevo arreglo con los elementos modificados, es decir, no modifica el arreglo original.
const invociceName = invoice.map((i) =>{
    return i.name;
})
console.log(invociceName);

const invoiceClient = invoice.map((i) =>{
    return i.client.name;
})
console.log(invoiceClient);

