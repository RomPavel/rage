const changeViewModeHash = '0x5A4F9EDF1673F704';

mp.events.add("playerCommand", (command) => {
    const args = command.split(/[ ]+/);
    const commandName = args[0];

    args.shift();

    mp.gui.chat.push(`You enter command: "${commandName}"`);
    switch (commandName) {
        case 'testFirstNative': {
            mp.game.invoke(changeViewModeHash, 4);
            break;
        }
        case 'testSecondNative': {
            mp.game.invoke(changeViewModeHash, 0);
            break;
        }
        case 'testClientCommand': {
            const today = new Date();

            mp.gui.chat.push(`Curent date: ${today.toLocaleDateString("en-US")}`);

            mp.events.callRemote('testServerEvent', today.toISOString());
            break;
        }
    }

});