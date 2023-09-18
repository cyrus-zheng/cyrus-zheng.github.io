const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "hi, to you, cyrus";
    helloP.classList.add("special");
}

const showRonaldo() => {
    document.getElementById("ronaldo").classList.remove("hide");
}

const hideRonaldo() => {
    document.getElementById("ronaldo").classList.add("hide");
}

window.onload = () => {
    //get button, tie function to click
    document.getElementById("button-click").onclick = changeText;
    document.getElementById("button-show").onclick = showRonaldo;
    document.getElementById("button-hide").onclick = hideRonaldo;
}