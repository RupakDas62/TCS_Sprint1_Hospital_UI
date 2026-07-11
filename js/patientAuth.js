const form = document.getElementById("patientLoginForm");

const checkbox = document.getElementById("showPatientPassword");

const password = document.getElementById("patientPassword");

checkbox.addEventListener("change", () => {
    password.type = checkbox.checked ? "text" : "password";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = document.getElementById("patientUserId").value.trim();
    const pass = password.value.trim();

    const patients = Storage.getPatients();

    const patient = patients.find(
        patient => patient.patientId === user && patient.password === pass
    );

    if (patient) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("role", "patient");
        localStorage.setItem("currentPatientId", patient.patientId);

        window.location.href = "userDashboard.html";
    } else {
        document.getElementById("patientError").textContent = "Invalid Credentials";
    }
});