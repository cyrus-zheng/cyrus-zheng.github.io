const menuToggle = document.getElementById("menu");
const nav = document.querySelector("nav ul");

menuToggle.onclick = function () {
    menuToggle.classList.toggle("active-page");
    nav.classList.toggle("active-page");
};

nav.onclick = function (event) {
    if (event.target.tagName === "LI") {
        menuToggle.classList.remove("active-page");
        nav.classList.remove("active-page");
    }
};

const exercise1Content = document.getElementById("exercise1-content");
const exercise2Content = document.getElementById("exercise2-content");
const exercise1Button = document.getElementById("exercise1");
const exercise2Button = document.getElementById("exercise2");


exercise1Button.classList.add("active-page");
exercise2Content.style.display = "none";


// Exercise 1
exercise1Button.onclick = function () {
    exercise1Content.style.display = "block";
    exercise2Content.style.display = "none";
    exercise1Button.classList.add("active-page");
    exercise2Button.classList.remove("active-page");
    fundRaising.style.display = "none";
};

const determineOldestButton = document.getElementById("determineOldest");
determineOldestButton.onclick = function () {
    const name1 = document.getElementById("name1").value;
    const age1 = parseFloat(document.getElementById("age1").value);
    const name2 = document.getElementById("name2").value;
    const age2 = parseFloat(document.getElementById("age2").value);
    const name3 = document.getElementById("name3").value;
    const age3 = parseFloat(document.getElementById("age3").value);

    if (!name1 || isNaN(age1) || !name2 || isNaN(age2) || !name3 || isNaN(age3)) {
        result1.textContent = "Invalid Information, please re-enter with new information.";
    } else {
        const people = [
            { name: name1, age: age1 },
            { name: name2, age: age2 },
            { name: name3, age: age3 }
        ];

        people.sort((a, b) => b.age - a.age);

        const sortedNames = people.map(person => person.name).join(", ");
        result1.textContent = `The following order is from oldest to youngest: ${sortedNames}`;
    }
};

// Exercise 2
exercise2Button.onclick = function () {
    exercise1Content.style.display = "none";
    exercise2Content.style.display = "block";
    exercise1Button.classList.remove("active-page");
    exercise2Button.classList.add("active-page");
    fundRaising.style.display = "block";
};

const updateMeterButton = document.getElementById("updateMeter");
updateMeterButton.onclick = function () {
    const donationAmount = parseFloat(donationAmountInput.value);
    if (!isNaN(donationAmount)) {
        const goal = 10000;
        const percentage = Math.min(100, (donationAmount / goal) * 100);
        progress.style.width = percentage + "%";
    }
};

const donationAmountInput = document.getElementById("donationAmount");
const fundRaising = document.getElementById("fundRaising");
const progress = document.getElementById("progress");
const result1 = document.getElementById("result1");
