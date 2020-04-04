const { playerEnterVehicleHandler } = require('./handlers');

mp.events.add("playerEnterVehicle", playerEnterVehicleHandler);