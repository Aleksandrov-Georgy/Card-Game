import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  localStorage.removeItem("level");

  const formLevel = document.querySelector(".header__form__submit");
  const buttonLevel = document.querySelectorAll(
    ".button"
  ) as NodeListOf<HTMLButtonElement>;

  buttonLevel.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      localStorage.setItem("level", element.value);
    });
  });

  formLevel?.addEventListener("click", () => {
    if (localStorage.getItem("level")) {
      window.location.href = "2.html";
    } else {
      buttonLevel.forEach((element) => {
        element.classList.add("error");
      });
    }
  });
});
