const textElement = document.querySelector(".dynamic-text");
const roles = ["Virtual AI Model Developer", "Web Developer", "Computer Vision Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) { charIndex--; } else { charIndex++; }

    // Text display processing logic with high clarity tech typing style
    textElement.innerHTML = `Aspiring <span style="color: #ffffff; font-weight: 700; text-shadow: 0 0 5px rgba(255,255,255,0.3);">${currentRole.substring(0, charIndex)}</span><span class="cursor">|</span>`;

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Delay when word is fully typed
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400; // Pause before typing next core skill role
    }
    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (textElement) {
        textElement.innerHTML = "";
        typeEffect();
    }
});
