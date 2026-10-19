const average = 6.5;
let status;

status = average >= 6 ? "Aprobado" : "Reprobado";

console.log(`Resulltado: ${status}`);

/*
if(average >= 6){
    status = "Aprobado";
}else{
    status = "Reprobado";
}
 console.log(`Resulltado: ${status}`);
*/

console.log(`Resultado: ${average >= 6 ? "Aprobado" : "Reprobado"}`);

let max;

const a = 5;
const b = 8;
const c = 3;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`El mayor es: ${max}`);