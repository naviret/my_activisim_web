const cursor = document.querySelector('.circ-cursor');
const links = document.querySelectorAll('.nav-header a')

const moveCursor = (event) => {
    const leftPos = event.pageX - 21.5;
    const topPos = event.pageY - 21.5;

    cursor.style.left = leftPos + "px";
    cursor.style.top = topPos + "px";

}


// on mouse enter, add large cursor
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("circ-cursor-large")
    })
})

// on mouse leave, remove large cursor
links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("circ-cursor-large")
    })
})


document.addEventListener("mousemove", moveCursor);