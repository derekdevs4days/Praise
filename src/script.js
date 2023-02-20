const BTN_FORM = document.querySelector(".head-btn");
const FORM = document.querySelector(".main-form");
const POST_LIST = document.querySelector(".post-list");

POST_LIST.innerHTML = "";

const showForm = () => {
  if (FORM.classList.contains("hidden")) {
    FORM.classList.remove("hidden");
    BTN_FORM.textContent = "Close";
  } else {
    FORM.classList.add("hidden");
    BTN_FORM.textContent = "Share";
  }
};

BTN_FORM.addEventListener("click", showForm);
