const quran = require("mysql");

function countLetters(text) {
    
      let isSentence = text.includes(' ');
    
      if (text==isSentence) {
   
        text = text.replace(/\s/g, '');
      }
 
      return input.length;
    }
function countLetters(surahName ,versNumber){

      const versText =quran . getVerseText(surahName , versNumber);

      let isSentence =versText .includes(' ');
    
      if (versText==isSentence) {
   
        versText = versText.replace(/\s/g, '');
      }
 
      return versText.length;
    }
    
  
    