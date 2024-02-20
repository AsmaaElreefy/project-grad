const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"ttt")));

app.get("/quran" , (req , res) => {
    
    res.sendFile(path.join(__dirname , "ttt" ,"index.html"));
});


app.get("/quran" , async (req , res ) => {
  const inputText = req.query.text;
  const letterCount = countLetters(inputText);
  res.json({letterCount});
});



app.listen(3000 , () => {
    console.log("i am listening in port 3000")
});