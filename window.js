window.onload = function() {
  var home = 'http://thejourney.org/node/21877'
    , webview = document.querySelector("webview");

  webview.src = home;
  document.querySelector("#backToHomBtn").onclick = function() {
    webview.src = home;
  }
}