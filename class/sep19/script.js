const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("nav-items")
}

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
}