//Running Man

const runningMan = () => {
    const img = document.getElementById("man");
    let count = 0;
    
    const interval = setInterval(() => {    
        img.src="images/manwalking.png";
        count++;
        img.style.setProperty("--goLeft", + count + "px");
        if(count%2 == 0){
            img.src="images/manrunning.png";
        }
        if(count == 400){
            clearInterval(interval);
        }
    }, 10);
};

//Fund-Raising Meter

const displayMeter = () => {
    const donations = parseInt(document.getElementById("funds").value);
    const root = document.querySelector(":root");
    const invalid = document.getElementById("invalid");
    invalid.classList.add("hidden");
    if(donations < 0 && donations > 10000){
        invalid.classList.remove("hidden");
        invalid.innerHTML = "* Not a valid number";
    }
    let count = 0;
    const interval = setInterval(() => {
        
        if(donations/10000*100 <= count){
            clearInterval(interval);
        } else {
            count++;
            root.style.setProperty("--percentage", + count + "%");
        }
    }, 10);
}

window.onload = () => {
    document.getElementById("donation-button").onclick = displayMeter;
    document.getElementById("man").onclick = runningMan;
}