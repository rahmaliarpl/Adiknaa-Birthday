document.addEventListener("DOMContentLoaded", () => {
    const screenIntro = document.getElementById("screen-intro");
    const screenBanner = document.getElementById("screen-banner");
    const screenMain = document.getElementById("screen-main");
    const arrow = document.getElementById("arrow");

    // 1. Logika Interaksi Panah (Drag / Click untuk melepas panah)
    let isDragging = false;
    let startY = 0;

    const launchArrow = () => {
        arrow.style.transform = "translateY(-300px)";
        arrow.style.transition = "transform 0.4s ease-in";

        setTimeout(() => {
            // Pindah ke Layar Merah (Banner)
            screenIntro.classList.remove("active");
            screenBanner.classList.add("active");

            // Setelah 2.5 detik di layar merah, pindah ke halaman utama
            setTimeout(() => {
                screenBanner.classList.remove("active");
                screenMain.classList.add("active");
                generateHeartTree(); // Jalankan animasi pohon
            }, 2500);

        }, 400);
    };

    // Support Klik / Tap Langsung
    screenIntro.addEventListener("click", launchArrow);

    // 2. Generate Animasi Pohon Hati (Blooming Tree)
    function generateHeartTree() {
        const leavesContainer = document.getElementById("tree-leaves");
        const heartColors = ["💖", "💗", "💓", "💕", "🌸"];
        const totalLeaves = 40;

        for (let i = 0; i < totalLeaves; i++) {
            const leaf = document.createElement("span");
            leaf.classList.add("heart-leaf");
            leaf.innerText = heartColors[Math.floor(Math.random() * heartColors.length)];

            // Posisi acak berbentuk mahkota pohon
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 70;
            const x = Math.cos(angle) * distance + 115;
            const y = Math.sin(angle) * (distance * 0.7) + 60;

            leaf.style.left = `${x}px`;
            leaf.style.top = `${y}px`;

            leavesContainer.appendChild(leaf);

            // Efek mekar bertahap
            setTimeout(() => {
                leaf.classList.add("show");
            }, i * 50);
        }
    }

    // 3. Modal Popup Hadiah
    const btnGift = document.getElementById("btn-gift");
    const giftModal = document.getElementById("gift-modal");
    const btnCloseModal = document.getElementById("btn-close-modal");

    btnGift.addEventListener("click", () => {
        giftModal.style.display = "flex";
    });

    btnCloseModal.addEventListener("click", () => {
        giftModal.style.display = "none";
    });
});
