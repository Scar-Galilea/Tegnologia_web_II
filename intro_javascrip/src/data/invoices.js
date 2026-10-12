const paper = {
    product: "Papel",
    price: 100,
    quantity: 10,
}


const invoice = [
        {
        
        id: 1,
        name: "Compras de oficina",
        date: new Date(),
        client: {
            id: 1,
            name: "Juan",
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
                paper
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

const invoiceByClient = (clientName) => {
    return invoice.find((i) => i.client.name === clientName);
};

export {
    paper,
    invoice,
    invoiceByClient as default,
} 