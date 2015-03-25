//Phil Hofer
//3/19/15
//regexp.js
//This is the regexp golf problem from ch 9. It takes regular expressions
//and verifies them with given strings.

// Fill in the regular expressions

verify(/car|cat/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pop|prop/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/ferret|ferry|ferrari/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s(.|,|:|;)/,
       ["bad punctuation ."],
       ["escape the dot"]);

verify(/[A-Za-z]{7}[A-Za-z]*/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/[^e]+/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
