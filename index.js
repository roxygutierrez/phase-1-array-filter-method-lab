// Code your solution here

function findMatching(arrayOfDrivers, driverName) {
  return arrayOfDrivers.filter(function (driver) {
    return driver.toUpperCase() === driverName.toUpperCase();
  });
}

function fuzzyMatch(arrayOfDrivers, lookUp) {
  return arrayOfDrivers.filter(function (name) {
    return name.startsWith(lookUp);
  });
}

function matchName(arrayOfDrivers, name) {
  return arrayOfDrivers.filter(function (driver) {
    return driver.name === name;
  });
}
