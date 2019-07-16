sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("hts.itq2017.walkthrough.Component", {
       metadata : {
          rootView: {
             "viewName": "hts.itq2017.walkthrough.view.App",
             "type": "XML",
             "async": true,
             "id": "app"
          }
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // set data model
          var oData = {
             recipient : {
                name : "Welt"
             }
          };
          var oModel = new JSONModel(oData);
          this.setModel(oModel);
 
          // set i18n model
          var i18nModel = new ResourceModel({
             bundleName : "hts.itq2017.walkthrough.i18n.i18n"
          });
          this.setModel(i18nModel, "i18n");
       }
    });
 });