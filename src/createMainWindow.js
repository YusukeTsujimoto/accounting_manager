import { BrowserWindow, ipcMain } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";

class MainWindow {
  constructor() {
    this.window = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        // Use pluginOptions.nodeIntegration, leave this alone
        // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
        nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
      }
    });

    if (process.env.WEBPACK_DEV_SERVER_URL) {
      // Load the url of the dev server if in development mode
      this.window.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
      if (!process.env.IS_TEST) this.window.webContents.openDevTools();
    } else {
      createProtocol("app");
      // Load the index.html when not in development
      this.window.loadURL("app://./index.html");
    }
    this.window.on("closed", () => {
      this.window = null;
    });
    ipcMain.once("save_estimate", (_e, text) => {
      console.log(text);
    });
  }

  requestText() {
    return new Promise(resolve => {
      this.window.webContents.send("REQUEST_TEXT");
      ipcMain.once("REPLY_TEXT", (_e, text) => resolve(text));
    });
  }

  sendText(text) {
    this.window.webContents.send("SEND_TEXT", text);
  }
}

function createWindow() {
  return new MainWindow();
}

export default createWindow;
