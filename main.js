const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // Ensure context isolation is enabled
      enableRemoteModule: false, // Disable remote module for security
      nodeIntegration: false, // Disable Node.js integration in the renderer
    },
  });

  mainWindow.loadFile('index.html');
});

// Handle opening scientific-notation.html
ipcMain.on('open-scientific-notation', () => {
  const scientificNotationWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  scientificNotationWindow.loadFile('scientific-notation.html');
});

// Handle opening unit-converter.html
ipcMain.on('open-unit-converter', () => {
  const unitConverterWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  unitConverterWindow.loadFile('unit-converter.html');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});