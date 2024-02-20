const quran = require("mysql");
const connection=require("/mysqlDB");

function getVerseText(surahName, verseNumber) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT text FROM ayahs WHERE name_arab = ? AND number_in_surah = ?';
    connection.query(query, [surahName, verseNumber], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results[0].text);
      
        } else {
          reject("Verse not found");
        }
      }
    });
  });
}

function getSurahText(surahName){

  return new Promise((resolve, reject) => {
        const query = 'SELECT text FROM ayahs WHERE name_arab = ?';
        connection.query(query, [surahName], (error, results) => {
          if (error) {
            reject(error);
          } else {
            if (results.length > 0) {
              resolve(results[0].text);
          
            } else {
              reject("Verse not found");
            }
          }
        });
      });
    }

