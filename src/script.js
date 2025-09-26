document.getElementById('clickMe').addEventListener('click', () => {
  alert('Button was clicked!');
});

const toggleSwitch = document.getElementById("theme-toggle");
const body = document.body;

// 1. Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
  toggleSwitch.checked = true;
}

// 2. Listen for toggle changes
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});