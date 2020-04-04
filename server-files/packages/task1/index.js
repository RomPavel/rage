//init Commands file
require('./commands');
require('./events.js');

const { createInitialCar } = require('./vehicle/index');
createInitialCar();