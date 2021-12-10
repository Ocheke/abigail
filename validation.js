function register(){
    var fullname = document.getElementById("fullname").value
    var email = document.getElementById("email").value
    var tel = document.getElementById("phone").value
    var password = document.getElementById("password").value
    var confirmpassword = document.getElementById("confirmpassword").value

    if(fullname === "" || email === "" || tel === "" || password === "" || confirmpassword === ""){
        document.getElementById("message").innerHTML = "Inputs required"
        document.getElementById("message").style.color = "red"
    }
    else if(confirmpassword != password){
        document.getElementById("message").innerHTML = "Confirmpassword does not match password"
    }
    else if(password.length < 6 ||  confirmpassword.length < 6){
        document.getElementById("message").innerHTML = "Password must not be less than 6 characters"
    }
    else if(password.length > 15 || confirmpassword.length > 15 ){
        document.getElementById("message").innerHTML = "Password must not be greater than 15 characters"
    }
    else if((!fullname.match(/^[A-Za-z ]+$/)) || fullname.length > 50){
        document.getElementById("message").innerHTML = "Please enter a valid name"
    }
    else if((!email.match(/\S+@\S+\.\S+/))){
        document.getElementById("message").innerHTML = "Please enter a valid email"
    }
    else{
        document.getElementById("message").innerHTML = "Registration successful"
        document.getElementById("message").style.color = "green"
        window.location.href = "dashboard.html"
    }
}