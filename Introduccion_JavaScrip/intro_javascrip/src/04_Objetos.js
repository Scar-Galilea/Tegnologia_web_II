const invoice ={
    id: 10,
    name: "Compras de oficina",
    date: new Date(),
    client: "Jhon Doe",
    total: 1000
}

console.log(invoice);
console.log(invoice.name);

invoice.client = "Juan Ruiz";
invoice.total = 5000;
console.log(invoice);