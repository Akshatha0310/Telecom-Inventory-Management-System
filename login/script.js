// Simulated user data for roles
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "manager", password: "manager123", role: "manager" },
  { username: "staff", password: "staff123", role: "staff" }
];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  // Find matching user
  const user = users.find(
    (u) => u.username === username && u.password === password && u.role === role
  );

  const messageElement = document.getElementById("message");

  if (user) {
    // Successful login
    messageElement.style.color = "green";
    messageElement.textContent = `Welcome, ${user.role}! Redirecting...`;

    // Redirect based on role (Simulated here with an alert)
    setTimeout(() => {
      if (role === "admin") {
        window.location.href = "admin.html";
      } else if (role === "manager") {
        window.location.href = "manager.html";
      } else if (role === "staff") {
        window.location.href = "staff.html";
      }
    }, 1500);
  } else {
    // Failed login
    messageElement.style.color = "red";
    messageElement.textContent = "Invalid username, password, or role.";
  }
});
