const express = require('express');
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/footballers', (req, res) => {

    const footballers = [
        {
          name: "Lionel Messi",
          age: 34,
          club: "Paris Saint-Germain",
          position: "Forward",
          achievements: ["7-time Ballon d'Or winner", "4-time Champions League winner"],
          skills: ["Dribbling", "Passing", "Free Kicks"],
          profilePicture: "images/messi.png"
        },
        {
          name: "Cristiano Ronaldo",
          age: 36,
          club: "Manchester United",
          position: "Forward",
          achievements: ["5-time Ballon d'Or winner", "5-time Champions League winner"],
          skills: ["Speed", "Heading", "Finishing"],
          profilePicture: "images/ronaldo.png"
        },
        {
          name: "Neymar Jr.",
          age: 29,
          club: "Paris Saint-Germain",
          position: "Forward",
          achievements: ["1-time Champions League winner", "Copa Libertadores winner"],
          skills: ["Flair", "Ball control", "Assists"],
          profilePicture: "images/neymar.png"
        },
        {
          name: "Kevin De Bruyne",
          age: 30,
          club: "Manchester City",
          position: "Midfielder",
          achievements: ["Premier League winner", "FA Cup winner"],
          skills: ["Passing", "Vision", "Long shots"],
          profilePicture: "images/kdb.png"
        },
        {
          name: "Robert Lewandowski",
          age: 33,
          club: "Bayern Munich",
          position: "Forward",
          achievements: ["Bundesliga top scorer", "Champions League winner"],
          skills: ["Finishing", "Strength", "Heading"],
          profilePicture: "images/lewandowski.png"
        }
      ];
  res.json(footballers);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
