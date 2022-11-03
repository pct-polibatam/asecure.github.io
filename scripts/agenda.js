const buttons = document.querySelector(".agenda-buttons").children;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    buttons[i].classList.add("agenda-btn-pressed");
    for (let j = 0; j < buttons.length; j++) {
      if (
        j == i &&
        document.querySelector(`.day${i}`).classList.contains("agenda-hidden")
      ) {
        document.querySelector(`.day${i}`).classList.remove("agenda-hidden");
      } else if (
        j != i &&
        !document.querySelector(`.day${j}`).classList.contains("agenda-hidden")
      ) {
        document.querySelector(`.day${j}`).classList.add("agenda-hidden");
        buttons[j].classList.remove("agenda-btn-pressed");
      }
    }
  });
}
