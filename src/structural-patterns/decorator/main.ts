import _ from 'lodash';
import ElReload from 'electron-reload';
// import it only this way, as esModuleInterop crashes the app by iterating over
// the properties of `El` that may be retrieved only when app has emitted 'ready' event.
import El  from 'electron';

import * as Path     from 'path';
import * as Url      from 'url';


let win: El.BrowserWindow | null;
                        
const serve = _.includes(process.argv, '--serve', 2); // skip node and source file path args

function createWindow() {
    const { width, height } = El.screen.getPrimaryDisplay().workAreaSize;

    // Create the browser window.
    win = new El.BrowserWindow({ 
        width, 
        height,
        webPreferences: { nodeIntegration: true }
    });

    if (serve) {
        ElReload(__dirname, { electron: El });
        win.loadURL('http://localhost:4200');
    } else {
        win.loadURL(Url.format({
            pathname: Path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }

    win.webContents.openDevTools();

    win.on('closed', () => {
        /*
            Dereference the window object, usually you would store window
            in an array if your app supports multi windows, this is the time
            when you should delete the corresponding element.
        */
        win = null;
    });

}

El.app.on('ready', createWindow);


El.app.on('window-all-closed', () => {
    /* 
        On OS X it is common for applications and their menu bar
        to stay active until the user quits explicitly with Cmd + Q
    */ 
    if (process.platform !== 'darwin') {
        El.app.quit();
    }
});

El.app.on('activate', () => {
    /* 
        On OS X it's common to re-create a window in the app when the
        dock icon is clicked and there are no other windows open.
    */ 
    if (win == null) {
        createWindow();
    }
});

