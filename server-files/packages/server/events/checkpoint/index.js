const { playerEnterCheckpointHandler } = require('./checkpoint.handlers');

mp.events.add("playerEnterCheckpoint", playerEnterCheckpointHandler);