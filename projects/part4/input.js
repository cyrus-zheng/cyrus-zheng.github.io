// Personal
function submitForm(inputType) {
    var inputValue = document.getElementById(inputType + 'Input').value;

    if (inputValue.trim() === '') {
        alert('Invalid input.');
        return;
    }

    var outputDiv = document.getElementById(inputType + 'Output');
    outputDiv.textContent = `${inputType.charAt(0).toUpperCase() + inputType.slice(1)}: ${inputValue}`;
}

function displayPicture() {
    var input = document.getElementById('profilePictureInput');
    var img = document.getElementById('profilePicture');
    var file = input.files[0];

    if (file) {
        var reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function(event) {
            img.src = event.target.result;
        };
    } else {
        alert('Please select a valid image file.');
    }
}


// Passing

function calculatePassingAccuracy() {
    
    var passesAttempted = parseInt(document.getElementById("passesAttemptedInput").value);
    var passesCompleted = parseInt(document.getElementById("passesCompletedInput").value);

    if (isNaN(passesAttempted) || isNaN(passesCompleted)) {
        document.getElementById("passingAccuracyResult").textContent = "Invalid input. Please enter valid numbers.";
        return;
    }
    var accuracy = (passesCompleted / passesAttempted) * 100;

    document.getElementById("passingAccuracyResult").textContent = "Passing Accuracy: " + accuracy.toFixed(2) + "%";
}

// Dribbling
function calculateDribblingAccuracy() {

    var dribblesAttempted = parseInt(document.getElementById("dribblesAttemptedInput").value);
    var dribblesCompleted = parseInt(document.getElementById("dribblesCompletedInput").value);

    if (isNaN(dribblesAttempted) || isNaN(dribblesCompleted)) {
        document.getElementById("dribblingAccuracyResult").textContent = "Invalid input. Please enter valid numbers.";
        return;
    }

    var accuracy = (dribblesCompleted / dribblesAttempted) * 100;

    document.getElementById("dribblingAccuracyResult").textContent = "Dribbling Accuracy: " + accuracy.toFixed(2) + "%";
}

// Finishing
function calculateFinishingAccuracy() {

    var shotsAttempted = parseInt(document.getElementById("shotsAttemptedInput").value);
    var shotsOnTarget = parseInt(document.getElementById("shotsOnTargetInput").value);

    if (isNaN(shotsAttempted) || isNaN(shotsOnTarget)) {
        document.getElementById("finishingAccuracyResult").textContent = "Invalid input. Please enter valid numbers.";
        return;
    }

    var accuracy = (shotsOnTarget / shotsAttempted) * 100;

    document.getElementById("finishingAccuracyResult").textContent = "Finishing Accuracy: " + accuracy.toFixed(2) + "%";
}

// Defending
function calculateDefendingAccuracy() {

    var tacklesAttempted = parseInt(document.getElementById("tacklesAttemptedInput").value);
    var tacklesWon = parseInt(document.getElementById("tacklesWonInput").value);

    if (isNaN(tacklesAttempted) || isNaN(tacklesWon)) {
        document.getElementById("defendingAccuracyResult").textContent = "Invalid input. Please enter valid numbers.";
        return;
    }

    var accuracy = (tacklesWon / tacklesAttempted) * 100;

    document.getElementById("defendingAccuracyResult").textContent = "Defending Accuracy: " + accuracy.toFixed(2) + "%";
}

// Possession
function calculatePossessionPercentage() {
    var minutesOnBall = parseInt(document.getElementById("minutesOnBallInput").value);

    if (isNaN(minutesOnBall)) {
        document.getElementById("possessionPercentageResult").textContent = "Invalid input. Please enter a valid number.";
        return;
    }

    var totalMinutesInGame = 90; 
    var possessionPercentage = (minutesOnBall / totalMinutesInGame) * 100;

    document.getElementById("possessionPercentageResult").textContent = "Possession Percentage: " + possessionPercentage.toFixed(2) + "%";
}

// Mental
function submitFeelings() {
    // Get input value
    var feelings = document.getElementById("feeling").value;

    // Check if the input value is empty
    if (feelings.trim() === "") {
        document.getElementById("feelingResult").textContent = "Please enter your feelings after the match.";
        return;
    }

    // Display the submitted feelings
    document.getElementById("feelingResult").textContent = "Feelings after the match: " + feelings;
}