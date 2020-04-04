mp.events.add('testClientEvent', (str, ping) => {
    const player = mp.players.local;
    const worldCoords = player.getBoneCoords(0, 0, 0, 0);

    mp.labels.new(`${str}: ${ping}`, worldCoords,
        {
            dimension: player.dimension
        });
});

mp.events.add('movingPlayer', (...args) => {
    mp.events.callRemote('movingPlayer', ...args);
});
