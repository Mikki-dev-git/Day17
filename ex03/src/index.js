const MY_Car = {
  wheels: 4,
  cylinders: 4,
  size: 2.2,
};

function main(myCar) {
  // Only change code below this line
  const { cylinders: carCylinders, size: carSize } = myCar;
  return { carCylinders, carSize };
  // Only change code below this line
}

console.log(main(MY_Car));
module.exports = main;
