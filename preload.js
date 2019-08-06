// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
      createWindow();
    }, 3000);  
})

function createWindow() {
  const w = window.open('https://example.com')
  setTimeout(() => {
    w.close()
    createWindow()
  }, 1000)    
}

