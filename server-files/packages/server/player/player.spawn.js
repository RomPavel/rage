const spawnPoints = require('../constrants/spawn_points');

function spawnPlayer(player, position) {
    const spawnPos = position ? position : spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
    player.spawn(spawnPos);
    player.position = spawnPos;
    player.health = 100;
}

module.exports = {
    spawnPlayer
}