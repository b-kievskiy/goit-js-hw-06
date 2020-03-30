import users from "./users.js";
("use strict");

const getSortedUniqueSkills = users => {
  const result = users
    .reduce((totalSkills, user) => {
      totalSkills.push(...user.skills);
      return totalSkills;
    }, [])
    .sort();

  return result;
};

console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
