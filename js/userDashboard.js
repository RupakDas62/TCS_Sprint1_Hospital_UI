if (
    localStorage.getItem("loggedIn") !== "true" ||
    localStorage.getItem("role") !== "patient"
) {
    window.location.href = "patientLogin.html";
}

const currentId = localStorage.getItem("currentPatientId");

let patients =
JSON.parse(localStorage.getItem("patients")) || [];

const patient =
patients.find(p => p.patientId === currentId);

if(!patient){

    alert("Patient Not Found");

    window.location.href="patientLogin.html";

}

/* Fill Form */

for(const key in patient){

    const element=document.getElementById(key);

    if(element){

        element.value=patient[key];

    }

}

const profileSection = document.getElementById("profileSection");
const billingSection = document.getElementById("billingSection");

const profileBtn = document.getElementById("profileBtn");
const billingBtn = document.getElementById("billingBtn");

/* Save */

document.getElementById("patientForm").addEventListener("submit",(e)=>{

    e.preventDefault();

    patient.firstName=document.getElementById("firstName").value;

    patient.lastName=document.getElementById("lastName").value;

    patient.age=Number(document.getElementById("age").value);

    patient.gender=document.getElementById("gender").value;

    patient.dob=document.getElementById("dob").value;

    patient.bloodGroup=document.getElementById("bloodGroup").value;

    patient.phone=document.getElementById("phone").value;

    patient.email=document.getElementById("email").value;

    patient.address=document.getElementById("address").value;

    patient.password=document.getElementById("password").value;

    localStorage.setItem(
        "patients",
        JSON.stringify(patients)
    );

    alert("Profile Updated Successfully");

});

/* Logout */

document.getElementById("logoutBtn").addEventListener("click",()=>{

    localStorage.removeItem("loggedIn");

    localStorage.removeItem("role");

    localStorage.removeItem("currentPatient");

    window.location.href="patientLogin.html";

});

profileBtn.addEventListener("click", () => {

    profileSection.style.display = "block";
    billingSection.style.display = "none";

    profileBtn.classList.add("active");
    billingBtn.classList.remove("active");

});

billingBtn.addEventListener("click", () => {

    profileSection.style.display = "none";
    billingSection.style.display = "block";

    profileBtn.classList.remove("active");
    billingBtn.classList.add("active");

    loadBilling();

});

function loadBilling(){

    document.getElementById("billPatientName").textContent =
        patient.firstName + " " + patient.lastName;

    document.getElementById("billPatientId").textContent =
        patient.patientId;

    document.getElementById("billDoctor").textContent =
        patient.doctor;

    document.getElementById("billDisease").textContent =
        patient.disease;

    document.getElementById("billRoomType").textContent =
        patient.roomType;

    document.getElementById("billAdmissionDate").textContent =
        patient.admissionDate;

    if(patient.bill){

        document.getElementById("roomBill").textContent =
            "₹ " + patient.bill.roomBill;

        document.getElementById("medicineBill").textContent =
            "₹ " + patient.bill.medicineBill;

        document.getElementById("diagnosticsBill").textContent =
            "₹ " + patient.bill.diagnosticsBill;

        document.getElementById("totalBill").textContent =
            "₹ " + patient.bill.totalBill;

    }else{

        document.getElementById("roomBill").textContent = "Not Generated";

        document.getElementById("medicineBill").textContent = "Not Generated";

        document.getElementById("diagnosticsBill").textContent = "Not Generated";

        document.getElementById("totalBill").textContent = "Not Generated";

    }

}