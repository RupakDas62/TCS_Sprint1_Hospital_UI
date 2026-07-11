const form=document.getElementById("adminLoginForm");

const checkbox=document.getElementById("showAdminPassword");

const password=document.getElementById("adminPassword");

checkbox.addEventListener("change",()=>{

password.type=checkbox.checked?"text":"password";

});

form.addEventListener("submit",(e)=>{

e.preventDefault();

const user=document.getElementById("adminUserId").value.trim();

const pass=password.value.trim();

if(user==="admin123" && pass==="Admin@1234"){

localStorage.setItem("loggedIn","true");

localStorage.setItem("role","admin");

window.location.href="../dashboard.html";

}else{

document.getElementById("adminError").textContent="Invalid Credentials";

}

});