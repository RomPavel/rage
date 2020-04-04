const BROWSER_KEY = 'BROWSER_KEY';

mp.events.add('browserCreated', (browser) => {
    mp.storage.data[BROWSER_KEY] = browser;
});

mp.events.add('closeBrowser', () => {
    const browser = mp.storage.data[BROWSER_KEY];
    if (browser) {
        browser.destroy();
    }
});
