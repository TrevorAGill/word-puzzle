var vowels = ["a", "e", "i", "o", "u"];
var sentenceArray = [];
var currentVowel = "";
var currentLetter = "";

$(document).ready(function(){
  $("#wordForm").submit(function(event){
    var sentenceInput = $("input#inputWords").val();
    var letterArray = sentenceInput.split("");

    for(var index = 0; index < letterArray.length; index += 1){
      currentLetter = letterArray[index];
      if(currentLetter === "a") {
        currentLetter = "-";
        
        alert(currentLetter);
      } else if(currentLetter === "e") {
        currentLetter = "-";
      } else if(currentLetter === "i") {
        currentLetter = "-";
      } else if(currentLetter === "o") {
        currentLetter = "-";
      } else if(currentLetter === "u") {
        currentLetter = "-";
      } else {
        currentLetter = currentLetter
      }
    }


    // REGEX SOLUTION
    // var sentenceObscured = sentenceInput.replace(/a/gi, "-");
    // var sentenceObscured = sentenceObscured.replace(/e/gi, "-");
    // var sentenceObscured = sentenceObscured.replace(/i/gi, "-");
    // var sentenceObscured = sentenceObscured.replace(/o/gi, "-");
    // var sentenceObscured = sentenceObscured.replace(/u/gi, "-");
    // alert(sentenceObscured)

    // var target = this;
    // alert(target.split("a").join("-");

    event.preventDefault();
  });
});















// var words = [];
//
// $(document).ready(function(){
//   $("#wordForm").submit(function(event){
//     words = $("input#inputWords").val();
//     words = words.split(" ");
//     word = words.sort();
//     var index = 0;
//     var count = 1;
//
//     words.forEach(function(word){
//       index += 1;
//       if(word === words[(index)]){
//         count += 1;
//       } else if(word !== words[(index)]){
//         $("#wordList").append("<li>" + word + ": " + count + "</li>");
//         count = 1;
//       }
//     });
//
//
//     event.preventDefault();
//   });
//
// });
