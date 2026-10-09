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

// Metodo find() es un metodo que nos permite buscar un elemento en un arreglo, y nos devuelve el primer elemento que cumpla con la condicion que le pasamos como parametro, si no encuentra ningun elemento que cumpla con la condicion, nos devuelve undefined.
const invoiceById = invoice.find((i) => {
    return i.name === "Compras de oficina";
});
console.log(invoiceById);

const invoiceByName = invoice.find((i) => {
    return i.client.name === "Samuel";
});
console.log(invoiceByName);

