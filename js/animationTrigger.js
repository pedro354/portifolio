

const glitchBtn = document.getElementById("glitchBtn");
const finalText = "Saiba mais";
const chars = "!@#$%^&*()_+{}[]|?><";

glitchBtn.addEventListener("click", () => {
  let iterations = 0;

  const interval = setInterval(() => {
    glitchBtn.innerText = finalText
      .split("")
      .map((letter, index) => {
        if (index < iterations) return letter;
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    iterations += 1 / 2;

    if (iterations >= finalText.length) {
      clearInterval(interval);
      glitchBtn.innerText = finalText;
    }
          setTimeout(() => {
        document.querySelector("#sobre").scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 400);
  }, 30);
});