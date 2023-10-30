document.addEventListener("DOMContentLoaded", () => {
    const footballersContainer = document.getElementById("footballers-container");

    async function fetchData() {
        try {
            const response = await fetch("https://cyrus-zheng.github.io/projects/part4/stats.json");
            const data = await response.json();

            data.topFootballers.forEach((footballer) => {
                const footballerCard = document.createElement("div");
                footballerCard.classList.add("footballer-card");

                const img = document.createElement("img");
                img.src = `https://cyrus-zheng.github.io/projects/part4/${footballer.img}`;
                img.alt = footballer.name;
                img.classList.add("footballer-img");

                const details = document.createElement("div");
                details.classList.add("footballer-details");
                details.innerHTML = `<p><strong>Name:</strong> ${footballer.name}</p>
                                     <p><strong>Passes Attempted:</strong> ${footballer.passesAttempted}</p>
                                     <p><strong>Passes Completed:</strong> ${footballer.passesCompleted}</p>
                                     <p><strong>Dribbles Attempted:</strong> ${footballer.dribblesAttempted}</p>
                                     <p><strong>Dribbles Completed:</strong> ${footballer.dribblesCompleted}</p>
                                     <p><strong>Shots Attempted:</strong> ${footballer.shotsAttempted}</p>
                                     <p><strong>Shots on Target:</strong> ${footballer.shotsOnTarget}</p>
                                     <p><strong>Tackles Attempted:</strong> ${footballer.tacklesAttempted}</p>
                                     <p><strong>Tackles Won:</strong> ${footballer.tacklesWon}</p>
                                     <p><strong>Minutes on Ball:</strong> ${footballer.minutesOnBall}</p>`;

                footballerCard.appendChild(img);
                footballerCard.appendChild(details);
                footballersContainer.appendChild(footballerCard);
            });
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    fetchData();
});
