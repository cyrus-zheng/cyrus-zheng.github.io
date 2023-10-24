function calculatePassingAccuracy() {
    // Get input values
    var passesAttempted = parseInt(document.getElementById("passesAttemptedInput").value);
    var passesCompleted = parseInt(document.getElementById("passesCompletedInput").value);

    // Check if the input values are valid numbers
    if (isNaN(passesAttempted) || isNaN(passesCompleted)) {
        document.getElementById("passingAccuracyResult").textContent = "Invalid input. Please enter valid numbers.";
        return;
    }

    // Calculate passing accuracy
    var accuracy = (passesCompleted / passesAttempted) * 100;

    // Display the result
    document.getElementById("passingAccuracyResult").textContent = "Passing Accuracy: " + accuracy.toFixed(2) + "%";
}
