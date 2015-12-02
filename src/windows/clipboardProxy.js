module.exports = {
    copy: function (success, fail, args) {
        var value = new Windows.ApplicationModel.DataTransfer.DataPackage();
        value.setText(args[0]);
        Windows.ApplicationModel.DataTransfer.Clipboard.setContent(value);
        success(true);
    },
    paste: function (success, fail, args) {
        var dataPackageView = Windows.ApplicationModel.DataTransfer.Clipboard.getContent();
        dataPackageView.getTextAsync().done(function completed(result) {
            success(true);
        });
    }
}
require("cordova/exec/proxy").add("Clipboard", module.exports);
