const { spawnPlayer } = require('../../utils/player.utils');

function movePlayerCustomEventHandler(player, x, y, z) {
    spawnPlayer(player, { x, y, z });
}

function consoleLogHandler(player, todayDate) {
    console.log(todayDate);
}

module.exports = {
    movePlayerCustomEventHandler,
    consoleLogHandler
}