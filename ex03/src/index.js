const MY_CAR = {
    wheel: 4,
    cylinders: 4,
    size: 2.2
}

function main(myCar) {
    // Only change code below this line
    const { cylinders, size } = MY_CAR; // cylinders = 4, size = 2.2
    // Only change code above this line
    return { cylinders, size };
}
console.log(main(MY_CAR));
module.exports = main;