const soyHello = (name = "juan", edad = 0) => 
`Hola mundo function ! ${name} edad ${edad}`;


const result = soyHello("Gabriel", 20);
console.log(result);