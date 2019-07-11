sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "hts.itq2017.walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
	
	// new Text({
	// 	text: "Hello World"
	// }).placeAt("content");

	// new Link({
	// 	text: "Ich bin der Link zu Google",
	// 	href: "http://www.google.de/"
	// }).placeAt("content");

	// new Text({
	// 	text: "Hello Google"
	// }).placeAt("content");
});