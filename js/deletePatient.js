if(localStorage.getItem("loggedIn")!=="true"){

    window.location.href="../index.html";

}

const searchBtn=document.getElementById("searchBtn");

const card=document.getElementById("patientCard");

let patientIndex=-1;

searchBtn.addEventListener("click",()=>{

    const id=document.getElementById("searchId").value.trim();

    const patients=Storage.getPatients();

    patientIndex=patients.findIndex(patient=>

        patient.patientId===id && patient.active

    );

    if(patientIndex===-1){

        alert("Patient Not Found");

        card.style.display="none";

        return;

    }

    const patient=patients[patientIndex];

    card.style.display="block";

    document.getElementById("id").textContent=patient.patientId;

    document.getElementById("name").textContent=
    patient.firstName+" "+patient.lastName;

    document.getElementById("age").textContent=patient.age;

    document.getElementById("gender").textContent=patient.gender;

    document.getElementById("disease").textContent=patient.disease;

    document.getElementById("doctor").textContent=patient.doctor;

    document.getElementById("room").textContent=patient.roomType;

});

document.getElementById("deleteBtn").addEventListener("click",()=>{

    const confirmDelete=confirm(
        "Are you sure you want to delete this patient?"
    );

    if(!confirmDelete){

        return;

    }

    const patients=Storage.getPatients();

    patients[patientIndex].active=false;

    Storage.savePatients(patients);

    alert("Patient Deleted Successfully");

    card.style.display="none";

});