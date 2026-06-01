const textElement = document.querySelector(".dynamic-text");
const roles = ["Software Engineer Candidate", "Web Developer", "AI/ML Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    if (isDeleting) { charIndex--; } else { charIndex++; }

    // Text update with Arc Reactor Cyan color look and glow
    textElement.innerHTML = `Aspiring <span style="color: #00f0ff; font-weight: 600; text-shadow: 0 0 8px rgba(0,240,255,0.4);">${currentRole.substring(0, charIndex)}</span><span class="cursor">|</span>`;

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400;
    }
    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    textElement.innerHTML = "";
    typeEffect();
});