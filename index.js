sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "hts.itq2017.walkthrough",	// Namespace unserer Anwendung oder Komponente?
		settings : {
			id : "meinWalkthrough"			// war "walkthrough"
		},
		async: true
	}).placeAt("content");

	// XMLView.create({
	// 	viewName: "hts.itq2017.walkthrough.view.App"
	// }).then(function (oView) {
	// 	oView.placeAt("content");
	// });
	
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