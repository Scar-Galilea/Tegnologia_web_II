/*function soyHello(name = "Juan", edad =0){
  const greeting = `Hola mundo function! ${name} edad ${edad}`;
  //console.log("Hola mundo");

  return greeting;
}
//soyHello();
//const result = soyHello("Gabriel",20);
//console.log(result);

console.log(soyHello("Gabriel",20));
//console.log(soyHello());
*/

const soyHello = function(name = "Juan", edad = 0){
  const greeting = `Hola mundo function! ${name} edad ${edad}`;
  return greeting;
}

const result = soyHello("Gabriel",20);  

console.log(result);
