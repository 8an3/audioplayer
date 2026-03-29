let windowId = null;

chrome.action.onClicked.addListener(() => {
  if (windowId !== null) {
    chrome.windows.get(windowId, (win) => {
      if (chrome.runtime.lastError || !win) {
        openWindow();
      } else {
        chrome.windows.update(windowId, { focused: true });
      }
    });
  } else {
    openWindow();
  }
});

function openWindow() {
  chrome.windows.create({
    url: chrome.runtime.getURL('player.html'),
    type: 'popup',
    width: 500,
    height: 750,
    focused: true
  }, (win) => {
    windowId = win.id;
  });

  chrome.windows.onRemoved.addListener(function onRemoved(id) {
    if (id === windowId) {
      windowId = null;
      chrome.windows.onRemoved.removeListener(onRemoved);
    }
  });
}