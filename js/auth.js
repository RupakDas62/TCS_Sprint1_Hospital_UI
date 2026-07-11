const loginForm = document.getElementById("loginForm");

const showPassword = document.getElementById("showPassword");

const password = document.getElementById("password");

showPassword.addEventListener("change",()=>{

    password.type = showPassword.checked ? "text" : "password";

});

loginForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const userId = document.getElementById("userId").value.trim();

    const pass = password.value.trim();

    const error = document.getElementById("error");

    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{10,}$/;

    if(userId.length < 8){

        error.textContent="User ID should contain minimum 8 characters.";

        return;
    }

    if(!passwordRegex.test(pass)){

        error.textContent="Password format is invalid.";

        return;
    }

    if(userId==="admin123" && pass==="Admin@1234"){

        localStorage.setItem("loggedIn","true");

        window.location.href="dashboard.html";

    }else{

        error.textContent="Invalid Credentials";
    }

});