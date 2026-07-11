const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{10,}$/;

/* ---------------- Admin Login ---------------- */

document.getElementById("adminLoginForm").addEventListener("submit",(e)=>{

    e.preventDefault();

    const userId=document.getElementById("adminUserId").value.trim();

    const password=document.getElementById("adminPassword").value.trim();

    const error=document.getElementById("adminError");

    error.textContent="";

    if(userId.length<8){

        error.textContent="User ID must contain minimum 8 characters.";

        return;

    }

    if(!passwordRegex.test(password)){

        error.textContent="Invalid Password Format.";

        return;

    }

    if(userId==="admin123" && password==="Admin@1234"){

        localStorage.setItem("loggedIn","true");

        localStorage.setItem("role","admin");

        window.location.href="dashboard.html";

    }else{

        error.textContent="Invalid Admin Credentials";

    }

});

/* ---------------- User Login ---------------- */

document.getElementById("userLoginForm").addEventListener("submit",(e)=>{

    e.preventDefault();

    const userId=document.getElementById("userUserId").value.trim();

    const password=document.getElementById("userPassword").value.trim();

    const error=document.getElementById("userError");

    error.textContent="";

    if(userId.length<8){

        error.textContent="User ID must contain minimum 8 characters.";

        return;

    }

    if(!passwordRegex.test(password)){

        error.textContent="Invalid Password Format.";

        return;

    }

    if(userId==="user1234" && password==="User@12345"){

        localStorage.setItem("loggedIn","true");

        localStorage.setItem("role","user");

        window.location.href="userDashboard.html";

    }else{

        error.textContent="Invalid User Credentials";

    }

});