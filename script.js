// Contoh script untuk interaktivitas (misalnya animasi atau pop-up)
document.querySelectorAll(".buy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Produk berhasil dipesan!");
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
