sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";
    return Controller.extend("hts.itq2017.walkthrough.controller.App", {
        onInit : function () {
            // set data model on view
            var oData = {
               recipient : {
                  name : "Welt"
               }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
         },
         onShowHello: function () {
            // show a native JavaScript alert
            // alert("Alert, alert!");
            MessageToast.show("Hier ist ein Toast...");
        },
        onAlert: function () {
            MessageBox.alert("Alert, alert!", {
                title: "Alert"
            });
        }
    });
});