$(document).ready(function() {
  $("form#formword").submit(function(event) {
    event.preventDefault();
    var inputString = $("#input").val();
    var inputArray = inputString.split("");
    var vowel = ["a","e","i","o","u"];
    var output = "";

    if (vowel.includes(inputArray[0])){
      output = inputString + "way";
    } else if(inputArray[0] === "q"  &&  inputArray[1] === 'u'){
      var qu = inputArray.splice(0,2);
      output = inputArray.join("") + qu.join("") + "ay";
    } else {
      var consonants = "";
      for(var i=0; i<inputArray.length; i++){
        // if current letter is a vowel
        // checks if the current letter, which is inputArray[i], is included in the vowel array.
        if(!vowel.includes(inputArray[i])) {
        consonants += inputArray.shift();
      }
      output = inputArray.join("") + consonants + "ay";
    } //if(inputArray[0] === "y"){
      //var consonants = "";
      //for(var i=0; i<inputArray.length; i++){
      //  if(!vowel.includes(inputArray[i]))
      //  consonants += inputArray.shift();
      }
      //output = inputArray.join("") + consonants + "ay";
    









    $("#result").text(output);
  });
});
