document.querySelectorAll(".image-card").forEach((card) => {
    const img = card.querySelector("img");

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        img.style.transform = `scale(1.1) rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});
