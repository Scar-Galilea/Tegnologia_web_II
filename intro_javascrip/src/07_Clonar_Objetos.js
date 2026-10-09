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

const invoice2 = {...invoice};
//const invoice2 = invoice;
const result = invoice == invoice2;

console.log(result);

if(result){
    console.log("Son iguales");
}else{
    console.log("No son iguales");
}

invoice2.id = 20;
console.log(invoice.id);
console.log(invoice2.id);