// console.log('hello from electron!');
const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

console.log('__dirname:', __dirname);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    console.log('BrowserWindow.getAllWindows(): ', BrowserWindow.getAllWindows());
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  console.log('process.platform: ', process.platform);
  if (process.platform !== 'darwin') {
    app.quit()
  }
})