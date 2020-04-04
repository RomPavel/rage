const constrants = require('../../constrants');

function playerEnterCheckpointHandler(player, checkpoint) {
    const { vehicle } = player;
    if (!vehicle) {
        return;
    }
    const vehicleCustomId = vehicle.getVariable(constrants.vehicleCutmomIdProperty);
    const checkpointAllowedCustomCarId = checkpoint.getVariable(constrants.checkpointAllowedVehicleCustomIdProperty);

    player.outputChatBox(`Checkpoint expect: ${checkpointAllowedCustomCarId}; Car customId: ${vehicleCustomId}`);
    if (checkpointAllowedCustomCarId === vehicleCustomId) {
        player.vehicle.setColor(0, 0);
        player.vehicle.repair();
        player.removeFromVehicle();
        setTimeout(() => {
            vehicle.destroy();
        }, 15000);
    }
};

module.exports = {
    playerEnterCheckpointHandler,
}