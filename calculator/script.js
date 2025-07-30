const display = document.getElementById("display");
const buttons = document.querySelectorAll(".circle-btn, .equal-btn");
let input = "";
let freshStart = true;

function resetCalculator() {
  input = "";
  display.textContent = "Let’s calculate something fun!";
  freshStart = true;
}

resetCalculator();

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (!value) {
      if (button.id === "clear") {
        resetCalculator();
      } else if (button.id === "equals") {
        try {
          if (input.trim() === "") {
            display.textContent = "Nothing here yet!";
            return;
          }
          const result = eval(input);
          input = result.toString();
          display.textContent = input;
          freshStart = false;
        } catch {
          display.textContent = "Try a valid equation!";
          input = "";
          freshStart = true;
        }
      }
      return;
    }

    if (freshStart) {
      input = "";
      freshStart = false;
    }
    input += value;
    display.textContent = input;
  });
});