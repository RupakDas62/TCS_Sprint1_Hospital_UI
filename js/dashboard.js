if(localStorage.getItem("loggedIn")!=="true"){

    window.location.href="index.html";

}

const patients=Storage.getPatients();

document.getElementById("totalPatients").textContent=patients.length;

const active=patients.filter(patient=>patient.active!==false);

document.getElementById("activePatients").textContent=active.length;

console.log(document.getElementById("logoutBtn"));

// document.getElementById("today").textContent=new Date().toLocaleDateString();

document.getElementById("logoutBtn").addEventListener("click",()=>{

    console.log("Logout button clicked");
    localStorage.removeItem("loggedIn");

    window.location.href="index.html";

});