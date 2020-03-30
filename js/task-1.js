import users from "./users.js";
("use strict");

const getUserNames = users.map(user => user.name);

console.log(getUserNames);
