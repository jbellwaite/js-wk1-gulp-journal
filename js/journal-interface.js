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
