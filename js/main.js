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

// JavaScript for handling modal data
document.querySelectorAll(".image-gallery img").forEach((img) => {
  img.addEventListener("click", function () {
    const modalImage = document.getElementById("modalImage");
    const modalDescription = document.getElementById("imageDescription");
    modalImage.src = this.src;
    modalImage.alt = this.alt;
    modalDescription.textContent = this.getAttribute("data-description");
  });
});
// Add fade-in effect for images
document.querySelectorAll(".tab-pane").forEach((tab) => {
  // When a tab is shown
  tab.addEventListener("shown.bs.tab", () => {
    const images = tab.querySelectorAll("img");
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("show");
      }, index * 300); // Adjust the delay (300ms) for smoother animation
    });
  });

  // When a tab is hidden
  tab.addEventListener("hidden.bs.tab", () => {
    const images = tab.querySelectorAll("img");
    images.forEach((img) => {
      img.classList.remove("show");
    });
  });
});
