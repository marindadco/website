document.addEventListener("DOMContentLoaded", () => {
    const activities = document.querySelector(".activities");
    const wrapper = document.querySelector(".activities-wrapper");

    let speed = 0.75;
    let items = [...activities.children];

    // Duplicate items to create seamless effect
    items.forEach((item) => {
        const clone = item.cloneNode(true);
        activities.appendChild(clone);
    });

    let position = 0;

    function scroll() {
        position -= speed;
        activities.style.transform = `translateX(${position}px)`;

        // Reset position when first set of items has fully scrolled out
        if (Math.abs(position) >= activities.scrollWidth / 2) {
            position = 0;
        }

        requestAnimationFrame(scroll);
    }

    // Delay scrolling start by 3 seconds (adjustable)
    setTimeout(() => {
        requestAnimationFrame(scroll);
    }, 1000);
});