// Handle Beli Sekarang button clicks
document.addEventListener("DOMContentLoaded", function () {
  // Get all Beli Sekarang buttons
  const buyButtons = document.querySelectorAll(".buy-btn");
  const popupModal = document.getElementById("popupModal");
  const closeBtn = document.querySelector(".popup-close-btn");

  // Add click event to each button
  buyButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior

      // Get the WhatsApp URL from the parent link
      const whatsappUrl = this.parentElement.getAttribute("href");

      // Show the popup
      popupModal.style.display = "flex";

      // After 3 seconds, redirect to WhatsApp
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 3000);
    });
  });

  // Close button functionality
  closeBtn.addEventListener("click", function () {
    popupModal.style.display = "none";
  });

  // Close modal when clicking outside
  popupModal.addEventListener("click", function (e) {
    if (e.target === popupModal) {
      popupModal.style.display = "none";
    }
  });
});
const src = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

src.reveal(".hero h1", { delay: 200, origin: "top" });
src.reveal(".hero p", { delay: 200, origin: "top" });
src.reveal(".product-section", { delay: 300, origin: "left" });
src.reveal(".cta-btn", { delay: 200, origin: "top" });
src.reveal(".contact-section", { delay: 200, origin: "top" });
src.reveal(".logo", { delay: 200, origin: "left" });
src.reveal("nav ul li", { delay: 200, origin: "top" });
