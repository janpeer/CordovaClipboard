var cordova = require('cordova'),
    channel = require('cordova/channel');

module.exports = {
    copy: function (success, fail, args) {
        console.log("COPY");
        Windows.ApplicationModel.DataTransfer.Clipboard.setContent(args[0]);
    },
    paste: function (success, fail, args) {
        console.log("PASTE");
    }
}
require("cordova/exec/proxy").add("Clipboard", module.exports);
