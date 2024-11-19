const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const body = document.body;

openModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  body.classList.remove("overflow-hidden");
});
