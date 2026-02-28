document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("makeAccountForm");
    const errorMessage = document.getElementById("errorMessage");
  
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const city = document.getElementById("city").value;
      const password = document.getElementById("password").value;
  
      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, city, password })
        });
  
        if (!response.ok) {
          throw new Error("Failed to create account");
        }
  
        alert("Account created successfully!");
        window.location.href = "login.html";
  
      } catch (error) {
        errorMessage.textContent = error.message;
      }
    });
  
  });