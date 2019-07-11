sap.ui.define([
	"sap/m/Text",
	"sap/m/Link"
], function (Text, Link) {
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

	new Link({
		text: "Ich bin der Link zu Google",
		href: "http://www.google.de/"
	}).placeAt("content");

	new Text({
		text: "Hello Google"
	}).placeAt("content");
});