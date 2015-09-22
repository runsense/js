chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('fram.html', {
    'outerBounds': {
      'width': 800,
      'height': 1200
    }
  });
});