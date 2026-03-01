document.addEventListener("DOMContentLoaded", function () {

    // Get elements AFTER page loads
    const form = document.getElementById("makeAccountForm");
    const userType = document.getElementById("userType");
    const govFields = document.getElementById("governmentFields");
    const citizenFields = document.getElementById("citizenFields");
    const citySelect = document.getElementById("citySelect");
    const stateSelect = document.getElementById("stateSelect");

    /*
    -----------------------------------------
    LOCATION STORAGE HELPERS
    -----------------------------------------
    */

    function getLocations() {
        return JSON.parse(localStorage.getItem("locations")) || [];
    }

    function saveLocations(locations) {
        localStorage.setItem("locations", JSON.stringify(locations));
    }

    function loadCityOptions() {

        const locations = getLocations();

        citySelect.innerHTML = "";
        stateSelect.innerHTML = "";

        // 👇 Add placeholder option for city
        const cityPlaceholder = document.createElement("option");
        cityPlaceholder.textContent = "Select a City";
        cityPlaceholder.value = "";
        cityPlaceholder.disabled = true;
        cityPlaceholder.selected = true;
        citySelect.appendChild(cityPlaceholder);

        // 👇 Add placeholder option for state
        const statePlaceholder = document.createElement("option");
        statePlaceholder.textContent = "Select a State";
        statePlaceholder.value = "";
        statePlaceholder.disabled = true;
        statePlaceholder.selected = true;
        stateSelect.appendChild(statePlaceholder);

        locations.forEach(location => {

            const cityOption = document.createElement("option");
            cityOption.value = location.city;
            cityOption.textContent = location.city;

            const stateOption = document.createElement("option");
            stateOption.value = location.state;
            stateOption.textContent = location.state;

            citySelect.appendChild(cityOption);
            stateSelect.appendChild(stateOption);
        });
    }

    /*
    -----------------------------------------
    SHOW / HIDE FIELDS
    -----------------------------------------
    */

    userType.addEventListener("change", function () {

        localStorage.setItem("account-type", this.value);

        if (this.value === "government") {
            govFields.style.display = "block";
            citizenFields.style.display = "none";
        }

        else if (this.value === "citizen") {
            govFields.style.display = "none";
            citizenFields.style.display = "block";
            loadCityOptions();
        }
    });

    /*
    -----------------------------------------
    FORM SUBMISSION
    -----------------------------------------
    */

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let city;
        let state;

        if (userType.value === "government") {

            city = document.getElementById("cityInput").value.trim();
            state = document.getElementById("stateInput").value.trim();

            let locations = getLocations();

            const exists = locations.find(
                loc => loc.city === city && loc.state === state
            );

            if (!exists) {
                locations.push({ city, state });
                saveLocations(locations);
            }

        } else {

            city = citySelect.value;
            state = stateSelect.value;
        }

        alert("Account created successfully!");

        // Redirect works now
        window.location.href = "loginPage.html";
    });

});