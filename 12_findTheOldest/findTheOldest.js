const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((total, current) => {
    let oldesObj = total;
    let oldestAge = getAge(oldesObj.yearOfBirth, oldesObj.yearOfDeath);
    let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

    if (currentAge > oldestAge) {
      oldesObj = current;
    }
    return oldesObj;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

/* 
people.sort((a, b) => {
    let age1 = a.yearOfDeath - a.yearOfBrith;
    let age2 = b.yearOfDeath - b.yearOfBrith;
    
  }); */
