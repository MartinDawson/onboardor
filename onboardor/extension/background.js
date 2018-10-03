chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (request.gitHubToken) {
      chrome.cookies.set({ url: window.location.origin, name: "Token", value: request.gitHubToken });
    }
  });
