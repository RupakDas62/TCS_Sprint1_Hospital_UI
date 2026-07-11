if(localStorage.getItem("loggedIn")!=="true"){

    window.location.href="../index.html";

}

const searchBtn=document.getElementById("searchBtn");

const form=document.getElementById("editForm");

let patientIndex=-1;

searchBtn.addEventListener("click",()=>{

    const id=document.getElementById("searchId").value.trim();

    const patients=Storage.getPatients();

    patientIndex=patients.findIndex(patient=>patient.patientId===id && patient.active);

    if(patientIndex===-1){

        alert("Patient Not Found");

        return;

    }

    const patient=patients[patientIndex];

    form.style.display="block";

    document.getElementById("patientId").value=patient.patientId;
    document.getElementById("firstName").value=patient.firstName;
    document.getElementById("lastName").value=patient.lastName;
    document.getElementById("age").value=patient.age;
    document.getElementById("gender").value=patient.gender;
    document.getElementById("dob").value=patient.dob;
    document.getElementById("bloodGroup").value=patient.bloodGroup;
    document.getElementById("phone").value=patient.phone;
    document.getElementById("email").value=patient.email;
    document.getElementById("address").value=patient.address;
    document.getElementById("disease").value=patient.disease;
    document.getElementById("doctor").value=patient.doctor;
    document.getElementById("admissionDate").value=patient.admissionDate;
    document.getElementById("roomType").value=patient.roomType;

});

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const patients=Storage.getPatients();

    patients[patientIndex]={

        ...patients[patientIndex],

        firstName:document.getElementById("firstName").value,
        lastName:document.getElementById("lastName").value,
        age:Number(document.getElementById("age").value),
        gender:document.getElementById("gender").value,
        dob:document.getElementById("dob").value,
        bloodGroup:document.getElementById("bloodGroup").value,
        phone:document.getElementById("phone").value,
        email:document.getElementById("email").value,
        address:document.getElementById("address").value,
        disease:document.getElementById("disease").value,
        doctor:document.getElementById("doctor").value,
        admissionDate:document.getElementById("admissionDate").value,
        roomType:document.getElementById("roomType").value

    };

    Storage.savePatients(patients);

    alert("Patient Updated Successfully");

});