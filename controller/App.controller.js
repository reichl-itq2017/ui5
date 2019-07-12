sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, MessageBox, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("hts.itq2017.walkthrough.controller.App", {
        onInit: function () {
            // set data model on view
            var oData = {
                recipient: {
                    name: "Welt"
                },
                schüler: {
                    name: "Hugo",
                    noten: [1, 2, 2, 1]
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName: "hts.itq2017.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");     // Beachte das "i18n"!
        },
        onShowHello: function () {
            // read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);
        },
        onAlert: function () {
            MessageBox.alert("Alert, alert!", {
                title: "Alert"
            });
        }
    });
});