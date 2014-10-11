window.onload = function() {
  var home = 'http://thejourney.org/node/21877'
    , webview = document.querySelector("webview");

  // Set the initial src of webview.
  webview.src = home;

  /**
   * Click handler for "back to home button".
   */
  document.querySelector("#backToHomBtn").onclick = function() {
    webview.clearData({since:0}, {cookies: true}, function() {
      webview.src = home;
    });
  }
}