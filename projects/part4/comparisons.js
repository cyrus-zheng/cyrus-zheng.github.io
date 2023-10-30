// Get the div where the footballers' data will be displayed
var footballersList = document.getElementById("footballers-list");

// Fetch the JSON data from stats.json file
fetch('stats.json')
  .then(response => response.json())
  .then(data => {
    data.top10Footballers.forEach(function (footballer) {
      var div = document.createElement("div");
      div.innerHTML = "<h2>" + footballer.name + "</h2>" +
        "<p>Passes Attempted: " + footballer.passesAttempted + "</p>" +
        "<p>Passes Completed: " + footballer.passesCompleted + "</p>" +
        "<p>Dribbles Attempted: " + footballer.dribblesAttempted + "</p>" +
        "<p>Dribbles Completed: " + footballer.dribblesCompleted + "</p>" +
        "<p>Shots Attempted: " + footballer.shotsAttempted + "</p>" +
        "<p>Shots on Target: " + footballer.shotsOnTarget + "</p>" +
        "<p>Tackles Attempted: " + footballer.tacklesAttempted + "</p>" +
        "<p>Tackles Won: " + footballer.tacklesWon + "</p>" +
        "<p>Minutes on Ball: " + footballer.minutesOnBall + "</p>";
      footballersList.appendChild(div);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
