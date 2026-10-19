const user = {
    name: "Gabriel",
    age: 25,
    email: "jugaruiz@unsij.edu.mx",
    ranking: 9,
}

//Desestructuración de objetos en funciones
//Metodo 1
const detall = (user) => {
    const { name, age, ranking } = user;
    console.log(`${name} tiene ${age} ${ranking}`);
}

console.log(detall(user));