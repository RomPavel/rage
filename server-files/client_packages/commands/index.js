const changeViewModeFunctionHash = '0x5A4F9EDF1673F704';

const CUSTOM_COMMANDS = {
    testFirstNative: 'testFirstNative',
    testSecondNative: 'testSecondNative',
    testClientCommand: 'testClientCommand'
};

mp.events.add("playerCommand", (command) => {
    const args = command.split(/[ ]+/);
    const commandName = args[0];

    args.shift();

    mp.gui.chat.push(`You enter command: "${commandName}"`);
    switch (commandName) {
        case CUSTOM_COMMANDS.testFirstNative: {
            mp.game.invoke(changeViewModeFunctionHash, 4);
            break;
        }
        case CUSTOM_COMMANDS.testSecondNative: {
            mp.game.invoke(changeViewModeFunctionHash, 0);
            break;
        }
        case CUSTOM_COMMANDS.testClientCommand: {
            const today = new Date();

            mp.gui.chat.push(`Curent date: ${today.toLocaleDateString("en-US")}`);

            mp.events.callRemote('testServerEvent', today.toISOString());
            break;
        }
    }
});
