document.addEventListener("DOMContentLoaded", function () {
  //listens to the form to see if log in button is clicked and if field values are changed 
    const form = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");
  
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      /*try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        });
  
        if (!response.ok) {
          throw new Error("Invalid email or password");
        }
  
        const data = await response.json();
  
        // Store token (if using JWT)
        localStorage.setItem("token", data.token);
  
      } catch (error) {
        errorMessage.textContent = error.message;
      }*/

      //redirect to home page after logging in 
      window.location.href = "../Homepage/home.html";
    });
  
    //redirect to sign up page if Make Account Button is clicked
    makeAccountButton.addEventListener("click", function () {
      window.location.href = "makeAccount.html";
    });
  
  });

