const { it, expect } = require("@jest/globals");

it("Should test button Start Again", () => {
  const buttonStartAgain = undefined;

  const functionWithButtonStartAgain = () =>
    buttonStartAgain?.addEventListener("click", () => {
      window.location.href = "./index.html";
    });

  expect(functionWithButtonStartAgain).not.toThrow();
});

it("Should test button Start", () => {
  const formLevel = undefined;

  const functionWithButtonStart = () =>
    formLevel?.addEventListener("click", () => {
      if (localStorage.getItem("level")) {
        window.location.href = "2.html";
      } else {
        buttonLevel.forEach((element) => {
          element.classList.add("error");
        });
      }
    });

  expect(functionWithButtonStart).not.toThrow();
});
