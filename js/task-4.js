import users from "./users.js";

("use strict");

const getInactiveUsers = users => {
  return users.filter(user => user.isActive).map(user => user.name);
};

console.log(getInactiveUsers(users));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
