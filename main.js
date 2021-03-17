// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");
const serve = require("electron-serve");
const loadURL = serve({ directory: "public" });

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

process.env.NODE_ENV = "dev";
const isDev = process.env.NODE_ENV === "dev" ? true : false;

function isPro() {
  return app.isPackaged;
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: isDev ? 1200 : 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    // Use this in development mode.
    icon: isPro()
      ? path.join(process.cwd(), "public/favicon.png")
      : path.join(__dirname, "public/favicon.png"),
    // Use this in production mode.
    // icon: path.join(__dirname, 'public/favicon.png'),
    show: false,
  });

  // This block of code is intended for development purpose only.
  // Delete this entire block of code when you are ready to package the application.
  if (isPro()) {
    mainWindow.loadURL("http://localhost:5000/");
  } else {
    loadURL(mainWindow);
  }

  // Uncomment the following line of code when app is ready to be packaged.
  // loadURL(mainWindow);

  // Open the DevTools and also disable Electron Security Warning.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    mainWindow = null;
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});
