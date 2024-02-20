const quran = require("mysql");
const connect =require("./mysqlDB");

//if scope ayah
function countOccurences(word , surahName , verseNumber){
  const versText = quran . getVerseText(surahName , verseNumber);

  const count = (versText.match(newRegExp(word, "g")) || []).length;

  return count;
}
// //if scope surah
function countOccurences(word , surahName){
  const surahText = quran . getSurahText(surahName);

  const count = (surahText.match(newRegExp(word, "g")) || []).length;

  return count;

}

// //if scope sentence
function countOccurences(sentence, word) {
  let count = 0;
  let index = 0;
  while (true) {
    index = sentence.indexOf(word, index);
    if (index !== -1) {
      count++;
      index += word.length;
    } else {
      break;
    }
  }
  return count;
}

//if scope quran

function countOccurences (word){
  return new Promise((resolve, reject) => {

    const query = "SELECT COUNT(*) AS count FROM ayahs WHERE text LIKE '%${word}%'";

    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0].count);
      }
    });
  });
}

