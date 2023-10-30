document.addEventListener("DOMContentLoaded", () => {
  const footballersContainer = document.getElementById("footballers-container");

  async function fetchData() {
      try {
          const response = await fetch("https://cyrus-zheng.github.io/projects/part4/stats.json"); // Update the URL to point to your stats.json file
          const data = await response.json();

          data.top10Footballers.forEach((footballer) => {
              const footballerCard = document.createElement("div");
              footballerCard.classList.add("footballer-card");

              const nameElement = document.createElement("h2");
              nameElement.textContent = footballer.name;

              const statsList = document.createElement("ul");
              statsList.innerHTML = `<li><strong>Passes Attempted:</strong> ${footballer.passesAttempted}</li>
                                    <li><strong>Passes Completed:</strong> ${footballer.passesCompleted}</li>
                                    <li><strong>Dribbles Attempted:</strong> ${footballer.dribblesAttempted}</li>
                                    <li><strong>Dribbles Completed:</strong> ${footballer.dribblesCompleted}</li>
                                    <li><strong>Shots Attempted:</strong> ${footballer.shotsAttempted}</li>
                                    <li><strong>Shots on Target:</strong> ${footballer.shotsOnTarget}</li>
                                    <li><strong>Tackles Attempted:</strong> ${footballer.tacklesAttempted}</li>
                                    <li><strong>Tackles Won:</strong> ${footballer.tacklesWon}</li>
                                    <li><strong>Minutes on Ball:</strong> ${footballer.minutesOnBall}</li>`;

              footballerCard.appendChild(nameElement);
              footballerCard.appendChild(statsList);
              footballersContainer.appendChild(footballerCard);
          });
      } catch (error) {
          console.error("Error fetching data: ", error);
      }
  }

  fetchData();
});
