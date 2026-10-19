const users = fetch("https://jsonplaceholder.typicode.com/users");

users.then((response) => response.json()).then((data) => console.log(data));


/*
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((json) => console.log(json));
*/