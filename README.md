# electron-mojo-issue

This is a fork of electron-quick-start

1. npm install
2. npm start
3. after 3 seconds, rederer.js will create and close windows with window.open
4. go to TaskManager and change affinity of all Electron processes to cpu 0
5. wait and renderer process will hang
