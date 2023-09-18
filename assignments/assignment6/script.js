const showRonaldo = () => {
    document.getElementById("ronaldo").classList.remove("hide");
}

const hideRonaldo = () => {
    document.getElementById("ronaldo").classList.add("hide");
}

const squareDance = () => {
    document.getElementById("square").classList.add("dance");
};

const printReview = () => {
    document.getElementById("boxes").classList.add("decorator");
    
    const product = document.getElementById("product").value;
    const header = document.getElementById("add-name");

    const comment = document.getElementById("comment").value;
    const rate = document.getElementById("rate").value;
    const commentP = document.getElementById("add-comment");

    const user = document.getElementById("user").value;
    const userP = document.getElementById("add-user");

    header.innerHTML += `<section class = "separate"><strong>${product}</strong> <p class = "small">${rate} | ${comment}</p> <p class = "small">by ${user}</p></section>`;
};


window.onload = () => {
    document.getElementById("button-show").onclick = showRonaldo;
    document.getElementById("button-hide").onclick = hideRonaldo;
    document.getElementById("dance-button").onclick = squareDance;
    document.getElementById("add-button").onclick = printReview;
}