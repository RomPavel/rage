const constrants = require('../constrants');

const carsStore = {};
const COOL_CAR_MODEL = "emerus";

function generateCustomId() {
    return Math.round(Math.random() * 1000);
}

function createInitialCar() {
    const car = mp.vehicles.new(mp.joaat(COOL_CAR_MODEL), new mp.Vector3(-421.88, 1136.86, 326), {
        numberPlate: "SHIT HAPPENS",
        color: [[255, 0, 0], [255, 0, 0]],
    });


    const carCustomId = generateCustomId();
    car.setVariable(constrants.vehicleCutmomIdProperty, carCustomId);

    carsStore[carCustomId] = car;
}

module.exports = {
    createInitialCar,
};