(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var initialtitle = $('#title').val();
    var initialbody = $('#body').val();

    var newEntry = new Entry(initialtitle, initialbody);

    $('.journal-output').text(newEntry.title + newEntry.body);
    $('.number-output').text(newEntry.entryLength() + " words long");
    $('.number-of-vowels').text(newEntry.vowels() + " vowels in your entry");
    $('.number-of-consonants').text(newEntry.consonants() + " consonants in your entry")
  });
});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.entryLength = function(body) {
  var output = this.body.split("");
  return output.length;
}

Entry.prototype.vowels = function(body) {
  var split = this.body.split("");
  var output = [];

  for (var i = 0; i <= split.length; i++) {

    if (split[i] === "a" || split[i] === "e" || split[i] === "o" || split[i] === "u") {
      output.push(split[i]);
    }
  }
  return output.length;
}

Entry.prototype.consonants = function(body) {
  var split = this.body.split("");
  var output = [];
  var vowels = [];

  for (var i = 0; i <= split.length; i++) {

    if (split[i] === "a" || split[i] === "e" || split[i] === "o" || split[i] === "u") {
      vowels.push(split[i]);
    }else {
      output.push(split[i]);
    }
  }
  return output.length;
}

exports.journalModule = Entry;

},{}]},{},[1]);
