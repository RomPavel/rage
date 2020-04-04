const constrants = require('../constrants');
const carsStore = {};

function createInitialCar() {
    const car = mp.vehicles.new(mp.joaat("emerus"), new mp.Vector3(-421.88, 1136.86, 326), {
        numberPlate: "SHIT HAPPENS",
        color: [[255, 0, 0], [255, 0, 0]],
    });


    const carCustomId = Math.round(Math.random() * 1000);
    car.setVariable(constrants.vehicleCutmomIdProperty, carCustomId);

    carsStore[carCustomId] = car;
}

module.exports = {
    createInitialCar,
};