  var wordsToTrial = [ "rat", "cat", "bat", "hat"];

  var screenstuff = 
  {
  
      animation: [
      "animated hinge",
      "animated bounce",
      "animated rubberband",
      "animated shake",
      "animated swing",
      "animated tada",
      "animated wobble",
      "animated jello",
      "animated bounceOutLeft",
      "animated bounceOutRight",
      "animated flip",
      "animated lightSpeedOut",
      "animated rollOut",
      ],
    
      cell: [
        "#topright",
        "#topleft",
        "#bottomright",
        "#bottomleft"
        ],
        
      linebreaks: [
        "", 
        "<br>",
        "<br><br>",
        "<br><br><br>"
        ]
  };


/**
 * adds new set of words to the screen
 */

// for a trial
function presentTrial(words) {

  var trial = {  
    randomEffect: Math.floor(Math.random() * 13),
    randomCell: Math.floor(Math.random() * 4),
  };  
  
  console.log("Number for random animation: " + trial.randomEffect);
  console.log("Number for random cell: " + trial.randomCell);

  reorderWords(trial.randomCell, words);
  
  var index=0;
  screenstuff.cell.forEach(function(cell) {
    var phonicsWord = $("<h1></h1>").text(words[index]);
    $(cell).append(phonicsWord);
    index++;
  });

  var targetWordCell = screenstuff.cell[trial.randomCell];
  
  $(targetWordCell).click(function() {
    screenstuff.cell.forEach(function(cell) {
      if (cell != targetWordCell) {
        $(cell).attr("class", screenstuff.animation[trial.randomEffect]);
      }
      
    });
      //$(targetWordCell).attr("class", screenstuff.animation[trial.randomEffect]);
    });    
}

function presentTargetWord(words) {
  
}


function reorderWords(targetWordIndex, words) {
  var word = words[targetWordIndex];
  words[targetWordIndex] = words[0];
  words[0] = word;
}


$(document).ready(function(){
  presentTrial(wordsToTrial);
});




