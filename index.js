var notifier = require('node-notifier');
var path = require('path');

function WebpackNotifier(options) {
  
}

WebpackNotifier.prototype.apply = function(compiler) {
  compiler.plugin("done", function(stats) {
    if(stats.hasErrors()){
      notifier.notify({
        'title':'Webpack',
        'message':'Compile completed with errors',
        'icon':path.join(__dirname, 'error-icon.png')
      });
    }else{
      notifier.notify({
        'title':'Webpack',
        'message':'Compile completed',
        'icon':path.join(__dirname, 'icon.png')
      });
    }
  });
};

module.exports = WebpackNotifier;