chrome.contextMenus.create({
  id: 'context-run',
  title: 'Generate blog post',
  contexts: ['selection'],
});

// listener
chrome.contextMenus.onClicked.addListener(generateCompletionAction);
