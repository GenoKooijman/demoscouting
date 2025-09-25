// js/footer.js
document.addEventListener("DOMContentLoaded", function () {
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
