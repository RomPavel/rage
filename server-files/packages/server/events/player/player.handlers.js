const { setPlayerModel, setPlayerName } = require('../../utils/player.utils');
const { spawnPlayer } = require('../../utils/player.utils');

function playerJoinHandler(player) {
    spawnPlayer(player);
    setPlayerModel(player);
    setPlayerName(player);

    const playerPos = player.position;

    const colShape = mp.colshapes.newCircle(playerPos.x, playerPos.y, 1);
    player.data.initialColShape = colShape;
}

function playerDeathHandler(player) {
    spawnPlayer(player);
}

module.exports = {
    playerJoinHandler,
    playerDeathHandler,
}