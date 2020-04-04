const { playerEnterVehicleHandler } = require('./vehicle.handlers');

mp.events.add("playerEnterVehicle", playerEnterVehicleHandler);