if(localStorage.getItem("loggedIn")!=="true"){

    window.location.href="../index.html";

}

let currentPatient=null;

// let roomRates={};

// fetch("../data/roomRates.json")
// .then(response=>response.json())
// .then(data=>{
//     roomRates=data;
//     console.log(JSON.stringify(roomRates));
// });

const roomRates = {
    "General": 1000,
    "Semi Private": 2500,
    "Private": 4500,
    "ICU": 8000
};


document.getElementById("searchBtn").addEventListener("click",()=>{

    const id=document.getElementById("patientId").value.trim();

    const patients=Storage.getPatients();

    currentPatient=patients.find(patient=>

        patient.patientId===id && patient.active

    );

    if(!currentPatient){

        alert("Patient Not Found");

        return;

    }

    document.getElementById("billForm").style.display="block";

    document.getElementById("patientName").value=

        currentPatient.firstName+" "+currentPatient.lastName;

    document.getElementById("roomType").value=

        currentPatient.roomType;

});

document.getElementById("calculateBtn").addEventListener("click",()=>{

    if(currentPatient===null){

        return;

    }

    const roomRate=

        roomRates[currentPatient.roomType];

    const days=

        Number(document.getElementById("days").value);

    const medicine=

        Number(document.getElementById("medicine").value);

    const diagnostics=

        Number(document.getElementById("diagnostics").value);

    const roomBill=

        roomRate*days;

    const total=

        roomBill+medicine+diagnostics;

    document.getElementById("roomBill").value=

        roomBill;

    document.getElementById("totalBill").value=

        total;

});

document.getElementById("printBtn").addEventListener("click",()=>{

    window.print();

});

document.getElementById("updateBillBtn").addEventListener("click", () => {

    if(currentPatient === null){

        alert("Please search a patient first.");

        return;

    }

    const patients = Storage.getPatients();

    const index = patients.findIndex(patient =>
        patient.patientId === currentPatient.patientId
    );

    if(index === -1){

        alert("Patient not found.");

        return;

    }

    patients[index].bill = {

        daysStayed: Number(document.getElementById("days").value),

        roomBill: Number(document.getElementById("roomBill").value),

        medicineBill: Number(document.getElementById("medicine").value),

        diagnosticsBill: Number(document.getElementById("diagnostics").value),

        totalBill: Number(document.getElementById("totalBill").value)

    };

    Storage.savePatients(patients);

    alert("Billing details updated successfully.");

});