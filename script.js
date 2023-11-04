const cursor = document.querySelector('.circ-cursor');

document.addEventListener("mousemove", (event) => {
    
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

})

