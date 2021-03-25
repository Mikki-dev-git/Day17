const MY_Car = {
  wheels: 4,
  cylinders: 4,
  size: 2.2,
};

function main(myCar) {
  // Only change code below this line
  const { cylinders, size } = myCar;
  return {
    cylinders,
    size,
  };
  // Only change code below this line
}

console.log(main(MY_Car));
module.exports = main;
