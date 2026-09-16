// The auth service may append tokens or an error after '#'. Tokens are never used
// here and are dropped from the address at once so they cannot linger in history.
(function () {
  var hash = location.hash || '';
  if (hash.length > 1) {
    var expired = /error/.test(hash);
    if (window.history && history.replaceState) history.replaceState(null, '', location.pathname + location.search);
    else location.hash = '';
    if (expired) {
      document.getElementById('status').hidden = true;
      document.getElementById('expired').hidden = false;
    }
  }
})();
