const tap = document.getElementById("tap");
const modal = document.getElementById("modal");
const unlockBtn = document.getElementById("unlockBtn");
const card = document.getElementById("card");
const paid = document.getElementById("paid");

// Tap interaction
tap.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Fake payment (replace later)
unlockBtn.addEventListener("click", () => {
  localStorage.setItem("zen_paid", "true");
  showPaid();
});

// Auto-unlock if already paid
if (localStorage.getItem("zen_paid") === "true") {
  showPaid();
}

function showPaid() {
  modal.classList.add("hidden");
  card.classList.add("hidden");
  paid.classList.remove("hidden");
}
