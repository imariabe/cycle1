// script.js

function calculateNextCycle() {
    const lastPeriod = document.getElementById("last-period").value;
    const cycleLength = parseInt(document.getElementById("cycle-length").value);

    if (!lastPeriod || !cycleLength) {
        alert("Please enter all the required fields.");
        return;
    }

    const lastPeriodDate = new Date(lastPeriod);
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(lastPeriodDate.getDate() + cycleLength);

    // Fertile window: 11th - 16th day of cycle
    const fertileWindowStart = new Date(lastPeriodDate);
    fertileWindowStart.setDate(lastPeriodDate.getDate() + 11);
    const fertileWindowEnd = new Date(lastPeriodDate);
    fertileWindowEnd.setDate(lastPeriodDate.getDate() + 16);

    // Display results
    document.getElementById("next-period-date").textContent = nextPeriodDate.toDateString();
    document.getElementById("fertile-window").textContent = `${fertileWindowStart.toDateString()} - ${fertileWindowEnd.toDateString()}`;

    // Show the result section and hide the form section
    document.querySelector(".form-section").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
}

function resetForm() {
    document.getElementById("cycle-form").reset();
    document.getElementById("result").classList.add("hidden");
    document.querySelector(".form-section").classList.remove("hidden");
}

function goBack() {
    // Go back to the form by hiding the result and showing the form
    document.getElementById("result").classList.add("hidden");
    document.querySelector(".form-section").classList.remove("hidden");
}
