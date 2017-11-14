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
