// Promesas
import { findInvoiceById } from "./data/invoices";

findInvoiceById(4)
    .then((result) => {
        console.log(result);
        console.log("Simulando alguna tarea con demora");
    })
    .catch((error) => {
        console.error(error)
    })

    //findInvoiceById(2).then(console.log).catch(console.error);