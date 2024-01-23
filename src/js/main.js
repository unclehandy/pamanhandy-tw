import confetti from "canvas-confetti";

const confettiBtn = document.getElementById("confettiBtn");
const myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -10;

document.body.append(myCanvas);

confettiBtn.addEventListener("click", () => {
    const myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true,
    });
    myConfetti({
        particleCount: 100,
        spread: 160,
    });
})