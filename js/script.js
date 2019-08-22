$(document).ready(function() {
  $("form#formword").submit(function(event) {
    event.preventDefault();
 var inputString = $("#input").val();
 var inputArray = inputString.split("");
 var vowel = ["a","e","i","o","u"];
 var output = "";
 for(var i = 0; i<vowel.length; i++) {
    if(inputArray[0] === vowel[i]) {
        output = inputString + "way";

    }
}
//for(var i = 0; i < ranks.length; i++) {
  // for(var j = 0; j < suits.length; j++) {
    // cards.push(ranks[i] + " of " + suits[j]);
   //}




  $("#result").text(output);
  });
});
