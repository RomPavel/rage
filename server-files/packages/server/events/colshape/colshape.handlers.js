function playerExitColshapeHandler(player, shape) {
    if (player.data.initialColShape == shape) {
        player.outputChatBox(`Callshape id: ${shape.id}; Player name: ${player.name}`);
        player.call('testClientEvent', ['текущий пинг', player.ping]);
    }
}

module.exports = {
    playerExitColshapeHandler,
}