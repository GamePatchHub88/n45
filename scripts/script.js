const toggle = document.querySelector(".nav__toggle");
const openIcon = document.querySelector(".nav__icon-open");
const closeIcon = document.querySelector(".nav__icon-close");
const links = document.querySelectorAll(".nav__list a");

function openMenu() {
  toggle.setAttribute("aria-expanded", "true");
  openIcon.hidden = true;
  closeIcon.hidden = false;
}

function closeMenu() {
  toggle.setAttribute("aria-expanded", "false");
  openIcon.hidden = false;
  closeIcon.hidden = true;
}

toggle.addEventListener("click", () => {
  let isOpen = toggle.getAttribute("aria-expanded") == "true";
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});
