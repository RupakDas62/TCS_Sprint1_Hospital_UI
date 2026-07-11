if(localStorage.getItem("loggedIn")!=="true"){

    window.location.href="../index.html";

}

document.getElementById("patientId").value=Storage.generateId();

const form=document.getElementById("patientForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const phoneRegex=/^[6-9]\d{9}$/;

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const age=parseInt(document.getElementById("age").value);

    if(age<1 || age>120){

        alert("Invalid Age");

        return;

    }

    const phone=document.getElementById("phone").value.trim();

    if(!phoneRegex.test(phone)){

        alert("Invalid Phone Number");

        return;

    }

    const email=document.getElementById("email").value.trim();

    if(!emailRegex.test(email)){

        alert("Invalid Email");

        return;

    }

    const admissionDate=new Date(document.getElementById("admissionDate").value);

    if(admissionDate>new Date()){

        alert("Admission date cannot be future.");

        return;

    }

    const patient={

        patientId:document.getElementById("patientId").value,

        firstName:document.getElementById("firstName").value.trim(),

        lastName:document.getElementById("lastName").value.trim(),

        age:age,

        gender:document.getElementById("gender").value,

        dob:document.getElementById("dob").value,

        bloodGroup:document.getElementById("bloodGroup").value,

        phone:phone,

        email:email,

        address:document.getElementById("address").value,

        disease:document.getElementById("disease").value,

        doctor:document.getElementById("doctor").value,

        admissionDate:document.getElementById("admissionDate").value,

        roomType:document.getElementById("roomType").value,

        active:true

    };

    const patients=Storage.getPatients();

    patients.push(patient);

    Storage.savePatients(patients);

    document.getElementById("message").textContent="Patient Added Successfully";

    form.reset();

    document.getElementById("patientId").value=Storage.generateId();

});