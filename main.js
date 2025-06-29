// main.js
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 650,
    webPreferences: {
      preload: path.join(__dirname, 'renderer.js'),
      contextIsolation: false,
      nodeIntegration: true,
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});