const { movePlayerCustomEventHandler, consoleLogHandler } = require('./handlers');

mp.events.add('movingPlayer', movePlayerCustomEventHandler);

mp.events.add('testServerEvent', consoleLogHandler);