// ==========================
// Dark/Light Mode Toggle
// ==========================
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ==========================
// Counter Feature
// ==========================
let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// ==========================
// Collapsible FAQ Section
// ==========================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ==========================
// Tabbed Interface Functionality
// ==========================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");

    // Hide all tab contents
    tabContents.forEach((content) => (content.style.display = "none"));

    // Remove active class from all buttons
    tabButtons.forEach((b) => b.classList.remove("active"));

    // Show target tab content
    document.getElementById(target).style.display = "block";
    btn.classList.add("active");
  });
});

// ==========================
// Form Validation
// ==========================
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Clear previous messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("successMsg").textContent = "";

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let valid = true;

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Validate Email using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Invalid email address.";
    valid = false;
  }

  // Validate Password
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  // If all valid
  if (valid) {
    document.getElementById("successMsg").textContent =
      "Form submitted successfully!";
    form.reset();
  }
});
