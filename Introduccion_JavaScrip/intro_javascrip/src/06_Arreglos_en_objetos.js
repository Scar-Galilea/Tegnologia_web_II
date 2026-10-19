const invoice = {
    id: 10,
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
    total: function(){
        let total = 0;

        this.items.forEach((item) => {
            total = total + item.price * item.quantity;
        });
        return total;
    },
    greeting: function() {
        return `Hola ${this.client.name}`;
    },
};

invoice.client.name = "Gabriel";
invoice.total = 5000;
console.log(invoice);

const greeting = invoice.greeting();
console.log(greeting);
