"use strict";

var nconf = require('nconf');
var _ = require('underscore-node');

// approximates our current approach of chaining defaults based on environment, simplified and hard-coded for this demo
var defaultConfig = _.defaults(require('./configs/development.json'),require('./configs/defaults.json'));

// In two lines, we can allow the user to override even deep hierarchical settings from the command line
nconf.argv().defaults({"config": defaultConfig });
var config = nconf.get("config");

console.log("The config object looks like:");
console.log(JSON.stringify(config));