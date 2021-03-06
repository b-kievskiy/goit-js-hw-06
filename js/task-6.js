import users from "./users.js";
("use strict");

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => min < user.age).filter(user => user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
