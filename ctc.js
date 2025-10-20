
const mainElement = document.querySelector("main");
let index = -1;

function doMove(isNext) {
    if (isNext) {
        if (mainElement.children.length <= index) index = mainElement.children.length;
        else index++;
    } else {
        if (index <= -1) index = -1;
        else index--;
    }
    let i = 0;
    for (const child of mainElement.children) {
        if (i <= index) {
            child.classList.remove("hide");
        } else {
            child.classList.add("hide")
        }
        if (i == index) {
            child.scrollIntoView({
                behavior: 'smooth', // 'auto', 'smooth', or 'instant'
                block: 'center',     // 'start', 'center', 'end', or 'nearest'
                inline: 'center'   // 'start', 'center', 'end', or 'nearest'
            })
        }
        i++;
    }
}

if (location.search.includes("ctc")) {
    for (const child of mainElement.children) {
        child.classList.add("hide", "ctc");
    }
    
    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        if (e.key == "ArrowRight") {
            doMove(true)
        }
        if (e.key == "ArrowLeft") {
            doMove(false)
        }
    })

    document.addEventListener("mousedown", (e) => {
        doMove(true)
    })
}