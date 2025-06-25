const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".bo-btn")

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Ackkkkkkkkk, I love you too love!";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.syle.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
