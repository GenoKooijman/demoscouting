// js/footer.js
document.addEventListener("DOMContentLoaded", function () {
  // Avoid duplicate insertion if script runs multiple times
  if (document.querySelector(".scout-footer")) return;

  fetch("includes/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data);

      // Dynamisch jaar
      const jaar = document.getElementById("jaar");
      if (jaar) {
        jaar.textContent = new Date().getFullYear();
      }
    })
    .catch((err) => console.error("Kon footer niet laden:", err));
});
