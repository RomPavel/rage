const constrants = require('../../constrants');

function playerEnterVehicleHandler(player, vehicle, seat) {
    const vehicleCustomId = vehicle.getVariable(constrants.vehicleCutmomIdProperty);

    player.outputChatBox(`Entered car with customId: ${vehicleCustomId}`);

    const checkpointPosition = new mp.Vector3(-420, 1180, 325);
    const checkpoint = mp.checkpoints.new(1, checkpointPosition, 10,
        {
            direction: new mp.Vector3(0, 0, 75),
            color: [255, 255, 255, 255],
            visible: true,
            dimension: 0
        });

    checkpoint.setVariable(constrants.checkpointAllowedVehicleCustomIdProperty, vehicleCustomId);

    mp.blips.new(84, checkpointPosition, {
        name: 'Сука сюда едь',
        color: 3,
        shortRange: true,
    });
}

module.exports = {
    playerEnterVehicleHandler
}