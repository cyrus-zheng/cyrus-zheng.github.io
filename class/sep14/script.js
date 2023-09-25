// const add = (a, b) => a+b;

//const add =(a, b) => { return a + b; }
//console.log(add(5,6));

//const square = a => a*a;

//const quare = (a) => a * a;
//console.log(square(5));

//const helloSpecific = userName => console.log("Hello " + userName + "!");
//helloSpecific("Cyrus");

/*const helloFullName = (firstName, lastName) => {
    console.log("Hello "+ firstName + " " + lastName);
    console.log("You are awesome!");
};
*/

//helloFullName("Cyrus", "Zheng");

/* Not ok to change a constant 
const myName = "Cyrus";
myName = "Sally" */

//const myFunct = () => console.log("Hey you!");

const moveSquare = () => {
    //document.getElementById("square").classList("move-square");

    const square = document.getElementById("square");
    const button = document.getElementById("button-move");

    if (square.classList.contains("move-square"))
        square.classList.remove("move-square");
        button.innerHTML = "Start"
        
    else {
        square.classList.add("move-squre");
        button.innerHTML = "Stop"

    }
}

const displayName = () => {
    const firstName = document.getElementById("txt-first-name").value;
    console.log("Hello " + firstName + "!");
}

window.onload = () => {
    document.getElementById("button-move").onclick = moveSquare;
    document.getElementById("button-show-name").onclick = displayName;
}