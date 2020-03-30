import users from "./users.js";
("use strict");

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color).map(user => user.name);
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
