const { playerEnterVehicleHandler } = require('./vehicle/handlers/vehicle.enter.handler');
const { playerEnterCheckpointHandler } = require('./checkpoint/handlers/checkpoint.enter.handler');
const { spawnPlayer } = require('./player/player.spawn');
const { setPlayerModel, setPlayerName } = require('./player/utils');

mp.events.add('playerDeath', (player) => {
    spawnPlayer(player);
});

mp.events.add("playerEnterVehicle", playerEnterVehicleHandler);

mp.events.add("playerEnterCheckpoint", playerEnterCheckpointHandler);


let callShape;
mp.events.add('playerJoin', (player) => {
    spawnPlayer(player);
    setPlayerModel(player);
    setPlayerName(player);

    const playerPos = player.position;
    callShape = mp.colshapes.newCircle(playerPos.x, playerPos.y, 1);
});


function playerExitColshapeHandler(player, shape) {
    if (shape == callShape) {
        player.outputChatBox(`Callshape id: ${shape.id}; Player name: ${player.name}`);
        player.call('testClientEvent', ['текущий пинг', player.ping]);
    }
}

mp.events.add('playerExitColshape', playerExitColshapeHandler);

mp.events.add('testServerEvent', (player, todayDate) => {
    console.log(todayDate);
});

mp.events.add('movingPlayer', (player, x, y, z) => {
    spawnPlayer(player, { x, y, z });
})