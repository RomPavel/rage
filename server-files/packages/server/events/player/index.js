const { playerJoinHandler, playerDeathHandler } = require('./player.handlers');

mp.events.add('playerJoin', playerJoinHandler);
mp.events.add('playerDeath', playerDeathHandler);
