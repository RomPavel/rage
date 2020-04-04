mp.events.add('render', () => {
    const player = mp.players.local;
    const worldCoords = player.getBoneCoords(0, 0, 0, 0);
    const screenCoords = mp.game.graphics.world3dToScreen2d(worldCoords);

    var now = new Date();
    var secondsTitle = now.getSeconds();

    if (screenCoords && screenCoords.x && screenCoords.y) {
        mp.game.graphics.drawText(`${secondsTitle}`, [screenCoords.x, screenCoords.y], {
            font: 4,
            color: [255, 255, 255, 255],
            scale: [1.0, 1.0],
            outline: true
        });
    }
});

mp.events.add('testClientEvent', (str, ping) => {
    const player = mp.players.local;
    const worldCoords = player.getBoneCoords(0, 0, 0, 0);

    mp.labels.new(`${str}: ${ping}`, worldCoords,
        {
            dimension: player.dimension
        });
});

mp.events.add('closeBrowser', () => {
    mp.gui.chat.push(`123`);
    const browser = mp.browsers.at(0);
    if (browser) {
        browser.destroy();
    }
})

mp.events.add('movingPlayer', (...args) => {
    mp.events.callRemote('movingPlayer', ...args);
})