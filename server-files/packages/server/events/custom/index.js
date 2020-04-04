const { movePlayerCustomEventHandler, consoleLogHandler } = require('./custom.handlers');

mp.events.add('movingPlayer', movePlayerCustomEventHandler);

mp.events.add('testServerEvent', consoleLogHandler);