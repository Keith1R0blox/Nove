let csstype = localStorage.getItem('style');

let csss = document.getElementById("csss")

window.addEventListener("DOMContentLoaded", () => {
    let csss = document.getElementById("csss")
    if (csstype && csss) {
        csss.setAttribute("href", "../../" + csstype)
    }
})