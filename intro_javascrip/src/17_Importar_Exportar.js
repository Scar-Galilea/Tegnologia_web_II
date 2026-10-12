import invoiceByClient, {invoice, paper} from "./data/invoices";

// Metodo map es un metodo que nos permite recorrer un arreglo y crear un nuevo arreglo con los elementos modificados, es decir, no modifica el arreglo original.
const invociceName = invoice.map((i) =>{
    return i.name;
})
console.log(invociceName);

const invoiceClient = invoice.map((i) =>{
    return i.client.name;
})
console.log(invoiceClient);

// Metodo find() es un metodo que nos permite buscar un elemento en un arreglo, y nos devuelve el primer elemento que cumpla con la condicion que le pasamos como parametro, si no encuentra ningun elemento que cumpla con la condicion, nos devuelve undefined.

const invoiceById = invoice.find((i) => {
    return i.name === "Compras de oficina";
});
console.log(invoiceById);

console.log(invoiceByClient("Samuel"));

// Metodo filter()
console.log("Aplicacion del metodo filter por id");
const invoiceFilter = invoice.filter((i) => i.id > 1);
console.log(invoiceFilter);

// Metodo includes()
const invoiceFilter2 = invoice.filter((i) => i.item.includes(paper));
console.log(invoiceFilter2)

// Metodo some()
const result = invoice.some((i) => i.client.name === "Juan");
console.log(result);
