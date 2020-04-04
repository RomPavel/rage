const spawnPoints = require('../constrants/spawn.points');

const JEW_MODEL = 'a_m_m_hasjew_01';
const CLOWN_MODEL = 's_m_y_mime';
const PLAYER_NAME_PREFIX = 'Bobby';

function spawnPlayerWithFullHP(...args) {
    spawnPlayer(...args);
    player.health = 100;
}

function spawnPlayer(player, position) {
    const spawnPos = position ? position : spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
    player.spawn(spawnPos);
    player.position = spawnPos;
}

function setPlayerModel(player) {
    player.model = Math.round(Math.random()) ? mp.joaat(JEW_MODEL) : mp.joaat(CLOWN_MODEL);
}

let ind = 0;
function setPlayerName(player) {
    player.name = `${PLAYER_NAME_PREFIX}-${ind}`;
    ind = ind + 1;
}

module.exports = {
    spawnPlayerWithFullHP,
    spawnPlayer,
    setPlayerModel,
    setPlayerName
}