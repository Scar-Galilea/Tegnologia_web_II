const findALLUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

const users = await findALLUsers();
console.log(users);
console.log("Hola que tal");