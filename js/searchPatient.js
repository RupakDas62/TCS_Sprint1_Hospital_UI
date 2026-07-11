if(localStorage.getItem("loggedIn")!=="true"){

    window.location.href="../adminLogin.html";

}

document.getElementById("searchBtn").addEventListener("click",()=>{

    const id=document.getElementById("searchPatientId").value.trim();

    const patients=Storage.getPatients();

    const patient=patients.find(p=>p.patientId===id);

    if(!patient){

        alert("Patient Not Found");

        return;

    }

    document.getElementById("patientDetails").style.display="block";

    document.getElementById("patientId").value=patient.patientId;

    document.getElementById("firstName").value=patient.firstName;

    document.getElementById("lastName").value=patient.lastName;

    document.getElementById("age").value=patient.age;

    document.getElementById("gender").value=patient.gender;

    document.getElementById("dob").value=patient.dob;

    document.getElementById("bloodGroup").value=patient.bloodGroup;

    document.getElementById("phone").value=patient.phone;

    document.getElementById("address").value=patient.address;

    document.getElementById("email").value=patient.email;

    document.getElementById("doctor").value=patient.doctor;

    document.getElementById("disease").value=patient.disease;

    document.getElementById("roomType").value=patient.roomType;

    document.getElementById("admissionDate").value=patient.admissionDate;

    document.getElementById("status").value=
        patient.active ? "Active" : "Inactive";

});