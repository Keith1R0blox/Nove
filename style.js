let csstype = localStorage.getItem('style');

let csss = document.getElementById("csss")

window.addEventListener("DOMContentLoaded", () => {
    let csss = document.getElementById("csss")
    if (!csss || !csstype) return;
        if (csstype.startsWith("http")) {
            csss.href = csstype;
        } else {
            csss.href = "../../" + csstype
        }
})

    ///user theme apply
    async function CSSuserapply(url) {
        const responce = await fetch(url)
        const cssText = await responce.text();
        let styletag = document.getElementById("remote-theme")
        if(!styletag) {
            styletag = document.createElement("style")
            styletag.id = "remote-theme"
            document.head.appendChild(styletag)
        }
        styletag.textContent = cssText
    }

        const savedStyle = localStorage.getItem("style");
        if (savedStyle && savedStyle.startsWith("http")) {
            CSSuserapply(savedStyle)
        }