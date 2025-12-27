/* DARK MODE */
const darkToggle = document.getElementById("darkToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkToggle.textContent = "Light Mode";
}

darkToggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
  darkToggle.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
};

/* FULL VIEW */
const imageModal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".fullview-btn").forEach(btn => {
  btn.onclick = () => {
    imageModal.style.display = "flex";
    modalImg.src = btn.dataset.img;
  };
});

closeModal.onclick = () => imageModal.style.display = "none";
imageModal.onclick = e => {
  if (e.target === imageModal) imageModal.style.display = "none";
};

/* COUNTDOWN */
const deadline = new Date("2026-01-04 00:00:00").getTime();
const cd = document.getElementById("countdown");

setInterval(() => {
  const diff = deadline - new Date().getTime();
  if (diff <= 0) {
    cd.textContent = "⛔ Deadline Tugas Telah Berakhir";
    return;
  }
  cd.textContent =
    `⏳ Deadline: ${Math.floor(diff / 86400000)} hari ` +
    `${Math.floor(diff / 3600000) % 24} jam ` +
    `${Math.floor(diff / 60000) % 60} menit ` +
    `${Math.floor(diff / 1000) % 60} detik`;
}, 1000);

/* PROTEKSI */
document.addEventListener("contextmenu", e => e.preventDefault());
document.querySelectorAll("img").forEach(img => img.setAttribute("draggable","false"));
