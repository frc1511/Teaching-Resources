const mainElement = document.querySelector("main");
if (location.search.includes("ctc")) {
    let index = -1;
    for (const child of mainElement.children) {
        child.classList.add("hide", "ctc");
    }
    
    document.addEventListener("keydown", (e) => {
        e.preventDefault();
        if (e.key == "ArrowRight") {
            if (mainElement.children.length <= index) index = mainElement.children.length;
            else index++;
        }
        if (e.key == "ArrowLeft") {
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
    })
}