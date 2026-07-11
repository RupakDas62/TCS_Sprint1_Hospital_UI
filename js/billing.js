if(localStorage.getItem("loggedIn")!=="true"){

    window.location.href="../index.html";

}

let currentPatient=null;

let roomRates={};

fetch("../data/roomRates.json")
.then(response=>response.json())
.then(data=>{

    roomRates=data;

});

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