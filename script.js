const unlockBtn = document.getElementById("unlockBtn");
const lockedSection = document.getElementById("lockedSection");
const paidContent = document.getElementById("paidContent");

// Check if already unlocked
if (localStorage.getItem("unlocked") === "true") {
  unlockContent();
}

unlockBtn.addEventListener("click", () => {
  // TEMPORARY FAKE PAYMENT (replace later)
  // This simulates payment success
  localStorage.setItem("unlocked", "true");
  unlockContent();
});

function unlockContent() {
  lockedSection.style.display = "none";
  paidContent.classList.remove("hidden");
}
