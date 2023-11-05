document.addEventListener("DOMContentLoaded", () => {
    async function fetchData() {
      try {
        const response = await fetch('/api/footballers'); 
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        displayData(data);
      } catch (error) {
        console.error(error);
      }
    }
  
    function displayData(data) {
      const container = document.querySelector('.container');
  
      data.forEach((footballer, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        const picture = document.createElement('img');
        picture.src = footballer.profilePicture;
        picture.alt = `${footballer.name} Picture`;
        picture.classList.add('profile-picture');
  
        const name = document.createElement('h2');
        name.textContent = footballer.name;
  
        const age = document.createElement('p');
        age.textContent = `Age: ${footballer.age}`;
  
        const club = document.createElement('p');
        club.textContent = `Club: ${footballer.club}`;
  
        const position = document.createElement('p');
        position.textContent = `Position: ${footballer.position}`;
  
        const achievementsList = document.createElement('ul');
        achievementsList.classList.add('achievements');
        footballer.achievements.forEach(achievement => {
          const listItem = document.createElement('li');
          listItem.textContent = achievement;
          achievementsList.appendChild(listItem);
        });
  
        const skillsList = document.createElement('ul');
        skillsList.classList.add('skills');
        footballer.skills.forEach(skill => {
          const listItem = document.createElement('li');
          listItem.textContent = skill;
          skillsList.appendChild(listItem);
        });
  
        card.appendChild(picture);
        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(club);
        card.appendChild(position);
        card.appendChild(achievementsList);
        card.appendChild(skillsList);
  
        container.appendChild(card);
      });
    }
  
    fetchData();
});
  