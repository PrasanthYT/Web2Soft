// Web2Soft v2.0.0
// Prasanth
// jprasanth2006@gmail.com

const { ipcMain } = require('electron');

module.exports = [
    {role : 'reload'},
    {role : 'cut'},
    {role : 'copy'},
    {role : 'paste'},
    {role : 'redo'},
    { type: 'separator' },
    {label : 'Print', click: printPage},
]

// Print page method
function printPage() {
    ipcMain.emit('printPage')
}