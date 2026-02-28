document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("makeAccountForm");
    const errorMessage = document.getElementById("errorMessage");
  
    const userType = document.getElementById("userType");
    const govFields = document.getElementById("governmentFields");
    const citizenFields = document.getElementById("citizenFields");
    const citySelect = document.getElementById("citySelect");
  
    // Show / hide form fields depending on type of user
    userType.addEventListener("change", async function () {
  
      if (this.value === "government") {
        govFields.style.display = "block";
        citizenFields.style.display = "none";
      }
  
      else if (this.value === "citizen") {
        govFields.style.display = "none";
        citizenFields.style.display = "block";
      }
    });
  
    // Submit form
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      let city;
  
      if (userType.value === "government") {
        city = document.getElementById("cityInput").value;
      } else {
        city = document.getElementById("citySelect").value;
      }
  

      let state;
  
      if (userType.value === "government") {
        city = document.getElementById("stateInput").value;
      } else {
        city = document.getElementById("stateSelect").value;
      }
      alert("Account created successfully!");

      window.location.href = "loginPage.html";
    });
  
  });