document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector(".wrapper");
  const question = document.querySelector(".question");
  const gif = document.querySelector(".gif");
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");

  if (!wrapper || !question || !gif || !yesBtn || !noBtn) {
    console.error("Salah satu elemen HTML tidak ditemukan!");
    return; // Keluar jika elemen tidak ditemukan
  }

  yesBtn.addEventListener("click", () => {
    question.textContent = "aaaaa, aku juga sayang kamu"; // Gunakan textContent
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";
  });


  noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
});

