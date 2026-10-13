// Promesas
import invoiceById from "./data/invoices";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = invoiceById(3);

    if(result){
        resolve(result);
    }else{
        reject("error: no existe la factura con el id ingresado")
    }
  }, 2500);
});

/*
promise
    .then((result) => {
        console.log(result);
        console.log("Simulando alguna tarea con demora");
    })
    .catch((error) => {
        console.log(error);
    })
*/
promise.then(console.log).catch(console.error);
