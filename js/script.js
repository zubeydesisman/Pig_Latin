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
   var outputArray = inputArray.slice(0);
   for(var i = 0; i<inputArray.length; i++) {
     var isVowel = false;
     for(var j = 0; j<vowel.length; j++){
       if(inputArray[i] === vowel[j]) {
         isVowel = true;
        }
      }
      if (!isVowel) {
        var consonant = outputArray.shift();
        outputArray.push(consonant);
      }else {
        break;
      }
   }
    alert(outputArray);







  $("#result").text(output);
  });
});
