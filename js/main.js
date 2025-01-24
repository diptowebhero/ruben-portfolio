const menuIcon = document.getElementById("menuIcon");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobile_menu");

// Show the menu
menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Hide the menu
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Close the menu when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInside =
    mobileMenu.contains(event.target) || menuIcon.contains(event.target);

  if (!isClickInside) {
    mobileMenu.classList.remove("active");
  }
});
