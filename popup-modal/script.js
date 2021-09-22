"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const openBtn = document.querySelectorAll(".show-modal");

//Event Listeners
openBtn.forEach((btn) => {
  btn.addEventListener("click", toggleModal);
});
closeBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    toggleModal();
  }
});

//Functions
function toggleModal() {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
}
