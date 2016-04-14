App.onLaunch = function(options) {
  // 1
  var javascriptFiles = [
    `${options.BASEURL}js/Presenter.js`
  ];
  // 2
  evaluateScripts(javascriptFiles, function(success) {
    if(success) {
      var alert = createAlert("Hello World!", "");
      Presenter.modalDialogPresenter(alert);
    } else {
      // 3 Handle the error CHALLENGE!//inside else statement of evaluateScripts. 
    }
  });
}

var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
  <document>
    <alertTemplate>
      <title>${title}</title>
      <description>${description}</description>
      <button>
        <text>OK</text>
      </button>
    </alertTemplate>
  </document>`