document.getElementById('clickMe').addEventListener('click', () => {
  alert('Button was clicked!');
});

const toggleSwitch = document.getElementById("theme-toggle");
const body = document.body;

toggleSwitch.addEventListener("change", () => {
  body.classList.toggle("dark-mode", toggleSwitch.checked);
});